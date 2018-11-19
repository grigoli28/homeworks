import React from "react";
import Login from "./Login";
import Nav from "./Nav";
import Logo from "./Logo";

const Header = () => (
  <header className="header">
    <Logo />
    <Nav />
    <Login />
  </header>
);

export default Header;
