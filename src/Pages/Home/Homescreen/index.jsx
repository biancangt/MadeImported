import React from 'react';
import Hero from "../Hero";

import WhyChooseUs from '../WhyChooseUs';
import WeHelp from '../WeHelp';
import PopularProduct from '../PopularProduct';
import TestimonialSection from '../TestimonialSection';
import InstagramSection from '../InstagramSection';
import Footer from '../Footer';
import Navbar from '../Navbar';



export default function Home() {
  return (
    <>
      
      <Navbar/>
      <Hero />
      <PopularProduct/>
      <WeHelp/>
      <WhyChooseUs/>
      <TestimonialSection/>
      <InstagramSection />
      <Footer/>
    </>
  );
}
