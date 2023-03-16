import React from 'react'

const Card = ({ user }) => {
    return (
        <>
            {
                <div className="card1">
                    <div><img src={user.avatar} /></div>
                    <div className="name">{user.first_name}</div>
                    <div className="name">{user.last_name}</div>
                    <div className="email">{user.email}</div>
                </div>
            }
        </>
    )
}

export default Card