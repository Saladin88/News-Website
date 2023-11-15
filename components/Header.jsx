import React from 'react';
import styles from '@/styles/Header.module.css';


export default function Header() {
  return (
    <div className ={styles.container}>
      <h1 className = {styles.title}>Title</h1>
      <div className = {styles.items}>Date</div>
      <div className = {styles.items}>temperature</div>
      <div className = {styles.items}>weather icon</div>
      <div className = {styles.items}>welcome...</div>
      <div className = {styles.items}>connexion</div>
    </div>
  )
}
