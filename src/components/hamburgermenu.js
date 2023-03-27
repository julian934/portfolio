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
    width: '36px',
    height: '30px',
    left: '350px',
    top: '36px',
    
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'

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
    width: '36px',
    height: '30px',
    left: '250px',
    top: '36px',
    
    
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'

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
    width: '36px',
    height: '30px',
    left: '265px',
    top: '36px',
    
    
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'

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
    width: '36px',
    height: '30px',
    left: '850px',
    top: '36px',
    
    
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'

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
    <Menu    styles={onlyWidth>=960?styles3:width>=400?styles:width<=360?styles2:styles1} right  >
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
