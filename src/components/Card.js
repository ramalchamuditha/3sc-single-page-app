import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Card = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState(0);

    useEffect(() => {
        let userID = location.state.id;

        axios.get('https://reqres.in/api/users/' + userID)
            .then(res => setCurrentUser(res.data.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <div className="header-1">
                <div className="row-back">
                    <h1 onClick={() => navigate(-1)}>Back</h1>
                </div>
            </div>
            <div className="user-container">
                {
                    <div className="card-1">
                        <div><img src={currentUser.avatar} /></div>
                        <div className="card-details">
                            <div className="card-labels">
                                <div className="first-name">First Name</div>
                                <div className="last-name">Last Name</div>
                                <div className="email">Email</div>
                            </div>
                            <div className="card-data">
                                <div className="first-name">{currentUser.first_name}</div>
                                <div className="last-name">{currentUser.last_name}</div>
                                <div className="email">{currentUser.email}</div>
                            </div>
                        </div>
                    </div>
                }

            </div>

        </>
    )
}

export default Card