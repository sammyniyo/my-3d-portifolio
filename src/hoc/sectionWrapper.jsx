import { motion } from "framer-motion";
import { styles } from "../style";
import { staggerContainer } from "../utils/motion";
import { Component } from "react";
const sectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

function sectionWrapper() {
  return (
    <motion.section>
      <Component />
    </motion.section>
  );
}

export default sectionWrapper;
