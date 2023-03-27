"use client";
import {useRef} from 'react'
import {useState, useEffect} from 'react'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import classes from '../app/styles/about.module.css'

import Link from 'next/link'
import Navigation from '@/components/navigation'
import logo from '../images/Julian_Borner_Logo.png'
import gmail from '../images/new_images/gmail.png'
import twitter from '../images/new_images/icons8-twitter-150.png'
import linkedin from '../images/new_images/icons8-linkedin-240.png'
import instagram from '../images/new_images/icons8-instagram-150.png'
import HamburgerMenu from '@/components/hamburgermenus/aboutburgermenu';
import '../app/styles/burgerbutton.css'
import Julians_Headshot from '../images/Julian_Borner_Headshot.png'
import '../app/styles.css'
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from '@react-hook/window-size'

const about = () => {
  const width=useWindowWidth()

  return (
    <main className={classes.main} >
    <hr className={classes.hrl1} />
    <hr className={classes.hrl2} />
     

  
     
     {width>960?<div className={classes.navGroup} >
    <Link className={classes.nav1} href="/pressrelease" >PR</Link>
     <hr className={classes.navhr1} />
     <Link className={classes.nav2} href="/characters" >Characters</Link>
     <hr className={classes.navhr2} />
     <Link className={classes.nav3}  href="/about" >About</Link>
     <hr className={classes.navhr3} />
     </div>:<HamburgerMenu  />}
     
    <div className={classes.div} >
      <div className="img1" >
      <Image  src={logo} alt="Face" width={400} sizes="(min-width:3000px) 300px, (min-width:320px) 400px, 300px  " height="auto" />
      </div>

      <div className={classes.div2} >
        <div className="img2" >
          <Image width={500} height={500}   src={Julians_Headshot} alt="Julians Headshot"  />
          </div>
          </div>
         {width>=1000?<><hr className={classes.projhr1} />
          <hr className={classes.projhr2} /></>:''}
      
      <p className={classes.para1} >     Julian Borner is a web developer and transmedia specialist who specializes in front-end
       development utilizing the React and Next.js frameworks.
        Julian differentiates himself from the competition by
         using in-depth design research and digital marketing strategy to
          guide design choices and post-production marketing, while
           drawing upon his extensive web development knowledge to 
           execute and produce the web application. Julian will graduate from the University of Houston in 2023 with
            a Bachelor of Science in Digital Media and a minor in Innovation Management. Please review the projects on this 
            website and contact Julian for more information 
            on what he can do for your company.  <br /> </p>

    </div>
    {width<1000?<><footer className={classes.footer} >
            <h1 className={classes.footerHeader} >Contact</h1>
            <hr className={classes.footerHr} />
            
      </footer></>:''}
    
      {width<1000?<> <Link className={classes.fI1} href="/contact" ><Image  width={150} height="auto"  src={gmail} alt="gmail" /></Link> 
      <a href="https://twitter.com/jbthedev"  target="_blank" className={classes.fI2} >
         <Image   width={150} height="auto" src={twitter} alt="twitter" /></a>
          <a href="https://www.linkedin.com/in/julian-borner-709b91b7/" target="_blank" className={classes.fI3} ><Image width={150} height="auto" src={linkedin} alt="LinkedIn" /></a  >
           <a href="/" className={classes.fI4} ><Image  width={150} height="auto" src={instagram} alt="Instagram" /></a> </>:''}
      
     
      <hr className={classes.hrl3} />
      <hr className={classes.hrl4} />
   </main>
  )
}

export default about