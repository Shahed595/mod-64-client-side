import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUsers = () => {
    const [user,setUser]=useState({});
    const {id}=useParams();
    useEffect(()=>{
        const url=`http://localhost:5000/users/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[])
    return (
        <div>
            <h2>update user: {user.name}</h2>
            <p><small>{id}</small></p>
        </div>
    );
};

export default UpdateUsers;