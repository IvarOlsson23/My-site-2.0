import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Carousel from "../../Components/Carousel/Carousel";

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Projects</title>
        <meta name="description" content="Check out some of my projects" />
        <link rel="canonical" href="/Projects" />
      </Helmet>
      <motion.div
        className="carousel-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 2, duration: 1 }}
        exit={{ opacity: 0 }}
      >
        <Carousel />
      </motion.div>
    </>
  );
};

export default Projects;
