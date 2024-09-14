import React, {useState} from 'react';
//import {connect} from "react-redux";
import {Link} from 'react-router-dom';

function Registration() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = {};
        if (username.trim() === '') {
            errors.username = 'Username is required';
        }
        if (email.trim() === '') {
            errors.email = 'Email is required';
        }
        if (password.trim() === '') {
            errors.password = 'Password is required';
        }
        if (confirmPassword.trim() === '') {
            errors.confirmPassword = 'Confirm password is required';
        }
        if (password !== confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
        }
        setErrors(errors);
        if (Object.keys(errors).length === 0) {
            // Call API or perform registration logic here
            console.log('Registration submitted:', {username, email, password, confirmPassword});
        }
    };

    const regstratonButton = (username, email) => {
        props.registrationToStore(username, email)
    }


    return (
        <div>


            <div>
                <h1>Registration Page</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Username:
                        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}/>
                        {errors.username && <div style={{color: 'ed'}}>{errors.username}</div>}
                    </label>
                    <br/>
                    <label>
                        Email:
                        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
                        {errors.email && <div style={{color: 'ed'}}>{errors.email}</div>}
                    </label>
                    <br/>
                    <label>
                        Password:
                        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                        {errors.password && <div style={{color: 'ed'}}>{errors.password}</div>}
                    </label>
                    <br/>
                    <label>
                        Confirm Password:
                        <input type="password" value={confirmPassword}
                               onChange={(event) => setConfirmPassword(event.target.value)}/>
                        {errors.confirmPassword && <div style={{color: 'ed'}}>{errors.confirmPassword}</div>}
                    </label>
                    <br/>

                    <button onClick={regstratonButton(username, email)}><Link className="button" to="*">Register</Link></button>
                </form>
            </div>

        </div>


    )
}


const mapDispatchToProps = (dispatch) => ({
    // this will be injected in child component props
    registrationToStore: (input) => dispatch({type: 'PUT_REGISTRATION', payload: input}),
});

export default connect(null, mapDispatchToProps)(Registration);
