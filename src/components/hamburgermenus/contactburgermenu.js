import React from 'react'
import {slide as Menu} from 'react-burger-menu'
import Link from 'next/link'
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from '@react-hook/window-size'


var styles = {
  
  bmBurgerButton: {
    position: 'fixed',
    width: '50px',
    height: '50px',
    right:'10px',
    top: '50px',
    left:'500px'
    
    
  },
  bmBurgerBars: {
    background: '#DAA520'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '150px',
    width: '150px'
  },
  bmCross: {
    position:'fixed',
    background: '#DAA520',
    height:'100px',
    right:'60px'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 0.01em 0',
    fontSize: '3.15em'

  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
   
  },
  bmItem: {
    display: 'inline-block',
    
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }

}
var styles1={
  bmBurgerButton: {
    position: 'fixed',
    width: '40px',
    height: '40px',
    left:'265px',
    top: '50px',
    
    
    
  },
  bmBurgerBars: {
    background: '#DAA520'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '150px',
    width: '150px'
  },
  bmCross: {
    position:'fixed',
    background: '#DAA520',
    height:'100px',
    right:'60px'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 0.01em 0',
    fontSize: '3.15em'

  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
   
  },
  bmItem: {
    display: 'inline-block',
    
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }


}
var styles2={
  bmBurgerButton: {
    position: 'fixed',
    width: '40px',
    height: '40px',
    left:'300px',
    top: '50px',
    
    
  },
  bmBurgerBars: {
    background: '#DAA520'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '150px',
    width: '150px'
  },
  bmCross: {
    position:'fixed',
    background: '#DAA520',
    height:'100px',
    right:'60px'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 0.01em 0',
    fontSize: '3.15em'

  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
   
  },
  bmItem: {
    display: 'inline-block',
    
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }


}
var styles3={
  bmBurgerButton: {
    position: 'fixed',
    width: '100px',
    height: '100px',
    left:'100px',
    top: '36px',
    
    
  },
  bmBurgerBars: {
    background: '#DAA520'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '150px',
    width: '150px'
  },
  bmCross: {
    position:'fixed',
    background: '#DAA520',
    height:'100px',
    right:'60px'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 0.01em 0',
    fontSize: '3.15em'

  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
   
  },
  bmItem: {
    display: 'inline-block',
    
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }


}
var styles4={
  bmBurgerButton: {
    position: 'fixed',
    width: '100px',
    height: '100px',
    left:'100px',
    top: '36px',
    
    
  },
  bmBurgerBars: {
    background: '#DAA520'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '150px',
    width: '150px'
  },
  bmCross: {
    position:'fixed',
    background: '#DAA520',
    height:'100px',
    right:'60px'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 0.01em 0',
    fontSize: '3.15em'

  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
   
  },
  bmItem: {
    display: 'inline-block',
    
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }


}

const HamburgerMenu = (props) => {
  const [width,height]=useWindowSize()
  const onlyWidth=useWindowWidth()
 
  return (
    <div  id="outer-container" >
    <Menu    styles={onlyWidth>=960?styles3:width>=400?styles:width<=300?styles2:width>700?styles4:styles1} right  >
      <Link  className="mItem1" href="/contact" >Contact</Link>
      <Link className='mItem2' href="/about">About</Link>
      <Link className="mItem3" href="/characters" >Characters</Link>
      <Link className="mItem4" href="/pressrelease" >Press Release</Link>
    </Menu>
    </div>
  )
}

//Template literal for responsive design

export default HamburgerMenu
