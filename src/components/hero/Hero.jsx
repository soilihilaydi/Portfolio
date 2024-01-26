import "./hero.scss";
import { motion } from "framer-motion";


const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};


const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial"
          animate="animate">
          <motion.h2 variants={textVariants}>Laydi Soilihi </motion.h2>
          <motion.h1 variants={textVariants}>Développeur web full stack </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>Voir les dernières oeuvres </motion.button>
            <motion.button variants={textVariants}>Contactez moi </motion.button>
          </motion.div>
          <motion.img variants={textVariants}  src="/scroll.png" alt="" />
        </motion.div>
      </div>
      <div className="slidingTextContainer">
        Créateur De Contenu Numérique
      </div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
