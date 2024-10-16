import React from 'react'
import styles from './body.module.css'
import { useNavigate } from 'react-router-dom'

export default function Body({ messages, socket, status }) {
  const navigate = useNavigate();

  const handleLeave = () => {
    const user = localStorage.getItem('user');
    localStorage.removeItem('user');

    // Отправляем на сервер информацию о выходе пользователя
    socket.emit('logOutUser', { user, socketID: socket.id });

    navigate('/');
  }

  return (
    <>
      <header className={styles.containerHeader}>
        <button className={styles.btnOut} onClick={handleLeave}>Log out</button>
      </header>

      <div className={styles.container}>
        {
          messages.map(el => el.name === localStorage.getItem('user') ? (
            <div className={styles.chats} key={el.id}>
              <p className={styles.right}>you</p>
              <div className={styles.messageSender}>
                <p>{el.text}</p>
              </div>
            </div>

          ) : (
            <div className={styles.chats} key={el.id}>
              <p className={styles.left}>{el.name}</p>
              <div className={styles.messageRecioient}>
                <p>{el.text}</p>
              </div>
            </div>
          )
          )
        }

        <div className={styles.status}><p>{status} ...</p></div>
      </div>
    </>
  )
}
