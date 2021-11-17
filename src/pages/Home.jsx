import Navbar from "../layout/Navbar";
import Header from "../layout/sections/Header";
import BushidoPlus from "../layout/sections/BushidoPlus";
import Bushido7077 from "../layout/sections/Bushido7077";
import Story from "../layout/sections/Story";
import ShowcaseTop from "../layout/sections/ShowcaseTop";
import ShowcaseReel from "../layout/sections/ShowcaseReel";
import Roadmap from "../layout/sections/Roadmap";
import BreakerCommunity from "../layout/sections/BreakerCommunity";
import MeetTheTeam from "../layout/sections/MeetTheTeam";
import FAQ from "../layout/sections/FAQ";
import Footer from "../layout/sections/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        {/* <BushidoPlus />
        <Bushido7077 />
        <Story />
        <ShowcaseTop />
        <ShowcaseReel />
        <Roadmap />
        <BreakerCommunity />
        <MeetTheTeam />
        <FAQ /> */}
      </main>
      <Footer />
    </>
  );
};

export default Home;
