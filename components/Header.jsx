import React from 'react';
import styles from '@/styles/Header.module.css';


export default function Header() {
  return (
    <div className ={styles.container}>
      <div className={styles.left}>
      <p>Date</p>
      <p>temperature</p>
      <p>weather icon</p>
      </div>
      <div>
        <h1>Title</h1> 
      </div>
      <div className={styles.right}>
        <p>welcome...</p>
        <span>connexion</span>
        </div>
    </div>
  )
}
