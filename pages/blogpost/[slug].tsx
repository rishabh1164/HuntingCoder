import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Blogpost.module.css";

// Step 1: find the file corresponding to slug
// Step 2: Populate them inside the page
const slug = (props: any) => {
  const [blog, setBlog] = useState<any>(props.myBlog);
  function createMarkup(content: any) {
    return {__html: content};
  }
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog.title}</h1>
        <hr />
        <hr />
        <div className={styles.blogpost}>
          <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>
        </div>
      </main>
    </div>
  );
};
export async function getServerSideProps(context: any) {
  const { slug } = context.query;
  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  let myBlog = await data.json();
  return {
    props: { myBlog },
  };
}
export default slug;
