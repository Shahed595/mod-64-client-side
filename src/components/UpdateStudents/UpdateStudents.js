import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateStudents = () => {
    const [student,setStudent]=useState({});
    const {id}=useParams();
    useEffect(()=>{
        const url=`http://localhost:5000/datas/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setStudent(data))
    },[])

    return (
        <div>
            <h2> Update Students :{student.name}</h2>
            <p><small>{id}</small></p>

        </div>
    );
};

export default UpdateStudents;