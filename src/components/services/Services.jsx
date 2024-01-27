import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";


const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};


const Services = () => {

  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });


  return (
  <motion.div 
      className="services" variants={variants} initial="initial"
      ref={ref}
      animate={isInView && "animate"}  >
    

    <motion.div className="textContainer" variants={variants}>
      <p>Amoureux de l’esthétique et de la communication,<br/>
      je souhaite développer et renforcer mes compétence pour travailler 
      sur la création de sites.</p>
      <hr/>
    </motion.div>
    <motion.div className="titleContainer" variants={variants}>
      <div className="title">
        <img src="/Jujutsu.jpg" alt="" />
        <h1><motion.b whileHover={{color:"orange"}}>Pour </motion.b>de vrai</h1>
      </div>
      <div className="title">
        <h1><motion.b whileHover={{color:"orange"}}>Pour </motion.b>Ton business.</h1>
        <button>On fait quoi?</button>
      </div>
    </motion.div>
    <motion.div className="listContainer" variants={variants}>
      <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
        <h2>Texte</h2>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?</p>
            <button>Va sy Go</button>
      </motion.div>
      <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
        <h2>Texte</h2>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?</p>
            <button>Va sy Go</button>
      </motion.div>
      <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
        <h2>Texte</h2>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?</p>
            <button>Va sy Go</button>
      </motion.div>
      <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
        <h2>Texte</h2>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?</p>
            <button>Va sy Go</button>
      </motion.div>
    </motion.div>
  </motion.div>
  )
}

export default Services;