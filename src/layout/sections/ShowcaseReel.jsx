import styled from "styled-components";
import { Texture } from "../../components/Texture";
import Card from "../../components/NFTCard";
import { NFTs1 as Row1, NFTs2 as Row2 } from "../../NFTs";
import ScrollContainer from "react-indiana-drag-scroll";

const ShowcaseReel = () => {
  return (
    <ShowcaseReelStyle>
      <Texture />
      <ScrollContainer className="scroll-container" vertical={false}>
        <div className="row row1">
          {Row1.map((nft, index) => (
            <Card key={index} title={nft.name} img={nft.img} />
          ))}
        </div>
      </ScrollContainer>
      <ScrollContainer className="scroll-container" vertical={false}>
        <div className="row row2">
          {Row2.map((nft, index) => (
            <Card key={index} title={nft.name} img={nft.img} />
          ))}
        </div>
      </ScrollContainer>
    </ShowcaseReelStyle>
  );
};

export default ShowcaseReel;

const ShowcaseReelStyle = styled.section`
  padding-bottom: 50px;
  overflow: hidden;
  .row {
    display: flex;
    justify-content: center;
    padding: 20px 0 3px;
    article {
      :not(:last-child) {
        margin-right: 14px;
      }
    }
  }
  .row1 {
    position: relative;
    left: -170px;
  }
  @media (max-width: 576px) {
    .row1 {
      padding-left: 840px;
      padding-right: 670px;
    }
    .row2 {
      padding-left: 670px;
      padding-right: 670px;
    }
  }
`;
