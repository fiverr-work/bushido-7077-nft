import styled from "styled-components";
import { Texture } from "../../components/Texture";

import poster from "../../img/poster/2.jpg";

const Bushido7077 = () => {
  return (
    <Bushido7077Style>
      <Texture />
      <div className="container">
        <div>
          <h3>Bushido 7077</h3>
          <p>
            <b>7777 Total Supply</b>
            <br />
            <b>Mint price: </b> 0.1 ETH
            <br />
            <b>Perks:</b>
            <br />
            <ul>
              <li>
                Holders will get to mint Project Zero for free. Number of mints depends on the
                number of Bushido 7077 they hold.
              </li>
              <li>Eligible for meet up and parties in some cities.</li>
              <li>Ownership and commercial usage rights given to the consumer over their NFT.</li>
            </ul>
          </p>
        </div>
        <div>
          <div className="holder">
            <img src={poster} alt="NFT Image" />
          </div>
        </div>
      </div>
    </Bushido7077Style>
  );
};

export default Bushido7077;

const Bushido7077Style = styled.section`
  padding-top: 70px;
  padding-bottom: 70px;

  .container {
    display: flex;
    > * {
      flex: 1;
    }
  }
  .holder {
    max-width: 513.51px;
    height: 608.84px;
    padding-left: 40px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      > div:first-child {
        order: 2;
      }
    }
    .holder {
      padding-bottom: 40px;
      padding-left: 0;
    }
  }
`;
