import { useRef } from "react";
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id:1,
    title:"react project",
    img:"/phone.jpeg",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id:2,
    title:"react project",
    img:"https://images.pexels.com/photos/3229333/pexels-photo-3229333.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id:3,
    title:"react project",
    img:"https://images.pexels.com/photos/15542283/pexels-photo-15542283/free-photo-of-famille-vrai-africain.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id:4,
    title:"react project",
    img:"https://images.pexels.com/photos/18058712/pexels-photo-18058712/free-photo-of-mode-gens-femme-art.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
];


const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>check la demo</button>
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

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
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