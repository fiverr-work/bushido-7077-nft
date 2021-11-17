import styled from "styled-components";
import { Texture } from "../../components/Texture";

import BG from "../../img/background/showcase-bg.png";
import Brand from "../../img/logo/brand-large.png";

const ShowcaseTop = () => {
  return (
    <ShowcaseTopStyle>
      <Texture />
      <div className="brand">
        <img src={Brand} alt="Logo" />
        <div>
          <h3>bushido</h3>
          <h4 className="text-stroke">7077</h4>
        </div>
      </div>
    </ShowcaseTopStyle>
  );
};

export default ShowcaseTop;

const ShowcaseTopStyle = styled.section`
  background-image: url(${BG});
  background-position: center;
  background-size: 200vw;
  background-repeat: no-repeat;
  height: 100vh;
  max-height: 100vh;
  .brand {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  h3 {
    margin-bottom: 10px;
    font-size: 4rem;
  }
  h4 {
    font-size: 3rem;
  }
  img {
    width: 383px;
    height: 383px;
  }
  @media (max-width: 768px) {
    background-size: 300vw;
    img {
      width: 200px;
      height: 200px;
    }
    h3 {
      font-size: 3rem;
    }
    h4 {
      font-size: 2.5rem;
    }
  }
`;
