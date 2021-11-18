import styled from "styled-components";

const NFTCard = ({ img, title }) => {
  return (
    <CardStyle>
      <img src={img} alt={title} />
      <h4>{title}</h4>
    </CardStyle>
  );
};

export default NFTCard;

const CardStyle = styled.article`
  min-width: calc(318px - 20px);
  width: calc(318px - 20px);
  height: calc(400px - 20px);
  margin: 10px;
  box-sizing: content-box;
  position: relative;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  user-select: none;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  h4 {
    position: absolute;
    bottom: 10px;
    left: 40px;
    opacity: 0.2;
    transition: opacity 0.2s ease-in-out;
    font-size: 18px;
    font-family: "Manrope Regular";
    text-transform: uppercase;
    letter-spacing: 0.04em;
    z-index: 2;
    user-select: none;
  }
  ::after {
    content: "";
    position: absolute;
    inset: 20px;
    width: 197px;
    height: calc(100% - 40px);
    border-left: 1px solid #ffe600;
    border-bottom: 1px solid #ffe600;
    opacity: 0.2;
    transition: opacity 0.2s ease-in-out;
    z-index: 2;
  }
  ::before {
    content: "";
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background-color: #1d1d1d;
    opacity: 0.1;
    z-index: 1;
  }
  :hover {
    h4,
    ::after {
      opacity: 1;
      transition: opacity 0.2s ease-in-out;
    }
    ::before {
      opacity: 0.4;
    }
  }
  :focus-visible,
  :active {
    transform: scale(0.98);
    transition: transform 0.2s ease-in-out;
  }

  @media (max-width: 768px) {
    min-width: 204px;
    width: 204px;
    height: 256px;
    h4 {
      font-size: 14px;
    }
    ::after {
      width: 140px;
    }
  }
`;
