import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";


function increaseFontSize(id, increaseFactor){
     txt = document.getElementById(id);
     style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
     currentSize = parseFloat(style);
     txt.style.fontSize = (currentSize + increaseFactor) + 'px';
}


const DropNav = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      
      <nav className={`nav`}>
        <Link legacyBehavior href={"/"}>
          <a>
            <Image 
                src="/../public/qibo_logo.png" 
                width='70'
                height='35'
            />
          </a>
        </Link>
        
        <div>

          <div class="dropdown">
            <button class="dropbtn">Documentation</button>
              <div class="dropdown-content">
                <a href="/Docs/Qibo/last">Qibo</a>
                <a href="/Docs/Qibolab/last">Qibolab</a>
                <a href="/Docs/Qibocal/last">Qibocal</a>
              </div>
          </div> 
          
          <Link legacyBehavior href={'/Tutorials'}>
            <a className='btn'> Tutorials </a>
          </Link>

          <Link legacyBehavior href={'/'}>
            <a className='btn'> Home </a>
          </Link>
          

          <div class="bigdropdown">
            <button class="bigdropbtn">Menu</button>
              <div class="bigdropdown-content">
                <a href="/">Home</a>
                <a href="/Tutorials">Tutorials</a>
                <a href="/Docs/Qibo/last">Qibo</a>
                <a href="/Docs/Qibolab/last">Qibolab</a>
                <a href="/Docs/Qibocal/last">Qibocal</a>
              </div>
          </div> 
        </div>
      </nav>
    </header>
  );
};

export default DropNav;