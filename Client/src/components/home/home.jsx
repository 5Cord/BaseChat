import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Home.module.css'  // Импорт CSS

export default function Home({ socket }) {
    const navigate = useNavigate()
    const [user, setUser] = useState('');

    const handleSumbit = (e) => {
        e.preventDefault()
        localStorage.setItem('user', user)
        socket.emit('newUser', { user, socketID: socket.id })
        navigate('/chat')
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSumbit}>
                <h2>Connection in chat</h2>
                <label htmlFor='username'></label>
                <input
                    type="text"
                    id='username'
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    placeholder="Enter your username"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
