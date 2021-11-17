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
        <div
          className="row"
          style={{
            paddingLeft: "840px",
            paddingRight: "670px",
            position: "relative",
            left: "-170px",
          }}
        >
          {Row1.map((nft, index) => (
            <Card key={index} title={nft.name} img={nft.img} />
          ))}
        </div>
      </ScrollContainer>
      <ScrollContainer className="scroll-container" vertical={false}>
        <div className="row" style={{ paddingLeft: "670px", paddingRight: "670px" }}>
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
    padding: 7px 0;
    article {
      :not(:last-child) {
        margin-right: 14px;
      }
    }
  }
`;
