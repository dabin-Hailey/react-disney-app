import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Nav = () => {
  const [show, setShow] = useState(false);

  const listener = () => {
    if (window.scrollY > 0) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <NavWrapper $show={show}>
      <Logo>
        <img
          src="/images/logo.svg"
          alt="Disney Plus Logo"
          onClick={() => (window.location.href = "/")}
        />
      </Logo>
      <Search placeholder="Search..." />
      <Profile></Profile>
    </NavWrapper>
  );
};

export default Nav;

const NavWrapper = styled.nav`
  height: 70px;
  padding: 0 30px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  letter-spacing: 16px;

  position: fixed;
  inset: 0;
  z-index: 3;

  background-color: ${(props) => (props.$show ? "#040714" : "transparent")};
`;

const Logo = styled.a`
  width: 80px;
  max-height: 70px;
  padding: 0;

  display: inline-block;
  font-size: 0;

  img {
    width: 100%;
    display: block;
  }
`;

const Search = styled.input`
  min-width: 150px;
  width: 400px;
  height: 40px;

  padding: 0 20px;

  background-color: #1c1d28;
  color: white;

  outline: none;
  border: 1px solid transparent;
  border-radius: 4px;
  box-sizing: border-box;

  transition: all 0.3s ease;
`;

const Profile = styled.div`
  width: 50px;
  height: 50px;

  border: 1px solid transparent;
  border-radius: 50%;

  background-color: white;
`;
