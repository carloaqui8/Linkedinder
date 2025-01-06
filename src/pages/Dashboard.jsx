import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie'
import TinderCard from 'react-tinder-card';
import ChatContainer from '../components/ChatContainer';
import axios from 'axios'

function Dashboard() {
    const [user, setUser] = useState(null);
    const [empUsers, setEmpUsers] = useState(null);
    const [cookies, setCookie, removeCookie] = useCookies(['user'])
    const [lastDirection, setLastDirection] = useState("");

    const userId = cookies.id;

    const getUser = async () => {
        try {
            const response = await axios.get('http://localhost:8000/user', {
                params: { userId }
            })
            setUser(response.data);
        }
        catch (e) {
            console.log(e)
        }
    };

    const getEmpUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8000/emp-users', {
                params: { empStatus: user?.employee }
            });
            setEmpUsers(response.data);
        }
        catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getUser();
    }, []);

    useEffect(() => {
        getEmpUsers();
    }, [user]);

    const updateConnections = async (prospectId) => {
        try {
            await axios.put('http://localhost:8000/addconnection', {
                userId,
                prospectId
            })
            getUser()
        }
        catch (e) {
            console.log(e);
        }
    }

    const swiped = (direction, swipedUserId) => {

        if (direction === 'right') {
            updateConnections(swipedUserId)
        }
        setLastDirection(direction);
    }

    // Used to make offers not show up on cards again
    const connsAndMeIds = user?.offers.map(({ _id }) => _id).concat(userId);

    const filteredEmpUsers = empUsers?.filter(
        (prospect) => !connsAndMeIds?.includes(prospect._id)
    )

    useEffect(() => {
        document.body.style.overflowX = "hidden";
        return () => {
            document.body.style.overflowX = "scroll";
        };
    }, []);

    return (
        <>
            {user && <div className="dashboard">
                <ChatContainer user={user} />
                <div className="swipe-container">
                    <div className="cards-container">
                        {filteredEmpUsers?.map((prospect) =>
                            <TinderCard className='swipe'
                                key={prospect.firstName}
                                onSwipe={(dir) => swiped(dir, prospect._id)}>
                                <div style={{ backgroundImage: 'url(' + prospect.imgUrl + ')' }} className='card'>
                                    <h3 style={{ userSelect: "none" }}>{prospect.firstName}</h3>
                                </div>
                            </TinderCard>
                        )}
                    </div>
                    <div className="swipe-info">
                        {lastDirection ? <p>You swiped {lastDirection}</p> : <p />}
                    </div>
                </div>
            </div >}
        </>
    );
}

export default Dashboard;