import React from 'react'

const Card = ({user}) => {
  return (
    <>
        {
            user.map((item)=>{
                let firstName = item.first_name;
                let email = item.email;
                let pfp = item.avatar;
                return(
                    <div className="card">
                        <div><img src={pfp} /></div>
                        <div className="name">{firstName}</div>
                        <div className="email">{email}</div>
                    </div>
                )
            })
            
        }
        
    </>
  )
}

export default Card