import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Students = () => {
    const[students,setStudents]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/datas')
        .then(res=>res.json())
        .then(data=>setStudents(data))
    },[])

    const handleDeleteUser=id=>{
         const proceed=window.confirm("Are You Sure,You Want To Delete?");
        if(proceed){
            const url=`http://localhost:5000/datas/${id}`;
            fetch(url,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    alert("Deleted SuccessFully");
                    const remainingStudents=students.filter(student=>student._id!==id);
                        setStudents(remainingStudents);
                }
            })
         }
    }
    return (
        <div className='mt-5'>
            <h2>Total Students : {students.length}</h2>
            <ul>
                {
                    students.map(student=><li key={student._id}>
                        {student.name}::{student.subject} :: {student.email}
                        <Link to={`/students/update/${student._id}`}><button>Update</button></Link>
                        <button onClick={()=>handleDeleteUser(student._id)}>Delete</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Students;