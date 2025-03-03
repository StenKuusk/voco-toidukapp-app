import React, { useEffect, useState } from 'react';
import { getTakenFoodLogs, deleteExpiredFood } from '../services/api';

const AdminPanel: React.FC = () => {
    const [foodLogs, setFoodLogs] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFoodLogs = async () => {
            const logs = await getTakenFoodLogs();
            setFoodLogs(logs);
            setLoading(false);
        };

        fetchFoodLogs();
    }, []);

    const handleDeleteExpired = async () => {
        await deleteExpiredFood();
        // Refresh the logs after deletion
        const logs = await getTakenFoodLogs();
        setFoodLogs(logs);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Admin Panel</h2>
            <button onClick={handleDeleteExpired}>Delete Expired Food</button>
            <h3>Food Taken Logs</h3>
            <ul>
                {foodLogs.map((log, index) => (
                    <li key={index}>
                        {log.foodName} - Taken on {log.takenDate}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminPanel;