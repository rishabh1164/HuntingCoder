import React, { useState } from "react";
import styles from "@/styles/Contact.module.css";
const contact = () => {
  const [formDetails, setFormDetails] = useState<any>({
    name: "",
    email: "",
    phone: "",
    password: "",
    desc: "",
  });
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(formDetails);
    try {
      let res = await fetch("http://localhost:3000/api/postcontact", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(formDetails),
      });

      let data = await res.json();
      if(data.success) {
        setFormDetails({
          name: "",
          email: "",
          phone: "",
          password: "",
          desc: "",
        })
      }
      alert('Thanks for Contacting Us');
    } catch (error) {
      alert('Error Submitting contact details');
    }
  };

  const handleChange = (e: any) => {
    setFormDetails({
      ...formDetails,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <h1>Contact Us</h1>
      <div className={styles.mb3}>
        <label htmlFor="name" className={styles.formlabel}>
          Enter Your Name
        </label>
        <input
          type="name"
          className={styles.input}
          name="name"
          id="name"
          value={formDetails.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.mb3}>
        <label htmlFor="email" className={styles.formlabel}>
          Email address
        </label>
        <input
          type="email"
          className={styles.input}
          id="email"
          name="email"
          value={formDetails.email}
          onChange={handleChange}
          required
        />
        <div id="emailHelp" className={styles.formtext}>
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className={styles.mb3}>
        <label htmlFor="phone" className={styles.formlabel}>
          Enter Your Phone
        </label>
        <input
          type="phone"
          className={styles.input}
          name="phone"
          id="phone"
          value={formDetails.phone}
          onChange={handleChange}
        />
      </div>
      <div className={styles.mb3}>
        <label htmlFor="password" className={styles.formlabel}>
          Password
        </label>
        <input
          type="password"
          className={styles.input}
          name="password"
          id="password"
          value={formDetails.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.mb3}>
        <label htmlFor="desc" className={styles.formlabel}>Elaborate your concerns</label>
        <textarea
          className={styles.input}
          name="desc"
          id="desc"
          value={formDetails.desc}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit" className={styles.btn}>
        Submit
      </button>
    </form>
  );
};

export default contact;
