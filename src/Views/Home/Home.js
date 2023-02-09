import React from "react";
import "./Home.scss";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Text from "../../Components/Text/Text";

const Home = () => {
  return (
    <>
      <motion.div
        className="home-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 2 }}
        exit={{ opacity: 0 }}
      >
        <img
          className="home-image"
          src={require("../../assets/Home-image.png")}
          alt="Home page, art style puppet"
        />
      </motion.div>
    </>
  );
};

export default Home;
