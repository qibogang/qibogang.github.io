import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";



const DropNav = () => {

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

          <div className="dropdown">
            <button className="dropbtn">Documentation</button>
              <div className="dropdown-content">
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
          

          <div className="bigdropdown">
            <button className="bigdropbtn">Menu</button>
              <div className="bigdropdown-content">
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