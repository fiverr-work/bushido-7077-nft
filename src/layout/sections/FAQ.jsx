import styled from "styled-components";
import Faq from "react-faq-component";
import Section from "../Section";

import { ReactComponent as ArrowDownIcon } from "../../img/icons/arrowDown.svg";

const data = {
  rows: [
    {
      title: "What is Bushido 7077?",
      content: `Bushido 7077 is a custom made 3D model collection mixed with generative art`,
    },
    {
      title: "Why join the Bushido 7077 club?",
      content:
        "Aside from the art being one of a kind in the NFT space,  you will gain exclusive benefits in the future, like the 2 NFT drops (Project Zero and Karakuri).",
    },
    {
      title: "When is the launch of Bushido 7077?",
      content: "December 17, 2021",
    },
    {
      title: "What is the price of Bushido 7077?",
      content: ".1 ETH",
    },
    {
      title: "What is Mark of the Sun NFT?",
      content: "It is a membership badge with some added benefits for holders.",
    },
    {
      title: "How may Mark of the Sun is available for purchase?",
      content: "2000",
    },
    {
      title: "How many mint for presale spot?",
      content: "2",
    },
    {
      title: "What blockchain will the project launch?",
      content: "Ethereum",
    },
    {
      title: "How do I get whitelisted?",
      content: `Whitelist is handpicked by the team to the best members of the community. You can also earn it through discord games and twitter giveaway contest.`,
    },
  ],
};

const config = {
  arrowIcon: <ArrowDownIcon />,
};
const FAQ = () => {
  return (
    <Section title="faq">
      <FAQStyle>
        <Faq data={data} config={config} />
      </FAQStyle>
    </Section>
  );
};

export default FAQ;

const FAQStyle = styled.div`
  .icon-wrapper {
    position: static !important;
    transform-origin: center;
  }
  .faq-row-wrapper {
    background: none !important;
    .faq-title {
    }

    .faq-body {
      .faq-row {
        border: none !important;
        padding: 0 0 15px;
        .row-title {
          background-color: #ffe600 !important;
          color: #14191a;
          padding: 24px 33px !important;
          font-family: "Manrope Bold";
          font-size: 18px;
        }

        .row-content {
          border: 2px solid #ffe600;
          margin-top: 15px;
          .row-content-text {
            color: #f1f1f1 !important;
            padding: 24px 33px;
            font-family: "Manrope Regular";
          }
        }
      }
    }
  }
`;
