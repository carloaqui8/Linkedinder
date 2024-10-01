const express = require('express');
const {MongoClient} = require('mongodb');
const uri = "Oops";

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
    res.json("Hello world");
});

app.post("/signup", (req, res) => {
    res.json("Hello world");

});

app.get("/users", async (req, res) => {
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db("user-data");
        const employers = db.collection("employers");
        const employees = db.collection("employees");
        
        const retEmployers = await employers.find().toArray();
        const retEmployees = await employees.find().toArray();
        const result = [retEmployers, retEmployees];
        res.send(result);
    }
    finally {
        await client.close();
    }
});

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
})