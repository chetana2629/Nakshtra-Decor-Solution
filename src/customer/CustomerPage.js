// src/CustomerPage.js
import React from 'react';
import styles from './CustomerPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faEdit, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const CustomerPage = () => {
    const navigate = useNavigate();

    const handleViewOrders = () => {
        navigate('/orders'); // Navigate to OrdersPage
    };

    const handleEditProfile = () => {
        navigate('/edit-profile'); // Navigate to EditProfilePage
    };

    const handleLogout = () => {
        // Implement logout functionality here
        console.log('Logging out...');
    };

    return (
        <div className={styles.container}>
            <div className={styles.profile}>
                <div className={styles.avatar}>
                    <FontAwesomeIcon icon={faUser} size="6x" />
                </div>
                <div className={styles.details}>
                    <h1>Welcome!</h1>
                    <p>Your account details and order history are accessible here.</p>
                </div>
            </div>
            <div className={styles.actions}>
                <button className={styles.actionBtn} onClick={handleViewOrders}>
                    <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                    View Orders
                </button>
                <button className={styles.actionBtn} onClick={handleEditProfile}>
                    <FontAwesomeIcon icon={faEdit} size="lg" />
                    Edit Profile
                </button>
                <button className={styles.actionBtn} onClick={handleLogout}>
                    <FontAwesomeIcon icon={faSignOutAlt} size="lg" />
                    Logout
                </button>
            </div>
        </div>
    );
};

export default CustomerPage;
