import styled from "styled-components";
import { Texture } from "../../components/Texture";

const ShowcaseTop = () => {
  return (
    <ShowcaseTopStyle>
      <Texture />
      <div className="container"></div>
    </ShowcaseTopStyle>
  );
};

export default ShowcaseTop;

const ShowcaseTopStyle = styled.section`
  padding-top: 70px;
  padding-bottom: 70px;
`;
