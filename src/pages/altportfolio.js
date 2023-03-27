import React from 'react'
import classes from '../app/styles/altportfolio.module.css'
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from '@react-hook/window-size'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../images/Julian_Borner_Logo.png'
import gmail from '../images/new_images/gmail.png'
import twitter from '../images/new_images/icons8-twitter-150.png'
import linkedin from '../images/new_images/icons8-linkedin-240.png'
import instagram from '../images/new_images/icons8-instagram-150.png'
import HamburgerMenu from '../components/hamburgermenus/altburgermenu';

const altportfolio = () => {

  const width=useWindowWidth()
  return (
    <main>
            <hr className={classes.hrl1} />
    <hr className={classes.hrl2} />
    {width>=960?<><div className={classes.navGroup} >
    <Link className={classes.nav1} href="/pressrelease" >PR</Link>
     <hr className={classes.navhr1} />
     <Link className={classes.nav2} href="/characters" >Characters</Link>
     <hr className={classes.navhr2} />
     <Link className={classes.nav3}  href="/about" >About</Link>
     <hr className={classes.navhr3} />
     </div>
     <h1 className={classes.header1} >Alternate Portfolio Site</h1>
      <hr className={classes.projHr3} />
      <Link className={classes.img1} href="/"  ><Image src={logo} layout="fill" /></Link>
      <p className={classes.para} >This is a full-stack portfolio site I created utilizing React.js,
       Next.js and the Sanity back-end to handle assets such as images. </p>
      <Link href="/" className={classes.header2V} >View Site</Link><Link href="/" className={classes.header2G} >GitHub</Link>
      <hr className={classes.projhr1} /><hr className={classes.projhr2} />
      <h1 className={classes.header1P} >Projects</h1>
      <Link className={classes.projLink1} href="/" >Alternate Portfolio Site</Link>
      <Link className={classes.projLink2} href="/" >Julians Webshop</Link>
      <Link className={classes.projLink3} href="/" >Weather App</Link>
      <Link className={classes.fI1} href="/contact" ><Image  width={50} height="auto"  src={gmail} alt="gmail" /></Link> 
      <a href="https://twitter.com/jbthedev"  target="_blank" className={classes.fI2} >
         <Image   width={50} height="auto" src={twitter} alt="twitter" /></a>
          <a href="https://www.linkedin.com/in/julian-borner-709b91b7/" target="_blank" className={classes.fI3} ><Image width={50} height="auto" src={linkedin} alt="LinkedIn" /></a  >
           <a href="/" className={classes.fI4} ><Image  width={50} height="auto" src={instagram} alt="Instagram" /></a> 
      <footer className={classes.footer} >
            <h1 className={classes.footerHeader} >Contact</h1>
            <hr className={classes.footerHr} />
            
      </footer>
     </>:<><HamburgerMenu  />
     <h1 className={classes.header1} >Alternate Portfolio Site</h1>
      <hr className={classes.projHr3} />
      <Link className={classes.img1} href="/"  ><Image src={logo} layout="fill" /></Link>
      <p className={classes.para} >This is a full-stack portfolio site I created utilizing React.js,
       Next.js and the Sanity back-end to handle assets such as images. </p>
      <Link href="/" className={classes.header2V} >View Site</Link><Link href="/" className={classes.header2G} >GitHub</Link>
      <hr className={classes.projhr1} /><hr className={classes.projhr2} />
      <h1 className={classes.header1P} >Projects</h1>
      <Link className={classes.projLink1} href="/" >Alternate Portfolio Site</Link>
      <Link className={classes.projLink2} href="/" >Julians Webshop</Link>
      <Link className={classes.projLink3} href="/" >Weather App</Link>
      <Link className={classes.fI1} href="/contact" ><Image  width={50} height="auto"  src={gmail} alt="gmail" /></Link> 
      <a href="https://twitter.com/jbthedev"  target="_blank" className={classes.fI2} >
         <Image   width={50} height="auto" src={twitter} alt="twitter" /></a>
          <a href="https://www.linkedin.com/in/julian-borner-709b91b7/" target="_blank" className={classes.fI3} ><Image width={50} height="auto" src={linkedin} alt="LinkedIn" /></a  >
           <a href="/" className={classes.fI4} ><Image  width={50} height="auto" src={instagram} alt="Instagram" /></a> 
     </>}
      
      
           <hr className={classes.hrl3} />
           <hr className={classes.hrl4} />
      </main>
  )
}

export default altportfolio