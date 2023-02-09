import React from "react";
import "./Skills.scss";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Text from "../../Components/Text/Text";
import Heading2 from "../../Components/Headings/Heading2";

const Skills = () => {
  return (
    <>
      <Helmet>
        <title>My Skills</title>
        <meta
          name="description"
          content="Read more about my skills as a frontend developer"
        />
        <link rel="canonical" href="/Skills" />
      </Helmet>
      <div>
        <motion.div
          className="skills-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 2 }}
          exit={{ opacity: 0 }}
        >
          <Heading2 HeadingText="My Skills" />
          <Text text="I am a frontend developer with a focus on HTML, CSS, JavaScript, and React.js. I have a strong understanding of these primary technologies and am able to create dynamic and engaging user experiences." />
          <Text text="In addition to my primary skills, I am also proficient in a lot of other frontend tools and frameworks such as Tailwind.css, Storybook, Firebase and Node.js. I understand the importance of building performant and accessible websites, and have a solid foundation in SEO principles, responsive design, accessibility, and performance testing." />
          <Text text="Whether working on a solo project or collaborating with a team, I am dedicated to delivering high-quality and user-friendly products. I am constantly looking to expand my knowledge and skill set, and am confident in my ability to quickly adapt to new technologies and techniques." />
        </motion.div>
      </div>
    </>
  );
};

export default Skills;
