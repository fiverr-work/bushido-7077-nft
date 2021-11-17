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
    background-size: cover;
    background-position: top center;
    opacity: 0.15;
  }
  ::after {
    background-image: url(${Noise});
    opacity: 0.5;
    background-size: contain;
    mix-blend-mode: overlay;
  }
`;
