import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Blogpost.module.css";
// import javascript from "../../blogdata/how-to-learn-javascript.json";
// import nextjs from "../../blogdata/how-to-learn-nextjs.json";
// import flask from "../../blogdata/how-to-learn-flask.json";

// Step 1: find the file corresponding to slug
// Step 2: Populate them inside the page
const slug = () => {
  const router = useRouter();
  // console.log('router query: ', router.query);
  const { slug } = router.query;
  // let title = "";
  // let content = "";
  // if (slug === "learn-javascript") {
  //   title = javascript.title;
  //   content = javascript.content;
  // } else if (slug === "learn-nextjs") {
  //   title = nextjs.title;
  //   content = nextjs.content;
  // } else {
  //   title = flask.title;
  //   content = flask.content;
  // }
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{slug}</h1>
        <hr />
        <hr />
        <div className={styles.blogpost}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          dolores, laboriosam doloribus eum maiores quibusdam dignissimos
          tenetur fugiat molestiae tempore soluta. Vel, quis molestias.
        </div>
      </main>
    </div>
  );
};
export default slug;
