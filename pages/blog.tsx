import React from 'react'
import styles from '../styles/Blog.module.css';
import Link from 'next/link';
const blog = () => {
  return (
    <main className={styles.main}>

    <div className={styles.blogs}>
    <h2>Popular Blogs</h2>
    <div className={styles.blogItem}>
      <Link href={'/blogpost/learn-javascript'}>
      <h3>how to learn javascript in 2024</h3>
      </Link>
      <p>JavaScript is a language used to design logic for the web</p>
    </div>
    <div className={styles.blogItem}>
      <h3>how to learn javascript in 2024</h3>
      <p>JavaScript is a language used to design logic for the web</p>
    </div>
    <div className={styles.blogItem}>
      <h3>how to learn javascript in 2024</h3>
      <p>JavaScript is a language used to design logic for the web</p>
    </div>
    <div className={styles.blogItem}>
      <h3>how to learn javascript in 2024</h3>
      <p>JavaScript is a language used to design logic for the web</p>
    </div>
  </div>
    </main>
  )
}

export default blog