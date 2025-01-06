const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();

const uri = process.env.URI;

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

// Dashboard and User Stuff

app.get("/", (req, res) => {
    res.json("Hello world");
});

app.post("/signup", async (req, res) => {
    const client = new MongoClient(uri);
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await client.connect();
        const db = client.db("user-data");
        const users = db.collection("users");

        const existingUser = await users.findOne({ email });

        if (existingUser) {
            return res.status(409).send("User already exists")
        }

        const sanEmail = email.toLowerCase();

        const data = {
            email: sanEmail,
            password: hashedPassword
        }

        const newUser = await users.insertOne(data);

        const token = jwt.sign(newUser, sanEmail, {
            expiresIn: 60 * 24
        });

        // Return token as cookies so user is remembered for 24 hours
        res.status(201).json({ token, id: newUser.insertedId });
    }
    catch (e) {
        console.log(e)
    }
});

app.post('/login', async (req, res) => {
    const client = new MongoClient(uri);
    const { email, password } = req.body;

    try {
        await client.connect();
        const db = client.db("user-data");
        const users = db.collection("users");

        const user = await users.findOne({ email });
        const correctPassword = await bcrypt.compare(password, user.password);

        if (user && correctPassword) {
            const token = jwt.sign(user, email, {
                expiresIn: 60 * 24
            })
            res.status(201).json({ token, id: user._id })
        }
        res.status(400).send("Invalid Credentials");
    }
    catch (e) {
        console.log(e);
    }
});

app.get("/user", async (req, res) => {
    const client = new MongoClient(uri);
    const userId = req.query.userId;

    try {
        await client.connect();
        const db = client.db('user-data');
        const users = db.collection('users');

        const query = { _id: ObjectId.createFromHexString(userId) };
        const user = await users.findOne(query)
        res.send(user);
    }
    finally {
        await client.close();
    }
});

app.get("/emp-users", async (req, res) => {
    const client = new MongoClient(uri);
    const empStatus = (req.query.empStatus == 'false') ? false : true;

    try {
        await client.connect();
        const db = client.db("user-data");
        const users = db.collection("users");
        const targets = !empStatus;
        const query = { employee: targets }
        const foundUsers = await users.find(query).toArray();

        res.send(foundUsers);
    }
    finally {
        await client.close();
    }
});

app.get("/users", async (req, res) => {
    const client = new MongoClient(uri);
    const userIds = JSON.parse(req.query.userIds).map((id) => ObjectId.createFromHexString(id));

    try {
        await client.connect();
        const db = client.db("user-data")
        const users = db.collection("users");

        const pipeline = [
            {
                '$match': {
                    '_id': {
                        '$in': userIds
                    }
                }
            }
        ]

        const foundUsers = await users.aggregate(pipeline).toArray();
        res.send(foundUsers);
    }
    finally {
        await client.close();
    }
})

app.put("/user", async (req, res) => {
    const client = new MongoClient(uri);
    const formData = req.body.formData;

    try {
        await client.connect();
        const db = client.db("user-data");
        const users = db.collection("users");
        const queryId = ObjectId.createFromHexString(formData.id);
        const query = { _id: queryId };
        let updateDoc;

        if (formData.employee == true) {
            updateDoc = {
                $set: {
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    dobYear: formData.dobYear,
                    dobMonth: formData.dobMonth,
                    dobDay: formData.dobDay,
                    imgUrl: formData.imgUrl,
                    field: formData.field,
                    education: formData.education,
                    skills: formData.skills,
                    about: formData.about,
                    employee: formData.employee,
                    offers: formData.offers
                }
            }
        }
        else {
            updateDoc = {
                $set: {
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    dobYear: formData.dobYear,
                    dobMonth: formData.dobMonth,
                    dobDay: formData.dobDay,
                    imgUrl: formData.imgUrl,
                    field: formData.field,
                    education: formData.education,
                    skills: formData.skills,
                    company: formData.company,
                    employee: formData.employee,
                    offers: formData.offers
                }
            }
        }
        const insertUser = await users.updateOne(query, updateDoc);
        res.send(insertUser);
    }
    catch (e) {
        console.log(e)
    }
    finally {
        await client.close();
    }
});

app.put("/addconnection", async (req, res) => {
    const client = new MongoClient(uri);
    const { userId, prospectId } = req.body;

    try {
        await client.connect();
        const db = client.db("user-data");
        const users = db.collection("users");

        const query = { _id: ObjectId.createFromHexString(userId) };
        const updateDoc = {
            $push: { offers: { _id: prospectId } }
        }
        const user = await users.updateOne(query, updateDoc);
        res.send(user);
    }
    finally {
        await client.close();
    }
});

// Messages Stuff

app.get("/messages", async (req, res) => {
    const client = new MongoClient(uri);
    const { userId, otherUserId } = req.query;

    try {
        await client.connect();
        const db = client.db('message-data');
        const messages = db.collection('messages');
        const query = {
            fromUserId: { _id: ObjectId.createFromHexString(userId) },
            toUserId: { _id: ObjectId.createFromHexString(otherUserId) }
        }

        const foundMessages = await messages.find(query).toArray();
        res.send(foundMessages);
    }
    finally {
        await client.close();
    }
});

app.post("/message", async (req, res) => {
    const client = new MongoClient(uri);
    const message = req.body;
    const userId = message.fromUserId;
    const clickedUserId = message.toUserId;

    message.fromUserId = {
        _id: ObjectId.createFromHexString(userId),
    }
    message.toUserId = {
        _id: ObjectId.createFromHexString(clickedUserId)
    }

    try {
        await client.connect();
        const db = client.db('message-data');
        const messages = db.collection('messages');
        const updated = await messages.insertOne(message);
        res.send(updated);
    }
    finally {
        await client.close();
    }
});


app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
})