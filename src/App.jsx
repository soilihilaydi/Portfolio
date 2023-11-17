import Test from "./Test";
import "./app.scss"
import Navbar from "./components/navbar/Navbar";



const App = () => {
  return <div>
    <section id="Homepage">
       <Navbar/>
    </section>
    <section id="A propos">Parallax</section>
    <section>A propos</section>
    
    <section id="Skill">Parallax</section>
    <section id="Portfolio">Parallax</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact">Contact</section>
  { /* <Test/>
    <Test/>*/}
  </div>;
};

export default App;
