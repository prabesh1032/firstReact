import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState(23);

  function handleRegister(event) {
    event.preventDefault(); // Prevent the default form submission behavio
    console.log("Registered Successfully");
  }
  function increseAge(event) {
    event.preventDefault(); 
    setAge(age + 1);
  }
  useEffect(() => {
    console.log("age:", age);
  }, [age]); 
  
  return (
    <form>
         <h1>{age}</h1>
         <button onClick={increseAge}>Increse</button> 
            <div>
              <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} style={{ margin: '10px', padding: '10px', borderRadius: '5px' }} />
              <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ margin: '10px', padding: '10px', borderRadius: '5px' }} />
              <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ margin: '10px', padding: '10px', borderRadius: '5px' }} />
              <button onClick={handleRegister} style={{ margin: '10px', padding: '10px', borderRadius: '5px', backgroundColor: 'blue', color: 'white' }}>
                Submit
              </button>  
              <div>
                {/* <button>Take me to Contact</button> */}
                <Link to="/contact"
               style={{ margin: '0', padding: '1px', borderRadius: '3px', backgroundColor: 'cyan', 
               color: 'black', textDecoration: 'none' }}>Contact</Link>
              </div>
            </div>
    </form>
  );
}
export default Register;
