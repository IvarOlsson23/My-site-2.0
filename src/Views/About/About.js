import React from "react";
import "./About.scss";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Text from "../../Components/Text/Text";
import Heading2 from "../../Components/Headings/Heading2";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About me</title>
        <meta name="description" content="More information about me" />
        <link rel="canonical" href="/About" />
      </Helmet>
      <motion.div
        className="about-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 2 }}
        exit={{ opacity: 0 }}
      >
        <Heading2 HeadingText="Dear visitor," />
        <Text text="I am a creative and ambitious frontend developer with a passion for designing. I have a fast learning ability and work well with others to solve problems efficiently. My portfolio website showcases my skills and abilities as a frontend developer and I am confident that I have the skills to make a positive impact in any organization." />
        <Text text="I am always looking for new challenges and opportunities to grow in my field and I believe that my passion for design, problem-solving skills, and ability to work well with others make me an excellent candidate for any frontend development role. I am excited to bring my talents to your organization and contribute to the success of your projects." />
        <Text text="Thank you for taking the time to visit my website and review my website." />
      </motion.div>
    </>
  );
};

export default About;
