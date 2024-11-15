import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css';
import Link from 'next/link';

// Step 1: Collect all the files from blogdata directory
// Step 2: Iterate through them and Display them 
const blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/blogs')
    .then((a) => {
      return a.json();
    })
    .then((parsed) => {
      setBlogs(parsed);
    })

  }, []);

  return (
    <main className={styles.main}>
      
    <div className={styles.blogs}>
    <h2>Popular Blogs</h2>
  
    {blogs.map((blogItem: any) => {
        return   <div className={styles.blogItem}>
        <Link href={`/blogpost/${blogItem?.slug}`}>
        <h3>{blogItem?.title}</h3>
        </Link>
        <p>{blogItem.content.substr(0,140)}...</p>
      </div>
      })}
      </div>
    </main>
  )
}

export default blog