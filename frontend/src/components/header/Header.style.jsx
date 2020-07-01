import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  box-shadow: none;
  padding-top: 20px;
  color: #888;
  background: #fff !important;
  padding-bottom: 0.625rem;
  min-height: 53px;
  margin-bottom: 20px;
  position: fixed;
  right:0;
  left:0;
  z-index;1030;
`;

export const LogoContainer = styled(Link)`
  display: block;
  cursor: pointer;
`;

export const OptionsContainer = styled.div``;
// flex-direction: row;
// margin-left: auto !important;
export const OptionLink = styled(Link)`
  font-size: 0.7142em;
  padding: 0.5rem 0.7rem;
  line-height: 1.625rem;
`;
export const UnorderList = styled.ul`
  list-style: none;
  margin-bottom: 0;
  padding-left: 0px 20px;
`;
export const OrderList = styled.li`
  text-transform: uppercase;
  display: inline-block;
  margin-right: 5px;
`;
export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  //push left and right item in the far edge, item in the //.//middle will even space in between
  justify-content: space-between;
`;
