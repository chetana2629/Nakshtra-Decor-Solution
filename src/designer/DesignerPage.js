import React from 'react';
import styles from './DesignerPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBrush, faEdit, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const DesignerPage = () => {
    const navigate = useNavigate();

    const handleViewProjects = () => {
        navigate('/projects'); 
    };

    const handleEditProfile = () => {
        navigate('/edit-profile'); 
    };

    const handleLogout = () => {
       
        console.log('Logging out...');
      
    };

    return (
        <div className={styles.container}>
            <div className={styles.profile}>
                <div className={styles.avatar}>
                    <FontAwesomeIcon icon={faUser} size="6x" />
                </div>
                <div className={styles.details}>
                    <h1>Welcome, Designer !</h1>
                    <p>Your profile and project management options are below.</p>
                </div>
            </div>
            <div className={styles.actions}>
                <button className={styles.actionBtn} onClick={handleViewProjects}>
                    <FontAwesomeIcon icon={faBrush} size="lg" />
                    View Projects
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

export default DesignerPage;
