import React, { useEffect, useState } from 'react'
import styles from './sidebar.module.css'

export default function Sidebar({ socket }) {
    const [users, setUsers] = useState([])

useEffect(() => {
    socket.on('responseNewUser', (data) => setUsers(data));

    // Обработка выхода пользователя
    socket.on('userLoggedOut', (data) => setUsers(data));

    return () => {
        socket.off('responseNewUser');
        socket.off('userLoggedOut');
    };
}, [socket]);

    return (
        <div className={styles.container}>
            <h4 className={styles.header}>Users</h4>
            <ul className={styles.users}>
                {
                    users.map((el) => (
                        <li key={el.socketID}>{el.user}</li>)
                    )}
            </ul>
        </div>
    )
}
