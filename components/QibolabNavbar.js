import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./NavItem";

const MENU_LIST = [
];

const QibolabNavbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link legacyBehavior href={"/"}>
          <a>
            <Image 
                src="/../public/qibo_logo.png" 
                width='80'
                height='40'
            />
          </a>
        </Link>
        
        <div>
          <Link legacyBehavior href={'/Docs/Qibo/last'}>
            <a className='btn'> Qibo </a>
          </Link>
          <Link legacyBehavior href={'/Docs/Qibocal/last'}>
            <a className='btn'> Qibocal </a>
          </Link>
          <div class="dropdown">
            <button class="dropbtn">Releases</button>
            <div class="dropdown-content">
              <a href="#">Stable</a>
              <a href="#">0.0.1</a>
            </div>
          </div> 
          <Link legacyBehavior href={'https://github.com/qiboteam/qibolab'}>
            <a className="btn">
              <Image 
                src="/../public/github_logo.png" 
                width='40'
                height='25'
            />
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default QibolabNavbar;