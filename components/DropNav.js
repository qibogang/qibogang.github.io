import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./NavItem";

const MENU_LIST = [
];

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
                width='80'
                height='40'
            />
          </a>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
        <div class="dropdown">
          <button class="dropbtn">Other docs</button>
          <div class="dropdown-content">
            <a href='#'> Stable </a>
            <a href="#">1.8.0</a>
            <a href="#">1.7.4</a>
            <a href="#">1.6.2</a>
            <a href="/Docs/Qibolab/last">Qibolab</a>
            <a href="/Docs/Qibocal/last">Qibocal</a>

          </div>
        </div> 
      </nav>
    </header>
  );
};

export default DropNav;