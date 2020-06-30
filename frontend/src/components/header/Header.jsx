import React from "react";
//import icon
import Logo from "../../Imgs/logo.png";
//export styled Components;
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  NavContainer,
  OrderList,
  UnorderList,
} from "./Header.style.jsx";

const Header = () => (
  <HeaderContainer className="HeaderContainer">
    <NavContainer>
      <LogoContainer className="logo">
        <img src={Logo} alt="logo" className="Logo" />
      </LogoContainer>

      {/* All the options will remain inside another div */}
      <OptionsContainer className="LinkContainer">
        <UnorderList>
          <OrderList>
            <OptionLink to="/about">ABOUT</OptionLink>
          </OrderList>
          <OrderList>
            <OptionLink to="/blog">BLOG</OptionLink>
          </OrderList>
          <OrderList>
            <OptionLink to="/faq">FAQ</OptionLink>
          </OrderList>
          <OrderList>
            <OptionLink className="login" to="/login">
              Login
            </OptionLink>
          </OrderList>
        </UnorderList>
      </OptionsContainer>
    </NavContainer>
  </HeaderContainer>
);

export default Header;
