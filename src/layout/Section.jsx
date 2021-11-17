import styled from "styled-components";
import { Texture } from "../components/Texture";

const Story = ({ title, children }) => {
  return (
    <StoryStyle>
      <Texture />
      <div className="container">
        <div>
          <h3>{title}</h3>
          {children}
        </div>
      </div>
    </StoryStyle>
  );
};

export default Story;

const StoryStyle = styled.section`
  padding-top: 70px;
  padding-bottom: 140px;

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
        margin-right: 15px;
        margin-left: 15px;
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
