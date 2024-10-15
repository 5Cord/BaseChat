import React from 'react'

export default function Body() {
  return (
    <>
      <header className='containerHeader'>
        <button className='btn'></button>
      </header>

      <div className="container">
        <div className="chats">
          <p>Вы</p>
          <div className="message-sender">
            <p>Hello</p>
          </div>
        </div>
        <div className="chats">
          <p>Вы</p>
          <div className="message-recioient">
            <p>Hello</p>
          </div>
        </div>
      </div>
    </>
  )
}
