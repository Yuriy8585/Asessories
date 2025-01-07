import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


const Registration = ({ onRegisterSuccess, onRegisterError }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrors({});
/*
        // Валидация данных
        if (password !== confirmPassword) {
            setErrors({ confirmPassword: 'Passwords do not match' });
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });
            console.log(response)

            const data = await response.json();
            if (response.ok) {
                // Вызов функции обратного вызова для успешной регистрации
                onRegisterSuccess(data.message);
            } else {
                // Вызов функции обратного вызова для обработки ошибки
                setErrors({ username: data.message });
                onRegisterError(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            onRegisterError('An error occurred during registration.');
        }
            */
    };


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

                    <button onClick={Registration(username, email, password, confirmPassword)}><Link className="button" to="/">Register</Link></button>
                </form>
            </div>

        </div>


    )
}





const mapDispatchToProps = (dispatch) => ({
    
    registrationToStore: (input) => dispatch({type: 'PUT_REGISTRATION', payload: input}),
});

export default connect( null, mapDispatchToProps)(Registration);
