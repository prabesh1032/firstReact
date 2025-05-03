import React from 'react';

function Title(props) {
return (
    <div style={{ textAlign: 'center', margin: '20px', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '10px' }}>
        <h1 style={{ fontSize: '50px', color: '#333', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>
            {props.name}
        </h1>
    </div>
);
}

export default Title;
