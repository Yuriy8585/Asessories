import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {append} from 'server.js';

const Registration = ({ onRegisterSuccess, onRegisterError }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrors({});

            }
    


    return (
        <div>


            <div>
                <h1>Registration Page</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Username:
                        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}/>
                        {errors.username && <div style={{color: 'red'}}>{errors.username}</div>}
                    </label>
                    <br/>
                    <label>
                        Email:
                        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
                        {errors.email && <div style={{color: 'red'}}>{errors.email}</div>}
                    </label>
                    <br/>
                    <label>
                        Password:
                        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                        {errors.password && <div style={{color: 'red'}}>{errors.password}</div>}
                    </label>
                    <br/>
                    <label>
                        Confirm Password:
                        <input type="password" value={confirmPassword}
                               onChange={(event) => setConfirmPassword(event.target.value)}/>
                        {errors.confirmPassword && <div style={{color: 'red'}}>{errors.confirmPassword}</div>}
                    </label>
                    <br/>

                   {/* <Link className="button" to="/">Register</Link>*/}
                   <button onClick= {sendToBackend ({username})}  type="submit">Register</button>
                </form>
                
            </div>

        </div>


    )
}





function sendToBackend(user) {
    const res = '';
    const reg = ('email', 'password');
    
  // Simulate sending data to the backend
  fetch(append(res, reg), {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
  })
  
  .then(response => response.json())
  .then(data => {
      console.log('Success:', data);
      alert('Login successful!');
  })
  .catch((error) => {
      console.error('Error:', error);
      alert('Login failed. Please try again.');
  });
}




const mapDispatchToProps = (dispatch) => ({
    
    registrationToStore: (input) => dispatch({type: 'PUT_REGISTRATION', payload: input}),
});

export default connect( null, mapDispatchToProps)(Registration);
