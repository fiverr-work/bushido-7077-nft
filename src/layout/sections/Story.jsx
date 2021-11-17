import styled from "styled-components";
import { Texture } from "../../components/Texture";

const Story = () => {
  return (
    <StoryStyle>
      <Texture />
      <div className="container">
        <div>
          <h3>Story</h3>
          <p>
            In the year <b>7077</b>, thousands of years after the glacial basin collapsed, evolution
            looms into a new era where hybrid species dominated the face of the Earth. Alpha Zero
            was appointed as the supreme authority and has absolute power over the land.
          </p>
          <p>
            As the droids rise into a position of political strength, their insatiable thirst and
            greed to wield even greater power forced the cyborgs to turn against the confederation.
          </p>
          <p>
            Jin, a cyborg from the forsaken clan of Yurei, leads the revolt against the ruling
            class.
          </p>
        </div>
      </div>
    </StoryStyle>
  );
};

export default Story;

const StoryStyle = styled.section`
  padding-top: 70px;
  padding-bottom: 140px;

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
  .container {
    display: flex;
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

    p {
      margin-bottom: 30px;
    }
    .container {
      ::before {
        margin-right: 15px;
        margin-left: 15px;
      }
    }
  }
`;
