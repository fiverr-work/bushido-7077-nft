import styled from "styled-components";
import { Texture } from "../../components/Texture";

const FAQ = () => {
  return (
    <FAQStyle>
      <Texture />
      <div className="container"></div>
    </FAQStyle>
  );
};

export default FAQ;

const FAQStyle = styled.section`
  padding-top: 70px;
  padding-bottom: 70px;
`;
