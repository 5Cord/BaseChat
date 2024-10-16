import React, { useEffect, useState } from 'react'
import Sidebar from './components/sidebar/sidebar'
import MessageBlock from './components/message/message-block'
import Body from './components/body/body'
import styles from './chat.module.css'

export default function ChatPage({ socket }) {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        socket.on('response', (data) => {
            setMessages([...messages, data])
        })
    }, [socket, messages])
    return (
        <div className={styles.container}>
            <Sidebar />
            <main className={styles.main}>
                <Body messages={messages} />
                <MessageBlock socket={socket} />
            </main>
        </div>
    )
}
