import React, { useRef } from 'react';

const AddStudents = () => {
    const nameRef=useRef();
    const subjectRef=useRef();
    const emailRef=useRef();

    const handleAddStudents=e=>{
        const name=nameRef.current.value;
        const subject=subjectRef.current.value;
        const email=emailRef.current.value;

        const newStudents={name,subject,email};
        fetch('http://localhost:5000/datas',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newStudents)
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.insertedId){
                alert("Successfully addeded Students");
                e.target.reset();
            }
        })
        e.preventDefault();
    }
    return (
        <div>
            <form className='mt-5' onSubmit={handleAddStudents}>
                <input type="text" name="name" id="name" placeholder='Enter Your Name' ref={nameRef}/>
                <br/>
                <br/>
                <input type="text" name="subject" id="subjet" placeholder='Enter Your Subject' ref={subjectRef}/>
                <br/>
                <br/>
                <input type="email" name="email" id="email" placeholder='Enter Your Email' ref={emailRef}/>
                <br/>
                <br/>
                <input type="submit"/>
            </form>
        </div>
    );
};

export default AddStudents;