import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const Main = () => {
  const [userData, setUserData] = useState([]);
  const [currentUser, setCurrentUser] = useState(0);

  useEffect(() => {
    axios.get('https://reqres.in/api/users?page=1')
      .then(res => setUserData(res.data.data))
      .catch(err => console.log(err));
  }, []);

  const handleClick = (_id) => {
    console.log(_id);
    if(_id !== null){
      axios.get('https://reqres.in/api/users/' + _id)
      //.then(res=> console.log(res.data.data))
      .then(res => setCurrentUser(res.data.data))
      .catch(err => console.log(err));
    }
    
  }

  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>Title</h1>
        </div>
        <div className="row2">
          <h2>Users</h2>
        </div>
      </div>

      <div className="container">
        <>
          <>
            {
              userData.map((item) => {
                return (
                  <div className="card" key={item.id} onClick={() => handleClick(item.id)}>
                    <div><img src={item.avatar} /></div>
                    <div className="name">{item.first_name}</div>
                    <div className="email">{item.email}</div>                    
                  </div>
                )
              })

            }
          </>
          <>
          {
            <Card user={currentUser} />
          }
          </>
        </>
      </div>
    </>
  )
}

export default Main