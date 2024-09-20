import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import ChatContainer from '../components/ChatContainer';

function Dashboard() {
    const characters = [
        {
            name: 'Richard Hendricks',
            url: 'https://i.imgur.com/zEkZAvF.png'
        },
        {
            name: 'Erlich Bachman',
            url: 'https://i.imgur.com/zEkZAvF.png'
        },
        {
            name: 'Monica Hall',
            url: 'https://i.imgur.com/zEkZAvF.png'
        },
        {
            name: 'Jared Dunn',
            url: 'https://i.imgur.com/zEkZAvF.png'
        },
        {
            name: 'Dinesh Chugtai',
            url: 'https://i.imgur.com/zEkZAvF.png'
        }
    ];
    const [lastDirection, setLastDirection] = useState("");

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete);
        setLastDirection(direction);
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!');
    }

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "scroll";
        };
    }, []);

    return (
        <div className="dashboard">
            <ChatContainer />
            <div className="swipe-container">
                <div className="cards-container">
                    {characters.map((character) =>
                        <TinderCard className='swipe'
                            key={character.name}
                            onSwipe={(dir) => swiped(dir, character.name)}
                            onCardLeftScreen={() => outOfFrame(character.name)}>
                            <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
                                <h3 style={{ userSelect: "none" }}>{character.name}</h3>
                            </div>
                        </TinderCard>
                    )}
                </div>
                <div className="swipe-info">
                    {lastDirection ? <p>You swiped {lastDirection}</p> : <p />}
                </div>
            </div>
        </div >
    );
}

export default Dashboard;