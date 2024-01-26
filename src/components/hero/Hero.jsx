import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <h2>Laydi Soilihi </h2>
          <h1>Développeur web full stack </h1>
          <div className="buttons">
            <button>Voir les dernières oeuvres </button>
            <button>Contactez moi </button>
          </div>
          <img src="/scroll.png" alt="" />
        </div>
      </div>

      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
