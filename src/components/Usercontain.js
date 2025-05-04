import React from 'react'

function Usercontain({ name, schoolname, rollno, contactnumber }) {
    return (
        <div>
            <h1>{name}</h1>
            <p>{schoolname}</p>
            <p>{rollno}</p>
            <h1>{contactnumber}</h1>
        </div>
    );
}

export default Usercontain
