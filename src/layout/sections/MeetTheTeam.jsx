import styled from "styled-components";
import Section from "../Section";
import Card from "../../components/Card";

import Poster1 from "../../img/poster/3.jpg";
import Poster2 from "../../img/poster/2.jpg";
import Poster3 from "../../img/poster/4.jpg";
import Poster4 from "../../img/poster/5.jpg";

const MeetTheTeam = () => {
  const data = [
    {
      img: Poster1,
      title: "Ghōst ゴースト",
      body: `Creator of Bushido 7077. Multi-media artist. Been in crypto since 2017, but new to NFT. Loves Anime.`,
      twitter: "https://twitter.com",
    },
    {
      img: Poster2,
      title: "battousai",
      body: `Co-Creator of Bushido 7077. The 3D Artist. Been living in Japan for 4 years.`,
      twitter: "https://twitter.com",
    },
    {
      img: Poster3,
      title: "Onna-Musha",
      body: `Artist. Designer. Community Manager.`,
      twitter: "",
    },
    {
      img: Poster4,
      title: "mad doctor",
      body: `Developer. Loves Philly cheesesteak.`,
      twitter: "",
    },
  ];
  return (
    <Section title="meet the team">
      <MeetTheTeamStyle>
        <div className="row">
          <Card
            img={data[0].img}
            title={data[0].title}
            body={data[0].body}
            twitter={data[0].twitter}
          />
          <Card
            img={data[1].img}
            title={data[1].title}
            body={data[1].body}
            twitter={data[1].twitter}
          />
        </div>
        <div className="row">
          <Card
            img={data[2].img}
            title={data[2].title}
            body={data[2].body}
            twitter={data[2].twitter}
          />
          <Card
            img={data[3].img}
            title={data[3].title}
            body={data[3].body}
            twitter={data[3].twitter}
          />
        </div>
      </MeetTheTeamStyle>
    </Section>
  );
};

export default MeetTheTeam;

const MeetTheTeamStyle = styled.div`
  .row {
    margin-top: 100px;
    display: flex;
    align-items: flex-start;
    > article:last-child {
      margin-left: 25vw;
    }
    @media (max-width: 768px) {
      flex-direction: column;
      > article {
        margin-left: auto;
        margin-right: auto;
        :last-child {
          margin-right: auto;
          margin-left: auto;
        }
      }
    }
  }
`;
