import React from 'react'
import Sidebar from './components/sidebar'
import MessageBlock from './components/message-block'

export default function ChatPage({ socket }) {
    return (
        <div className='container'>
            <Sidebar />
            <main className='main'>
                <Body />
                <MessageBlock />
            </main>
        </div>
    )
}
