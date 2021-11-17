import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../img/logo/brand.svg";
import { ReactComponent as Discord } from "../img/media/discord.svg";
import { ReactComponent as Instagram } from "../img/media/instagram.svg";
import { ReactComponent as Twitter } from "../img/media/twitter.svg";
import { ReactComponent as CloseIcon } from "../img/icons/close.svg";
import { ReactComponent as Menu } from "../img/icons/menu.svg";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <NavbarStyle>
      <div className="container">
        <Link to="/">
          <Logo className="brand" width="108px" height="108px" />
        </Link>
        <div className={`nav ${menu && "show"}`}>
          <CloseIcon className="close" onClick={() => setMenu(false)} />
          <a href="#" onClick={() => setMenu(false)}>
            Story
          </a>
          <a href="#" onClick={() => setMenu(false)}>
            Roadmap
          </a>
          <a href="#" onClick={() => setMenu(false)}>
            Team
          </a>
          <a href="#" onClick={() => setMenu(false)}>
            FAQ
          </a>
          <a href="#" onClick={() => setMenu(false)}>
            Mint
          </a>
        </div>
        <div className="media">
          <a href="https://www.discord.com">
            <Discord />
          </a>
          <a href="https://www.instagram.com">
            <Instagram />
          </a>
          <a href="https://www.twitter.com">
            <Twitter />
          </a>
        </div>
        <Menu className="menu" onClick={() => setMenu(true)} />
      </div>
    </NavbarStyle>
  );
};

export default Navbar;

const NavbarStyle = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 2;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg:not(.brand) {
      cursor: pointer;
      min-height: 23px;
      max-height: 23px;
      max-width: 26px;
      path,
      circle,
      rect {
        fill: #f1f1f1;
      }
      :hover {
        path,
        circle,
        rect {
          fill: #ffe600;
        }
      }
    }
    .nav {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      > a {
        margin-right: 1.3rem;
      }
      .close {
        display: none;
        position: fixed;
        top: 5vh;
        right: 12vw;
      }
    }
    .menu {
      display: none;
    }
    .media {
      a {
        margin-left: 1rem;
        display: inline-block;
      }
    }
    @media (max-width: 768px) {
      justify-content: flex-start;
      .brand {
        width: 70px;
      }
      .media {
        margin-left: auto;
        flex: 1;
        text-align: right;
        padding-right: 1rem;
      }
      .nav {
        position: fixed;
        top: 0;
        bottom: 0;
        right: -100%;
        width: 100%;
        height: 100%;
        z-index: 3;
        transition: right 300ms ease-in, left 300ms;
        background-color: #14191a;
        flex-direction: column;
        justify-content: center;
        align-items: stretch;
        > a {
          text-align: center;
          padding: 1.3rem 0.7rem;
          margin-right: 0;
          margin-bottom: 1.3rem;
        }
        &.show {
          right: 0;
          transition: right 300ms ease-in, left 300ms;
          .close {
            display: block;
          }
        }
      }
      .menu {
        display: block;
      }
    }
  }
`;
