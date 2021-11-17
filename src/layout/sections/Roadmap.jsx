import styled from "styled-components";
import { Texture } from "../../components/Texture";

const Roadmap = () => {
  return (
    <RoadmapStyle>
      <Texture />
      <div className="container">
        <div className="road">
          <h3>roadmap</h3>
          <div>
            <p>
              <span>Phase 01. </span> <b>Bushido 7077</b>
            </p>
            <ul>
              <li>7777 NFT 3D collection available for collectors.</li>
              <li>Special Announcement after launch of Bushido 7077.</li>
            </ul>
          </div>
          <div>
            <p>
              <span>Phase 02. </span> <b>Project Zero (2D Art)</b>
            </p>
            <ul>
              <li>Prequel story for Bushido 7077</li>
            </ul>
          </div>
          <div>
            <p>
              <span>Phase 03. </span> <b>Karakuri (3D)</b>
            </p>
            <ul>
              <li>The Droids lead by Alpha Zero</li>
            </ul>
          </div>
          <div>
            <p>
              <span>Phase 04.</span>
            </p>
            <ul>
              <li>Bushido 7077 Animation</li>
            </ul>
          </div>
        </div>
      </div>
    </RoadmapStyle>
  );
};

export default Roadmap;

const RoadmapStyle = styled.section`
  padding-top: 70px;
  padding-bottom: 200px;

  h3 {
    margin-bottom: 50px;
  }

  .road {
    flex: 1;
    > div {
      border: 1px solid #ffe6006e;
      padding: 15px;
      :not(:last-child) {
        margin-bottom: 44px;
      }
    }
  }

  .container {
    display: flex;
    > div {
      flex: 1;
    }
    ::before {
      content: "";
      margin-top: 25px;
      margin-right: 34px;
      width: 20px;
      border-top: 1px solid #f1f1f1;
      border-left: 1px solid #f1f1f1;
    }
  }

  @media (max-width: 768px) {
    padding-bottom: 70px;
    .container {
      ::before {
        /* margin-right: 15px;
        margin-left: 15px; */
        display: none;
      }
    }
  }
  @media (max-width: 576px) {
    .container {
      ::before {
        display: none;
      }
    }
  }
`;
