import styled from "styled-components";
import { Texture } from "../../components/Texture";

import Logo from "../../img/logo/brand-black.svg";

const BreakerCommunity = () => {
  return (
    <BreakerCommunityStyle>
      <Texture />
      <div className="background" />
      <div className="row">
        <img src={Logo} alt="" />
        <div>
          <h4>Bushido</h4>
          <h5>7077</h5>
          <a className="btn" href="/">
            join our community
          </a>
        </div>
      </div>
    </BreakerCommunityStyle>
  );
};

export default BreakerCommunity;

const BreakerCommunityStyle = styled.section`
  padding: 50px 15px;
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
  }
  h4,
  h5 {
    color: #14191a;
    margin-bottom: 0;
    line-height: 1.2;
  }
  a {
    margin-top: 10px;
  }

  @media (max-width: 567px) {
    .row {
      flex-direction: column;
      text-align: center;
    }
  }
`;
