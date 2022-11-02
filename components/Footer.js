import styled from "styled-components"
import Link from "next/link"
import Image from "next/image"

const FooterSection = styled.div`
    height: 40px;
    background: #6400FF;
    color: #fff;
    display: flex;
    justify-content: space-between  ;
    align-items: center;
    font-size: 16px;
    bottom:0;
    left:0;
    width:100%;
`

const Footer = () => {
  return (
    <FooterSection>
        <p> © The Qibo Team. </p>
          <Link legacyBehavior href={'https://github.com/qiboteam/qibo'}>
            <a className="btn">
              <Image 
                src="/../public/github_logo.png" 
                width='40'
                height='30'
              />
            </a>
          </Link>
    </FooterSection>
  )
}

export default Footer
