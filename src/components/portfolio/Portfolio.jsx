import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";



const items = [
 {
  id: 1,
  title: "React Commerce",
  img: "",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
 },
 {
  id: 2,
  title: "Next.js Blog",
  img: "",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
 },
 {
  id: 3,
  title: "Vanilla JS App",
  img: "",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
 },
 {
  id: 4,
  title: "Music App",
  img: "",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
 },
];

const Single = ({ item }) => {

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

const y = useTransform(scrollYProgress, [0,1], [-300, 300]);


    return (
    <section ref={ref}>
      <div className="container">
       <div className="wrapper">
         <div className="imageContainer">
            <img src={item.img} alt=""/>
         </div>
          
          <motion.div className="textContainer" >
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>Check la démo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};



const Portfolio = () => {
    
  const ref = useRef();


  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress,{
    stiffness:100,
    damping: 30,
  });



  return (
    <div className="portfolio" ref={ref}>
     <div className="progress">
      <h1>Mes projets</h1>
      <motion.div style={{ scaleX }} className="progressBar"></motion.div>
     </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;