import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Main = (props) => {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://reqres.in/api/users?page=1')
      .then(res => setUserData(res.data.data))
      .catch(err => console.log(err));
  }, []);

  const handleClick = (_id) => {
    console.log(_id);
    if (_id !== null) {     
      navigate("/info",{state: {id: _id}});
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
                  <div className="card" key={item.id}onClick={() => handleClick(item.id)}>
                    <div><img src={item.avatar} /></div>
                    <div className="name">{item.first_name}</div>
                    <div className="email">{item.email}</div>
                  </div>
                )
              })
            }
          </>
        </>
      </div>
    </>

  )
}

export default Main