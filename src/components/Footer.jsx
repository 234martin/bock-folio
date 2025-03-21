import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background: #222;
  color: white;
  text-align: center;
  padding: 15px;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return <FooterContainer>© 2025 Martin Kihungi. All rights reserved.</FooterContainer>;
};

export default Footer;
