import Link from "next/link";
import React from "react";
import styles from "@/styles/Home.module.css";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className={styles.mainnav}>
      <ul>
        <Link className={`${pathname === "/" ? styles.active : ""}`} href="/">
          <li>Home</li>
        </Link>
        <Link className={`${pathname === "/blog" ? styles.active : ""}`} href="/blog">
          <li>Blog</li>
        </Link>
        <Link className={`${pathname === "/about" ? styles.active : ""}`} href="/about">
          <li>About</li>
        </Link>
        <Link className={`${pathname === "/contact" ? styles.active : ""}`} href="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
