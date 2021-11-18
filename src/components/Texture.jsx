import styled from "styled-components";

import TextureBg from "../img/background/texture.png";
import Noise from "../img/background/noise.png";

export const Texture = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  ::before,
  ::after {
    content: "";
    position: absolute;
    inset: 0;
  }
  ::before {
    background-image: url(${TextureBg});
    background-position: top center;
    opacity: 0.15;
    background-size: contain;
  }
  ::after {
    background-image: url(${Noise});
  }
`;
