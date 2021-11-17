import styled from "styled-components";
import { Texture } from "../../components/Texture";

const Roadmap = () => {
  return (
    <RoadmapStyle>
      <Texture />
      <div className="container"></div>
    </RoadmapStyle>
  );
};

export default Roadmap;

const RoadmapStyle = styled.section`
  padding-top: 70px;
  padding-bottom: 70px;
`;
