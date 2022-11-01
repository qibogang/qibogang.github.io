import styled from "styled-components"

const FooterSection = styled.div`
    height: 50px;
    background: #6400FF;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight:bold;
    font-size: 20px;
    padding-left: 15px;
`

const Footer = () => {
  return (
    <FooterSection>
        <p> Developed by the Qibo Gang. </p>
    </FooterSection>
  )
}

export default Footer
