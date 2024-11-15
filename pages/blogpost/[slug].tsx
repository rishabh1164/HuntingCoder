import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Blogpost.module.css";

// Step 1: find the file corresponding to slug
// Step 2: Populate them inside the page
const slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [blog, setBlog] = useState<any>({});

  useEffect(() => {
    fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        setBlog(parsed);
      });
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog.title}</h1>
        <hr />
        <hr />
        <div className={styles.blogpost}>{blog.content} </div>
      </main>
    </div>
  );
};
export default slug;
