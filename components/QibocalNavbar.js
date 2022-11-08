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
          <div class="dropdown">
            <button class="dropbtn">Qibocal releases</button>
              <div class="dropdown-content">
                <a href="#">Stable</a>
                <a href="#">0.5.8</a>
                <a href="#">0.2.3</a>
              </div>
          </div> 

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