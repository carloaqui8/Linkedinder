import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ConnectionsDisplay({ conns, setClickedUser }) {
    const [connProfiles, setConnProfiles] = useState(null);
    const connsIds = conns.map(({ _id }) => _id);

    const getConns = async () => {
        try {
            const response = await axios.get('http://localhost:8000/users', {
                params: { userIds: JSON.stringify(connsIds) }
            })
            setConnProfiles(response.data);
        }
        catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getConns();
    }, []);
    
    return (
        <div className="connections-display">
            {connProfiles?.map((conn, _index) => (
                <div key={{ _index }} className={"conn-card"} onClick={() => setClickedUser(conn)}>
                    <div className="img-container">
                        <img src={conn?.imgUrl} alt={conn?.firstName + ' profile'} />
                    </div>
                    <h3>{conn?.firstName}</h3>
                </div>
            ))}
        </div>
    );
}

export default ConnectionsDisplay;