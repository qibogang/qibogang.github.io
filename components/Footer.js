import styled from "styled-components"

const FooterSection = styled.div`
    height: 50px;
    background: #883b8f;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight:bold;
    font-size: 20px;
`

const Footer = () => {
  return (
    <FooterSection>
        <p align-center> Developed by the Qibo Gang. </p>
    </FooterSection>
  )
}

export default Footer
