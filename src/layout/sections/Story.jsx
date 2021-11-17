import styled from "styled-components";
import { Texture } from "../../components/Texture";

const Story = () => {
  return (
    <StoryStyle>
      <Texture />
      <div className="container"></div>
    </StoryStyle>
  );
};

export default Story;

const StoryStyle = styled.section`
  padding-top: 70px;
  padding-bottom: 70px;
`;
