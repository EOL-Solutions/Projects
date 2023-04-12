import React from "react";
import Hero from "../../components/Hero/Hero"
import Features from "../../components/Features/Features";
import Growth from "../../components/Growth/Growth";
import Questions from "../../components/Questions/Questions";
import Programs from "../../components/Programs/Programs";
import { programs_shopper } from "../../constants/programs_shopper";
import Slider from "../../components/Slider/Slider"; 

const  Home =() =>{
  return (
    <div className="App">
      <Hero />
      <Features />
      <Slider />
      <Growth />
      <Questions />
{/*       <Programs programs={programs_user} />
 */}      <Programs programs={programs_shopper} />
     {/*  <Footer /> */}
    </div>
  );
};
export default Home;