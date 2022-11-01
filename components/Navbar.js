import Link from "next/link"
import styled from "styled-components"
import Image from "next/image"

const Nav = styled.nav`
    height: 60px;
    background: #6400FF;
    color: #fff;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    font-weight:bold;
    font-size: 30px;
    padding-left: 15px;
`

const StyledLink = styled.a`
    padding: 0rem 2rem;
    font-size: 25px;
    font-family: 'Open Sans', sans-serif;
`



const Navbar = () => {
  return (
    <Nav>
        <div>
            <Image 
                src="/../public/qibo_logo.png" 
                width='130'
                height='60'
            />
        </div>
        <div> 
            <Link legacyBehavior href="/" passHref>
                <StyledLink>Home</StyledLink>
            </Link>
            <Link legacyBehavior href="/About" passHref>
                <StyledLink>About</StyledLink>
            </Link>
            <Link legacyBehavior href="/Documentation" passHref>
                <StyledLink>Documentation</StyledLink>
            </Link>
            <Link legacyBehavior href="/Tutorials" passHref>
                <StyledLink>Tutorials</StyledLink>
            </Link>
        </div>
    </Nav>
  )
}

export default Navbar
