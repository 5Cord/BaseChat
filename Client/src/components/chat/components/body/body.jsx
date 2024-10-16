import React from 'react'
import styles from './body.module.css'
import { useNavigate } from 'react-router-dom'

export default function Body({ messages }) {
  const navigate = useNavigate();

  const handleLeave = () => {
    localStorage.removeItem('user')
    navigate('/')
  }
  return (
    <>
      <header className={styles.containerHeader}>
        <button className={styles.btnOut} onClick={handleLeave}>Go out</button>
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
      </div>
    </>
  )
}
