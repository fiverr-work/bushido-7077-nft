import styled from "styled-components";
import { Texture } from "../../components/Texture";
import { ReactComponent as Discord } from "../../img/media/discord.svg";
import { ReactComponent as Instagram } from "../../img/media/instagram.svg";
import { ReactComponent as Twitter } from "../../img/media/twitter.svg";

import Logo from "../../img/logo/brand-black.svg";

const Footer = () => {
  return (
    <FooterStyle>
      <Texture />
      <div className="background" />
      <div className="container">
        <div className="row">
          <img src={Logo} alt="" />
          <div>
            <h4>Bushido</h4>
            <h5>7077</h5>
          </div>
        </div>
        <div className="prefooter">
          <div>
            <label>join our community</label>
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
          </div>
          <div className="contact">
            <lebel>Contact us</lebel>
            <a href="mailto:bushido7077@gmail.com">bushido7077@gmail.com</a>
          </div>
        </div>
        <p>©2021 BUShido 7077. All rights reserved.</p>
      </div>
    </FooterStyle>
  );
};

export default Footer;

const FooterStyle = styled.footer`
  padding: 50px 0;
  color: #14191a;

  > div:first-of-type {
    ::after {
      opacity: 0.1;
    }
  }
  .background {
    background: #ffe600;
    position: absolute;
    inset: 0;
    z-index: -2;
  }
  .row {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  h4,
  h5 {
    color: #14191a;
    margin-bottom: 0;
  }
  h4 {
    font-size: 48px;
  }
  h5 {
    font-size: 36px;
  }
  * {
    text-transform: uppercase;
  }
  p {
    font-size: 15px;
    line-height: 20px;
  }
  .media {
    margin-top: 17px;
    a {
      svg {
        min-height: 25px;
        max-height: 25px;
        min-width: 26px;
        max-width: 26px;
        path,
        circle,
        rect {
          fill: #14191a;
        }
      }
      :hover {
        svg {
          path,
          circle,
          rect {
            fill: #f1f1f1;
          }
        }
      }
      :not(:last-child) {
        margin-right: 1rem;
      }
    }
  }
  .prefooter {
    margin: 50px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .contact {
      text-align: right;
      a {
        color: #14191a;
        display: block;
        font-weight: bold;
        font-size: 15px;
        font-family: "Manrope Bold";
        margin-top: 14px;
        :hover {
          color: #f1f1f1;
        }
      }
    }
  }
  @media (max-width: 768px) {
    text-align: center;
    h4 {
      font-size: 42px;
    }
    .prefooter {
      flex-direction: column;
      justify-content: center;
      .contact {
        text-align: center;
        margin-top: 25px;
      }
    }
  }
`;
