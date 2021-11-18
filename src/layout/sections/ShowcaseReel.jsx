import styled from "styled-components";
import { Texture } from "../../components/Texture";
import Card from "../../components/NFTCard";
import { NFTs1 as Row1, NFTs2 as Row2 } from "../../NFTs";

const ShowcaseReel = () => {
  return (
    <ShowcaseReelStyle row1={Row1.length} row2={Row2.length}>
      <Texture />
      <div className="row row1">
        {Row1.map((nft, index) => (
          <Card key={index} title={nft.name} img={nft.img} />
        ))}
        {Row1.map((nft, index) => (
          <Card key={index} title={nft.name} img={nft.img} />
        ))}
      </div>
      <div className="row row2">
        {Row2.map((nft, index) => (
          <Card key={index} title={nft.name} img={nft.img} />
        ))}
        {Row2.map((nft, index) => (
          <Card key={index} title={nft.name} img={nft.img} />
        ))}
      </div>
    </ShowcaseReelStyle>
  );
};

export default ShowcaseReel;

const ShowcaseReelStyle = styled.section`
  padding-top: 30px;
  overflow: hidden;
  .row {
    display: flex;
    justify-content: center;
    :not(:last-child) {
      margin-bottom: 15px;
    }
    &:hover {
      animation-play-state: paused !important;
    }
    &.row1 {
      width: calc(318px * ${(props) => props.row1 * 2});
      animation: scroll1 30s linear infinite;
    }
    &.row2 {
      width: calc(318px * ${(props) => props.row2 * 2});
      animation: scroll2 30s linear infinite reverse;
    }
  }
  @keyframes scroll1 {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-318px * ${(props) => props.row1}));
    }
  }
  @keyframes scroll2 {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-318px * ${(props) => props.row2}));
    }
  }

  @media (max-width: 768px) {
    .row {
      &.row1 {
        width: calc(204px * ${(props) => props.row1 * 2});
      }
      &.row2 {
        width: calc(204px * ${(props) => props.row2 * 2});
      }
    }
    @keyframes scroll1 {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(calc(-204px * ${(props) => props.row1}));
      }
    }
    @keyframes scroll2 {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(calc(-204px * ${(props) => props.row2}));
      }
    }
  }
`;
