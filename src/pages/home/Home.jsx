import React from "react";
import HeroHome from "./HeroHome";
import WhoWeAre from "./WhoWeAre";
import OurServices from "./OurServices";
import Cliend from "./Cliend";
import TechnologyUsed from "./TechnologyUsed";
import Partner from "./Partner";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <HeroHome />
      <WhoWeAre />
      <OurServices />
      <Cliend />
      <TechnologyUsed />
      <Partner />
      <Contact />
    </div>
  );
};

export default Home;
