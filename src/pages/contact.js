import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../app/styles/contact.css'
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from '@react-hook/window-size'
import HamburgerMenu from '../components/hamburgermenus/contactburgermenu';
import classes from '../app/styles/contact.module.css'
import Link from 'next/link'

 const ContactUs = () => {
  const form = useRef();
  const width=useWindowWidth()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1g1gnvw', 'template_7kj724a', form.current, '10VBeKMO1E3KjqoGB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
     <hr className="hrl1" />
    <hr className="hrl2" />
     {width>960?<div className="navGroup" >
      <Link className="nav1" href="/pressrelease" >PR</Link>
       <hr className="navhr" />
       <Link className="nav2" href="/characters" >Characters</Link>
       <hr className="navhr2" />
       <Link className="nav3"  href="/about" >About</Link>
       <hr className="navhr3" />
       </div>:<HamburgerMenu className="menu" />}
    <form  className="formGrid" ref={form} onSubmit={sendEmail}>
      <label className="name" >Name</label>
      <input className="nameInput"  type="text" name="user_name" />
      <label className="email" >Email</label>
      <input  className="emailInput" type="email" name="user_email" />
      <label className="message" >Message</label>
      <textarea className="messageInput" name="message" />
      <input  className="submit" type="submit" value="Send" />
    </form>
    <hr className="hrl3" />
        <hr className="hrl4" />
    </>
  );
};

export default ContactUs