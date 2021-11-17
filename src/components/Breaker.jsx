import styled from "styled-components";
import { Texture } from "./Texture";

const Breaker = () => {
  return (
    <BreakerStyle>
      <Texture />
    </BreakerStyle>
  );
};

export default Breaker;

const BreakerStyle = styled.section`
  background-color: #ffe600;
  height: 2.813rem;
  width: 100%;
  overflow: hidden;
  position: relative;
  div {
    z-index: 0;
    ::before {
      opacity: 0.05;
    }
  }

  @media (max-width: 768px) {
    max-height: 2rem;
  }
`;
