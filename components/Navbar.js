import Link from "next/link"
import styled from "styled-components"

const Nav = styled.nav`
    height: 80px;
    background: #883b8f;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight:bold;
    font-size: 30px;
`

const StyledLink = styled.a`
    padding: 0rem 2rem;
`

const Navbar = () => {
  return (
    <Nav>
        <div>
            <Link legacyBehavior href="/" passHref>
                <StyledLink>Qibo | Quantum OS </StyledLink>
            </Link>
        </div>
        <div> 
            <Link legacyBehavior href="/" passHref>
                <StyledLink>Home</StyledLink>
            </Link>
            <Link legacyBehavior href="/About" passHref>
                <StyledLink>About</StyledLink>
            </Link>
            <Link legacyBehavior href="/Publications" passHref>
                <StyledLink>Publications</StyledLink>
            </Link>
            <Link legacyBehavior href="/Tutorials" passHref>
                <StyledLink>Tutorials</StyledLink>
            </Link>
        </div>
    </Nav>
  )
}

export default Navbar
