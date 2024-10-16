import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
        <form onSubmit={handleSumbit}>
            <h2>Connection in chat</h2>
            <label htmlFor='username'></label>
            <input type="text" id='username' value={user} onChange={(e) => setUser(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    )
}
