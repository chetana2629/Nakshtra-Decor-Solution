import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for data fetching
import styles from './AdminPage.module.css'; // Import the CSS module
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield, faCog, faSignOutAlt, faUser, faProjectDiagram, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const AdminPage = () => {
    const [projects, setProjects] = useState([]);
    const [clients, setClients] = useState([]);
    const [quotes, setQuotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    const handleLogout = () => {
        // Add your logout logic here (e.g., clearing tokens)
        console.log('Logging out...');
        navigate('/login'); // Redirect to login page or home page after logout
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                // Replace these URLs with your actual API endpoints
                const [projectsResponse, clientsResponse, quotesResponse] = await Promise.all([
                    axios.get('http://localhost:7350/api/projects'),
                    axios.get('http://localhost:7350/api/clients'),
                    axios.get('http://localhost:7350/api/quotes')
                ]);
                setProjects(projectsResponse.data);
                setClients(clientsResponse.data);
                setQuotes(quotesResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Failed to fetch data.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.profile}>
                <div className={styles.avatar}>
                    <FontAwesomeIcon icon={faUserShield} size="6x" />
                </div>
                <div className={styles.details}>
                    <h1>Welcome, Admin!</h1>
                    <p>Manage your interior design projects and client information here.</p>
                </div>
            </div>
            <div className={styles.actions}>
                <button className={styles.actionBtn} onClick={() => handleNavigate('/projects')} aria-label="Manage Projects">
                    <FontAwesomeIcon icon={faProjectDiagram} size="lg" />
                    Manage Projects
                </button>
                <button className={styles.actionBtn} onClick={() => handleNavigate('/clients')} aria-label="Manage Clients">
                    <FontAwesomeIcon icon={faUser} size="lg" />
                    Manage Clients
                </button>
                <button className={styles.actionBtn} onClick={() => handleNavigate('/quotes')} aria-label="Manage Quotes">
                    <FontAwesomeIcon icon={faQuoteLeft} size="lg" />
                    Send Quotation
                </button>
                <button className={styles.actionBtn} onClick={() => handleNavigate('/settings')} aria-label="Settings">
                    <FontAwesomeIcon icon={faCog} size="lg" />
                    Settings
                </button>
                <button className={styles.actionBtn} onClick={handleLogout} aria-label="Logout">
                    <FontAwesomeIcon icon={faSignOutAlt} size="lg" />
                    Logout
                </button>
            </div>
            <div className={styles.dataContainer}>
                {loading && <p>Loading data...</p>}
                {error && <p className={styles.error}>{error}</p>}
                {!loading && !error && (
                    <div>
                        <h2>Projects Overview</h2>
                        <ul>
                            {projects.map(project => (
                                <li key={project.id}>{project.name} - {project.status}</li>
                            ))}
                        </ul>
                        <h2>Clients Overview</h2>
                        <ul>
                            {clients.map(client => (
                                <li key={client.id}>{client.name} - {client.contact}</li>
                            ))}
                        </ul>
                        <h2>Quotes Overview</h2>
                        <ul>
                            {quotes.map(quote => (
                                <li key={quote.id}>{quote.description} - {quote.amount}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminPage;