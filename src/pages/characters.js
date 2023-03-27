"use client"
import React from 'react'
import Dave from '../images/Dave_Headshot.png'
import Julian from '../images/Julian_Borner_Headshot.png'
import Mr_Generic from '../images/Mr_Generic.png'
import instagram from '../images/icons8-instagram-50.png'
import twitter from '../images/icons8-twitter-30.png'
import gmail from '../images/icons8-gmail-logo-50.png'
import linkedin from '../images/icons8-linkedin-circled-50.png'
import logo from '../images/Julian_Borner_Logo.png'
import classes from '../app/styles/characters.module.css'
import Image from 'next/image';
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from '@react-hook/window-size'
import HamburgerMenu from '@/components/hamburgermenus/characterburgermenu'
import Link from 'next/link'

const characters = () => {
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
       </div>:<><HamburgerMenu className="menu" /></>}
       <div className={classes.logoDiv} >
        <div className="img1" >
        <Image  src={logo} alt="Face" layout="fill" sizes="(min-width:3000px) 300px, (max-width:300px) 100px, 200px  "  />
        </div></div>
        <div className={classes.imageDiv1} >
          <Image layout="fill" src={Julian} alt="Julian" />
        </div>
        <div className={classes.imageDiv2} >
           <Image layout="fill"  src={Dave} alt="Dave" />
        </div>
        <div className={classes.imageDiv3} >
           <Image layout="fill" src={Mr_Generic} alt="Mr. Generic" />
        </div>
      <h1 className={classes.mainHeader} >Characters</h1>
      <h2 className={classes.subHeader1} >Dave</h2>
      <h2 className={classes.subHeader2} >Julian</h2>
      <h2 className={classes.subHeader3} >Mr. Generic</h2>
      <p className={classes.para1} >
      This marketing campaign features two central protagonists: Chef Julian, also known as Julian and Dave.
       Julian is the proprietor of a brand new restaurant called “Code Bazaar”, 
       which specializes in premiere quality web-apps and APIs at an affordable rate.
        Dave, along with many residents of this quiet town is an entrepreneur and long-time sufferer
         of our antagonist Mr. Generic and his restaurant “Average at Best”, which has been the only game in town for an extremely long time.  
      </p>
      {width<1000?<> <Link className={classes.fI1} href="/contact" ><Image  layout="fill"  src={gmail} alt="gmail" /></Link> 
      <a href="https://twitter.com/jbthedev"  target="_blank" className={classes.fI2} >
         <Image  layout="fill" src={twitter} alt="twitter" /></a>
          <a href="https://www.linkedin.com/in/julian-borner-709b91b7/" target="_blank" className={classes.fI3} ><Image layout="fill" src={linkedin} alt="LinkedIn" /></a  >
           <a href="/" className={classes.fI4} ><Image  layout="fill" src={instagram} alt="Instagram" /></a> </>:''}
           <hr className={classes.hrl3} />
      <hr className={classes.hrl4} />
      
      </main>
  )
}

export default characters