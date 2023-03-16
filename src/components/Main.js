import React, { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';

const Main = () => {
  const [userData, setUserData ] = useState([]);

  useEffect(() => {
    axios.get('https://reqres.in/api/users?page=1')
    .then(res=>setUserData(res.data.data))
    //.then(res=>console.log(res.data.data))
    .catch(err=>console.log(err))
  });
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
          {<Card user={userData} /> }
        </div>
    </>
  )
}

export default Main