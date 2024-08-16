import React, { useState } from 'react';
import styles from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        role: 'customer' // Default role
    });
    const [error, setError] = useState('');
    const [showForgotPassword, setShowForgotPassword] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const { username, password } = formData;
    
        if (username.trim() === '' || password.trim() === '') {
            setError('Username and password are required.');
            return;
        }
    
        try {
            const response = await axios.post('http://localhost:7350/user/login', { username, password });
    
            console.log('API Response:', response.data); // Log the API response
    
            if (response.status === 200) {
                const userRole = response.data.role ? response.data.role.toLowerCase() : '';
                console.log('User Role:', userRole); // Log the extracted role
                
                if (userRole) {
                    switch (userRole) {
                        case 'customer':
                            navigate('/customer');
                            break;
                        case 'admin':
                            navigate('/admin');
                            break;
                        case 'designer':
                            navigate('/designer');
                            break;
                        default:
                            setError(`Invalid role: ${userRole}.`);
                            break;
                    }
                } else {
                    setError('Role is missing from response.');
                }
            } else {
                setError('Invalid username or password.');
            }
        } catch (error) {
            console.error('Login failed:', error);
            setError('Login failed. Please try again.');
        }
    };
    
    const handleRegister = () => {
        navigate('/register3');
    };

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        try {
            console.log("Forgot password for username:", formData.username);
            alert('Password reset link sent.');
        } catch (error) {
            console.error('Password reset failed:', error);
            alert('Password reset failed. Please try again.');
        }
    };

    return (
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <div className={styles.inputBox}>
                        <FontAwesomeIcon icon={faUser} className={styles.icon} />
                        <input
                            type="text"
                            id="username"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.inputBox}>
                        <FontAwesomeIcon icon={faLock} className={styles.icon} />
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.inputBox}>
                        <label htmlFor="role"></label>
                        <select
                            id="role"
                            value={formData.role}
                            onChange={handleChange}
                            className={styles.select}
                        >
                            <option value="customer">Customer</option>
                            <option value="admin">Admin</option>
                            <option value="designer">Designer</option>
                        </select>
                    </div>
                    {error && <div className={styles.errorMessage}>{error}</div>}
                    <div className={styles.rememberForgot}>
                        <label>
                            <input type="checkbox" /> Remember me
                        </label>
                        <Link to="#" onClick={() => setShowForgotPassword(true)}>Forgot Password?</Link>
                    </div>
                    <button className={styles.btn} type="submit">Login</button>
                </form>
                <div className={styles.registerLink}>
                    <p>
                        Don't have an account? <button onClick={handleRegister}>Register</button>
                    </p>
                    <Link to="/">
                        <BsArrowRight style={{ marginLeft: '2%', color: '#CDA274' }} />
                    </Link>
                </div>
                {/* Forgot Password Form */}
                {showForgotPassword && (
                    <div className={styles.forgotPasswordForm}>
                        <h2>Forgot Password</h2>
                        <form onSubmit={handleForgotPassword}>
                            <div className={styles.inputBox}>
                                <FontAwesomeIcon icon={faUser} className={styles.icon} />
                                <input
                                    type="text"
                                    id="username"
                                    placeholder="Username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button className={styles.btn} type="submit">Send Reset Link</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;
