import React from 'react'
import Usercontain from '../components/Usercontain';
import data from '../utils/data';

function Userlist() {

    return (
        <div>
            {
                data.map(({ name, schoolname, rollno, contactnumber }) => (
                <h1><Usercontain name={name}
                    schoolname={schoolname}
                    rollno={rollno}
                    contactnumber={contactnumber}
                /></h1>
            )
            )}
        </div>
    );
}

export default Userlist
