import React from 'react';

function Title({ name, contactnumber, schoolname, rollno }) {
  return (
    <div style={{ textAlign: 'center', margin: '20px', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '10px' }}>
      <h1 style={{ fontSize: '50px', color: 'blue', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>
        {name}
      </h1>
      <h1 style={{ fontSize: '50px', color: 'blue', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>
        {contactnumber}
      </h1>
      <h1 style={{ fontSize: '50px', color: 'blue', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>
        {schoolname}
      </h1>
      <h1 style={{ fontSize: '50px', color: 'blue', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>
        {rollno}
      </h1>
    </div>
  );
}

export default Title;
 