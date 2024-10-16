import React, { useEffect, useState } from 'react'
import Sidebar from './components/sidebar/sidebar'
import MessageBlock from './components/message/message-block'
import Body from './components/body/body'
import styles from './chat.module.css'

export default function ChatPage({ socket }) {
    const [messages, setMessages] = useState([])
    const [status, setStatus] = useState('')

    useEffect(() => {
        socket.on('response', (data) => {
            setMessages([...messages, data])
        })
    }, [socket, messages])

    useEffect(() => {
        socket.on('responseTyping', (data) => {
            setStatus(data);
            setTimeout(() => setStatus(''), 3000)
        })
    }, [socket])
    return (
        <div className={styles.container}>
            <Sidebar socket={socket} />
            <main className={styles.main}>
                <Body messages={messages} socket={socket} status={status} />
                <MessageBlock socket={socket} />
            </main>
        </div>
    )
}
