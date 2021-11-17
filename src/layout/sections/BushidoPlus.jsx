import styled from "styled-components";
import { Texture } from "../../components/Texture";

import img from "../../img/poster/1.jpg";
import { ReactComponent as PlayIcon } from "../../img/icons/play.svg";

const BushidoPlus = () => {
  return (
    <BushidoPlusStyle>
      <Texture />
      <div className="container">
        <Showcase />
        <div>
          <h3>bushido ++</h3>
          <label>mark of the sun</label>
          <p>
            <b>2000/2000</b>
            <br />
            <b>Mint price: </b> 0.2 ETH
            <br />
            <b>Perks:</b>
            <br />
            <ul>
              <li>
                Early access for Bushido 7077 mint with discounted price of .07 ETH each max of 2.
              </li>
              <li>Will get free mint for Project Zero NFT per Bushido 7077 they have (2 max).</li>
              <li>Early access for Karakuri drop 1 free mint.</li>
              <li>Ownership and commercial usage rights given to the consumer over their NFT.</li>
              <li>Eligible for meet up and parties in some cities.</li>
              <li>Will get a chance to win a raffle trip to Tokyo, Japan and meet the team.</li>
              <li>Exclusive premiere of animation. </li>
            </ul>
          </p>
        </div>
      </div>
    </BushidoPlusStyle>
  );
};

export default BushidoPlus;

const BushidoPlusStyle = styled.section`
  padding-top: 140px;
  padding-bottom: 140px;

  .container {
    display: flex;
    > * {
      flex: 1;
    }
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  label {
    letter-spacing: 0.275em;
    text-transform: uppercase;
    font-weight: 800;
    font-size: 24px;
    line-height: 33px;
    font-family: "Manrope ExtraBold";
  }
  ul {
    padding-left: 30px;
  }

  @media (max-width: 768px) {
    padding-top: 70px;
    padding-bottom: 70px;
  }
`;

const Showcase = () => {
  return (
    <ShowcaseStyle>
      <div>
        <img src={img} alt="Bushido" />
        <div></div>
        <PlayIcon />
      </div>
    </ShowcaseStyle>
  );
};

const ShowcaseStyle = styled.div`
  box-sizing: content-box;
  padding-right: 40px;
  div {
    max-width: 513.51px;
    height: 608.84px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    div {
      cursor: pointer;
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      background: #14191a78;
      mix-blend-mode: multiply;
      :hover + svg {
        width: 116.67px;
        height: 102.17px;
        transition: width 200ms ease, height ease, fill 200ms ease;
        fill: #ffe600;
      }
      :active + svg {
        width: 103.55px;
        height: 90.67px;
        transition: width 200ms, height 200ms;
      }
    }
    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transition: width 200ms ease, height ease, fill 200ms ease;
      transform: translate(-50%, -50%);
      pointer-events: none;
    }
  }
  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 40px;
  }
`;
