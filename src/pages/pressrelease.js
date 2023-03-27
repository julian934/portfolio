import React from 'react'
import classes from '../app/styles/pr.module.css'
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
import HamburgerMenu from '../components/hamburgermenus/pressreleaseburgermenu';

const PressRelease = () => {
  const width=useWindowWidth()
  return (
    <main className={classes.main} >
        <hr className={classes.hrl1} />
    <hr className={classes.hrl2} />
      <Link className={classes.img1} href="/"  ><Image src={logo} layout="fill" /></Link>
      {width>960?<div className={classes.navGroup} >
    <Link className={classes.nav1} href="/pressrelease" >PR</Link>
     <hr className={classes.navhr1} />
     <Link className={classes.nav2} href="/characters" >Characters</Link>
     <hr className={classes.navhr2} />
     <Link className={classes.nav3}  href="/about" >About</Link>
     <hr className={classes.navhr3} />
     </div>:<HamburgerMenu  />}
      <h1 className={classes.header1} >Press Release</h1>
      <h2 className={classes.header2} >The Julian Borner Marketing Campaign Launches!</h2>
      <hr className={classes.under1} />
      <p className={classes.p1} > The Julian Borner marketing campaign is finally underway.
         This campaign features a marketing video about an entrepreneur named Dave who is looking for a quality web app development.
          The video explores a fictional town where there is only one restaurant that serves web apps, 
          but always leaves customers unsatisfied, until Julian moves in with his new restaurant “The Code Bazaar”.
           The campaign features regular social media posts on Instagram, Twitter and LinkedIn, 
           along with access to an AR filter and Julian’s official website, 
           to show what he can do for you. </p>
      <h2 className={classes.header2L} >Livestream Alert:</h2>
      <hr className={classes.under2} />
      <p className={classes.p2} > The marketing campaign will feature a Livestream at the very end! Julian will interact with you during the livestream to answer all your questions,
         including the most important: “What can he do for me?”.
           Click on the links to the social media for details and 
           be sure to follow the official Instagram and Twitter accounts
            for updates. </p>
     
      
      <h2 className={classes.header2P} >Privacy Policies:</h2>
      <hr className={classes.under3} />
      <h3 className={classes.header3I} >Instagram:</h3>
      <p className={classes.p3} >     Instagram’s Privacy Policy states: “We collect the content,
         communications and other information you provide when you use our Products, 
         including when you sign up for an account, create or share content,
          and message or communicate with others,” (Instagram, 2022).</p>
      <h3 className={classes.header3T} >Twitter:</h3>
      <p className={classes.p4} >     “Depending on your settings and based on the Twitter products and services you use,
         we share: Content you send to a specific Twitter user, such as through Direct Messages.
          Please keep in mind that if you’ve shared information like Direct Messages or protected 
          Tweets with someone else who accesses Twitter through a third-party service, 
          the information may be shared with the third-party service,” (Twitter, 2018). 
          All Twitter content, even personal messages, are all subject to
           review and stored on their databases.</p>
      <h3 className={classes.header3S} >Stream Yard:</h3>
      <p className={classes.p5} >     StreamYard’s privacy policy states that StreamYard 
        “will not use or share your information with anyone except as described in this Privacy Policy” (StreamYard, 2021).
         </p>
      <h3 className={classes.header3Y} >YouTube:</h3>
      <p className={classes.p6} >     YouTube’s privacy policy states: “We do not sell your personal information to anyone.
         We use the information we collect to customize our services for you,
          including providing recommendations, personalizing search results,
           and serving relevant ads for you,” (YouTube, 2022). </p>
      {width>=1000?<><footer className={classes.footer} >
            <h1 className={classes.footerHeader} >Contact</h1>
            <hr className={classes.footerHr} />
            
      </footer></>:''}
    
      {width<=1000?<> <Link className={classes.fI1} href="/contact" ><Image  width={150} height="auto"  src={gmail} alt="gmail" /></Link> 
      <a href="https://twitter.com/jbthedev"  target="_blank" className={classes.fI2} >
         <Image   width={150} height="auto" src={twitter} alt="twitter" /></a>
          <a href="https://www.linkedin.com/in/julian-borner-709b91b7/" target="_blank" className={classes.fI3} ><Image width={150} height="auto" src={linkedin} alt="LinkedIn" /></a  >
           <a href="/" className={classes.fI4} ><Image  width={150} height="auto" src={instagram} alt="Instagram" /></a> </>:''}
           <hr className={classes.hrl3} />
      <hr className={classes.hrl4} />

      </main>
  )
}

export default PressRelease