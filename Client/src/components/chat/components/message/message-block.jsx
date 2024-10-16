import React, { useState } from 'react'
import styles from './message-block.module.css'

export default function MessageBlock({ socket }) {
    const [message, setMessage] = useState('')
    const isTyping = () => {
        socket.emit('typing', `${localStorage.getItem('user')} is typing`)
    }

    const handleSend = (e) => {
        e.preventDefault()
        if (message.trim() && localStorage.getItem('user')) {
            socket.emit('message', {
                text: message,
                name: localStorage.getItem('user'),
                id: `${socket.id} ${Math.random()}`,
                socketID: socket.id
            })
        }
        setMessage('');
    }
    return (
        <div className={styles.messagBlock}>
            <form action="" onSubmit={handleSend}>
                <input type="text" className={styles.messageInput}
                    value={message}
                    onChange={(e) => { setMessage(e.target.value) }}
                    onKeyDown={isTyping}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}
