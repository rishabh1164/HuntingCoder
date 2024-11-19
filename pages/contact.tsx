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
      <div className={styles.mb3}>
        <label htmlFor="name" className={styles.formlabel}>
          Enter Your Name
        </label>
        <input
          type="name"
          className="form-control"
          name="name"
          id="name"
          value={formDetails.name}
          onChange={handleChange}
        />
      </div>
      <div className={styles.mb3}>
        <label htmlFor="email" className={styles.formlabel}>
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formDetails.email}
          onChange={handleChange}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className={styles.mb3}>
        <label htmlFor="phone" className={styles.formlabel}>
          Enter Your Phone
        </label>
        <input
          type="phone"
          className="form-control"
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
          name="password"
          className="form-control"
          id="password"
          value={formDetails.password}
          onChange={handleChange}
        />
      </div>
      <div className={styles.mb3}>
        <label htmlFor="desc">Elaborate your concerns</label>
        <textarea
          className="form-control"
          placeholder="write your concern here"
          name="desc"
          id="desc"
          value={formDetails.desc}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default contact;
