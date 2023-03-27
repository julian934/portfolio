"use client";
import {useRef} from 'react'
import {useState, useEffect} from 'react'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import classes from './newstyles.module.css'
import './styles.css'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import logo from '../images/Julian_Borner_Logo.png'
import gmail from '../images/new_images/gmail.png'
import twitter from '../images/new_images/icons8-twitter-150.png'
import linkedin from '../images/new_images/icons8-linkedin-240.png'
import instagram from '../images/new_images/icons8-instagram-150.png'
import HamburgerMenu from '@/components/hamburgermenu';
import '../app/styles/burgerbutton.css'
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from '@react-hook/window-size'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  
  const width=useWindowWidth()
  const desktop=width>450
  const mobile=width<450
  const Nav=()=>{
     
    return(<>
    <Link className={classes.nav1} href="/pressrelease" >PR</Link>
       <hr className={classes.navhr1} />
       <Link className={classes.nav2} href="/characters" >Characters</Link>
       <hr className={classes.navhr2} />
       <Link className={classes.nav3}  href="/about" >About</Link>
       <hr className={classes.navhr3} />
    </>)
  }
  
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
       </div>:<HamburgerMenu className="menu" />}
       
      <div className={classes.div} >
        <div className="img1" >
        <Image  src={logo} alt="Face" width={300} sizes="(min-width:3000px) 300px, (max-width:300px) 100px, 200px  " height="auto" />
        </div>
        
        <h1 className={classes.header1} >Welcome.</h1>
        <hr className={classes.paraHr2} />
        <p className={classes.para1} >My name is Julian. I'm a front-end developer based in Houston, Texas. I've built all manner of Web apps from Ecommerce platforms to Weather apps.        
        I'm passionate about cutting-edge interfaces and perfectly implemented UX.<br /> </p>

      </div>
      <hr className={classes.projhr1} />
          <hr className={classes.projhr2} />
      <h1 className={classes.header2Proj} >Projects</h1>
        <div className={classes.projectArea} >
          
          <Link className={classes.projLink1} href="/altportfolio" >Alternate Portfolio Site</Link>
          <Link className={classes.projLink2} href="/julianswebshop" >Julian's Webshop</Link>
          <Link className={classes.projLink3} href="/weatherapp" >Weather App</Link>
          
        </div>
        
        <Link className={classes.fI1} href="/contact" ><Image  width={50} height="auto"  src={gmail} alt="gmail" /></Link> <a href="https://twitter.com/jbthedev"  target="_blank" className={classes.fI2} > <Image   width={50} height="auto" src={twitter} alt="twitter" /></a> <a href="https://www.linkedin.com/in/julian-borner-709b91b7/" target="_blank" className={classes.fI3} ><Image width={50} height="auto" src={linkedin} alt="LinkedIn" /></a  > <a href="/" className={classes.fI4} ><Image  width={50} height="auto" src={instagram} alt="Instagram" /></a> 
        <footer className={classes.footer} >
              <h1 className={classes.footerHeader} >Contact</h1>
              <hr className={classes.footerHr} />
              
        </footer>
        <hr className={classes.hrl3} />
        <hr className={classes.hrl4} />
     </main>
  )
}
//Add logic for the hamburger menu only being visible in smaller sizes and the navigation being visible for larger ones. Utilize state
//Rebuild Image using the sizes prop from documentation
//connect Image size to conditional css styles based on states??
//Database for Logo??
//Adobe fonts for Montserrat?