import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css';
import Link from 'next/link';

// Step 1: Collect all the files from blogdata directory
// Step 2: Iterate through them and Display them 
const blog = (props: any) => {
  const [blogs, setBlogs] = useState(props.allBlogs);

  return (
    <main className={styles.main}>
      
    <div className={styles.blogs}>
    <h2>Popular Blogs</h2>
  
    {blogs.map((blogItem: any) => {
        return   <div className={styles.blogItem}>
        <Link href={`/blogpost/${blogItem?.slug}`}>
        <h3>{blogItem?.title}</h3>
        </Link>
        <p>{blogItem.metadesc.substr(0,140)}...</p>
      </div>
      })}
      </div>
    </main>
  )
}

export async function getServerSideProps() { // this function runs on server side
  let data = await fetch('http://localhost:3000/api/blogs')
  let allBlogs = await data.json();
 
return {
  props : {allBlogs}, // will be passed to the page component as props
}
}

export default blog;
