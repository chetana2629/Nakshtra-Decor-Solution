import React, { useState } from 'react';
import styles from './RegisterForm.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCity, faMapPin, faPhone, faEnvelope, faLock, faUserTag } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Register3 = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        city: '',
        pincode: '',
        mobile: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: ''
    });

    const [formErrors, setFormErrors] = useState({
        firstName: false,
        lastName: false,
        city: false,
        pincode: false,
        mobile: false,
        username: false,
        email: false,
        password: false,
        confirmPassword: false,
        role: false
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const validateForm = () => {
        const usernameRegex = /^[a-zA-Z0-9_]{4,20}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
        const pincodeRegex = /^\d{6}$/;
        const mobileRegex = /^\d{10}$/;

        const errors = {
            firstName: formData.firstName.trim() === '',
            lastName: formData.lastName.trim() === '',
            city: formData.city.trim() === '',
            pincode: !pincodeRegex.test(formData.pincode),
            mobile: !mobileRegex.test(formData.mobile),
            username: !usernameRegex.test(formData.username),
            email: !emailRegex.test(formData.email),
            password: !passwordRegex.test(formData.password),
            confirmPassword: formData.password !== formData.confirmPassword,
            role: formData.role.trim() === ''
        };

        setFormErrors(errors);
        return !Object.values(errors).includes(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await axios.post("http://localhost:7350/user/add", {
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    phoneNo: formData.mobile,
                    city: formData.city,
                    email: formData.email,
                    pincode: formData.pincode,
                    userName: formData.username,
                    password: formData.password,
                    role: formData.role,
                });

                console.log('API Response:', response.data);
                if (response.status === 201) {
                    
                    navigate('/Login');
                } else {
                    console.error('API Response indicates failure:', response.data);
                }
            } catch (error) {
                console.error('API Call Error:', error);
            }
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <form id="registerForm" onSubmit={handleSubmit} className={styles.form}>
                    <h1>Register</h1>
                    <div className={styles.gridContainer}>
                        <div className={styles.column}>
                            <h2 className={styles.subTitle}>Personal Details</h2>
                            {[
                                { id: 'firstName', placeholder: 'First Name', icon: faUser, errorMsg: 'First name is required.' },
                                { id: 'lastName', placeholder: 'Last Name', icon: faUser, errorMsg: 'Last name is required.' },
                                { id: 'city', placeholder: 'City', icon: faCity, errorMsg: 'City is required.' },
                                { id: 'pincode', placeholder: 'Pincode', icon: faMapPin, errorMsg: 'Invalid pincode. It should be a 6-digit number.' },
                                { id: 'mobile', placeholder: 'Mobile Number', icon: faPhone, errorMsg: 'Invalid mobile number. It should be a 10-digit number.' }
                            ].map(({ id, placeholder, icon, errorMsg }) => (
                                <div key={id} className={styles.inputBox}>
                                    <FontAwesomeIcon icon={icon} className={styles.icon} />
                                    <input
                                        type="text"
                                        id={id}
                                        placeholder={placeholder}
                                        value={formData[id]}
                                        onChange={handleInputChange}
                                        required
                                        className={styles.input}
                                    />
                                    {formErrors[id] && (
                                        <div className={`${styles.errorMessage} ${styles.visible}`}>
                                            {errorMsg}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className={styles.column}>
                            <h2 className={styles.subTitle}>Account Details</h2>
                            {[
                                { id: 'username', placeholder: 'Username', type: 'text', icon: faUser, errorMsg: 'Invalid username. It should be 4-20 characters long and can include letters, numbers, and underscores.' },
                                { id: 'email', placeholder: 'Email', type: 'email', icon: faEnvelope, errorMsg: 'Invalid email address.' },
                                { id: 'password', placeholder: 'Password', type: 'password', icon: faLock, errorMsg: 'Invalid password. It should be 8-16 characters long and include letters, numbers, and special characters.' },
                                { id: 'confirmPassword', placeholder: 'Confirm Password', type: 'password', icon: faLock, errorMsg: 'Passwords do not match.' }
                            ].map(({ id, placeholder, type, icon, errorMsg }) => (
                                <div key={id} className={styles.inputBox}>
                                    <FontAwesomeIcon icon={icon} className={styles.icon} />
                                    <input
                                        type={type}
                                        id={id}
                                        placeholder={placeholder}
                                        value={formData[id]}
                                        onChange={handleInputChange}
                                        required
                                        className={styles.input}
                                    />
                                    {formErrors[id] && (
                                        <div className={`${styles.errorMessage} ${styles.visible}`}>
                                            {errorMsg}
                                        </div>
                                    )}
                                </div>
                            ))}

                            <div className={styles.inputBox}>
                                <FontAwesomeIcon icon={faUserTag} className={styles.icon} />
                                <select
                                    id="role"
                                    value={formData.role}
                                    onChange={handleInputChange}
                                    required
                                    className={styles.input}
                                >
                                    <option value="">Select Role</option>
                                    <option value="designer">Designer</option>
                                    <option value="admin">Admin</option>
                                    <option value="customer">Customer</option>
                                </select>
                                {formErrors.role && (
                                    <div className={`${styles.errorMessage} ${styles.visible}`}>
                                        Role is required.
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <button type="submit" className={styles.btn}>Register</button>

                    <div className={styles.registerLink}>
                        <p>Already have an account? <Link to="/login">Login</Link></p>
                        <Link to="/CustomerLogin">
                            <BsArrowRight style={{ marginLeft: '2%', color: '#CDA274' }} />
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register3;
