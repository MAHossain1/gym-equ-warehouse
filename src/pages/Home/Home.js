import React from "react";
import Banner from "./Banner";
import Subscribe from "./Subscribe";
import Tools from "./Tools";
import WhyGymNeed from "./WhyGymNeed";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Tools></Tools>
      <WhyGymNeed></WhyGymNeed>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
