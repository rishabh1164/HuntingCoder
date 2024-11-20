import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const title = '<HuntingCoder/>';
  return (
    <>
      <Head>
        <title>hunting coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keywords" content="nextjs, hunting blog, hunting coder" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Script src="/sc.js" strategy="lazyOnload"></Script> */}
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          <h1 className={styles.title}>{title}</h1>
          <p>
            A blog for hunting coders by a hunting coder Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Ipsa dicta consequuntur unde
            dignissimos laborum tenetur, praesentium voluptates. Rem hic
            reiciendis ullam libero optio!
          </p>
          <div className={styles.latestBlogs}>
            <h2>Latest Blogs</h2>
            <div>
              <h3>How to learn JavaScript in 2022?</h3>
              <p>
                javascript is the programming language used to design logic for
                web
              </p>
              <button className={styles.btn}>Read More</button>
            </div>
            <div>
              <h3>How to learn JavaScript in 2022?</h3>
              <p>
                javascript is the programming language used to design logic for
                web
              </p>
              <button className={styles.btn}>Read More</button>
            </div>{" "}
            <div>
              <h3>How to learn JavaScript in 2022?</h3>
              <p>
                javascript is the programming language used to design logic for
                web
              </p>
              <button className={styles.btn}>Read More</button>
            </div>
          </div>
        </main>
        <footer className={styles.footer}>
          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>
      </div>
    </>
  );
}
