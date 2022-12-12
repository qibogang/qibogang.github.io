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
                src="/qibo_logo.png" 
                width='70'
                height='35'
            />
          </a>
        </Link>
        
        <div>

          <div className="dropdown">
            <button className="dropbtn">Qibolab releases</button>
              <div className="dropdown-content">
                <a href="#">Stable</a>
                <a href="#">Latest</a>
              </div>
          </div> 

          <div className="dropdown">
            <button className="dropbtn">Documentation</button>
              <div className="dropdown-content">
                <a href="/docs/qibo/stable">Qibo</a>
                <a href="/docs/qibolab/last">Qibolab</a>
                <a href="/docs/qibocal/last">Qibocal</a>
              </div>
          </div> 
          
          <Link legacyBehavior href={'/tutorials'}>
            <a className='btn'> Tutorials </a>
          </Link>

          <Link legacyBehavior href={'/'}>
            <a className='btn'> Home </a>
          </Link>

          <div className="bigdropdown">
            <button className="bigdropbtn">Menu</button>
              <div className="bigdropdown-content">
                <a href="/">Home</a>
                <a href="/tutorials">Tutorials</a>
                <a href="/docs/qibo/stable">Qibo</a>
                <a href="/docs/qibolab/last">Qibolab</a>
                <a href="/docs/qibocal/last">Qibocal</a>
              </div>
          </div> 

        </div>


      </nav>
    </header>
  );
};

export default DropNav;