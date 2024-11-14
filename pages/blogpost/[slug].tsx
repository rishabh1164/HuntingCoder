import React from "react";
import { useRouter } from "next/router";
import styles from '../../styles/Blogpost.module.css';

const slug = () => {
  const router = useRouter();
  // console.log('router query: ', router.query);
  const { slug } = router.query;
  return (
    <div className={styles.container}>
      <main className={styles.main}>

      <h1>Title of the page {slug}</h1>
      <hr />
      <hr />
      <div className={styles.blogpost}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum velit
        excepturi aliquid voluptatem architecto laboriosam soluta, assumenda hic
        provident autem? Distinctio, et odit.
      </div>
      </main>
    </div>
  );
};
export default slug;
