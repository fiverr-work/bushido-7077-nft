import styled from "styled-components";
import { Texture } from "../../components/Texture";

const MeetTheTeam = () => {
  return (
    <MeetTheTeamStyle>
      <Texture />
      <div className="container"></div>
    </MeetTheTeamStyle>
  );
};

export default MeetTheTeam;

const MeetTheTeamStyle = styled.section`
  padding-top: 70px;
  padding-bottom: 70px;
`;
