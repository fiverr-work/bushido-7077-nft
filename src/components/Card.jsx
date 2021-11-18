import styled from "styled-components";

import { ReactComponent as Twitter } from "../img/media/twitter.svg";

const Card = ({ img, title, body, twitter }) => {
  return (
    <CardStyle>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <p>{body}</p>
        {twitter && (
          <a href={twitter}>
            <Twitter />
          </a>
        )}
      </div>
    </CardStyle>
  );
};

export default Card;

const CardStyle = styled.article`
  width: 291.42px;
  position: relative;
  :not(:last-child) {
    margin-bottom: 50px;
  }
  ::before {
    content: "";
    z-index: -1;
    top: -15px;
    left: -15px;
    right: 0;
    width: 100%;
    height: 362.46px;
    position: absolute;
    border: 1px solid #ffe6007a;
    transition: background-color 200ms, inset 200ms, height 200ms, width 200ms;
  }
  :hover {
    ::before {
      background-color: #ffe600;
      inset: -5px;
      height: 370px;
      width: calc(100% + 8px);
      transition: background-color 200ms, inset 200ms, height 200ms, width 200ms;
    }
  }
  img {
    width: 100%;
    height: 362.46px;
    object-fit: cover;
    display: inline-block;
    margin-bottom: 20px;
    cursor: pointer;
    user-select: none;
  }
  p {
    line-height: 25px;
    text-transform: uppercase;
  }

  @media (max-width: 576px) {
    width: 300px;
  }
`;
