import styled from "styled-components";
import Section from "../Section";

const Story = () => {
  return (
    <StoryStyle title="Story">
      <p>
        In the year <b>7077</b>, thousands of years after the glacial basin collapsed, evolution
        looms into a new era where hybrid species dominated the face of the Earth. Alpha Zero was
        appointed as the supreme authority and has absolute power over the land.
      </p>
      <p>
        As the droids rise into a position of political strength, their insatiable thirst and greed
        to wield even greater power forced the cyborgs to turn against the confederation.
      </p>
      <p>
        Jin, a cyborg from the forsaken clan of Yurei, leads the revolt against the ruling class.
      </p>
    </StoryStyle>
  );
};

export default Story;

const StoryStyle = styled(Section)`
  h3 + p {
    margin-top: 60px;
    max-width: 760px;
  }
  p {
    margin-bottom: 60px;
    max-width: 607px;
    :last-child {
      margin-bottom: 0;
    }
  }
  @media (max-width: 768px) {
    p {
      margin-bottom: 30px;
      max-width: 100% !important;
    }
  }
`;
