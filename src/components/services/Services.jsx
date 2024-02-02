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
      je souhaite développer et renforcer mes compétence dans la création de sites.</p>
      <hr/>
    </motion.div>
    <motion.div className="titleContainer" variants={variants}>
      <div className="title">
        <img src="/Jujutsu.png" alt="" />
        <h1><motion.b whileHover={{color:"orange"}}>Voici </motion.b>Mes</h1>
      </div>
      <div className="title">
        <h1><motion.b whileHover={{color:"orange"}}>Modestes</motion.b> Competences.</h1>
        
      </div>
    </motion.div>
    <motion.div className="listContainer" variants={variants}>
      <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
        <h2>Integration web</h2>
        <p>HTML5, CSS3, Bootstrap, SCSS (SASS)</p>
            
      </motion.div>
      <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
        <h2>Front-end</h2>
        <p> React.js</p>
            
      </motion.div>
      <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
        <h2>Back-end</h2>
        <p> Node.js, Javascript (Orienté Objet, 
                    MVC, API Rest) PostgreSQL, MySQL, 
                    Sequelize, NoSql(MongoDB)
</p>
            
      </motion.div>
      <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
        <h2>environnement de developpement</h2>
        <p> Versioning avec Git(Github),Rédaction
                     D’un cahier des charges, wireframes et 
                     User stories
</p>
            
      </motion.div>
    </motion.div>
  </motion.div>
  )
}

export default Services;