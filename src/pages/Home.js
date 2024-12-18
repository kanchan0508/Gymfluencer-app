import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { Services } from '../components/Services';
import { Benefits } from '../components/Benefits';
import { GymLocations } from '../components/GymLocations';
import { Blogs } from '../components/Blogs';


function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2 });
  return (
    <>
   
      <Hero />
      <Services />
      <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className=""
    >
      <Stats />  
      <Benefits />
      <GymLocations />
      <Blogs />
    </motion.div>
    </>
  );
}

export default Home;

