import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss"
import { motion } from "framer-motion";

 const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
       <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}>
          The por;)folio Maquette. 
        </motion.span>
        <div className="social">
          <a href="https://github.com/soilihilaydi"><img src="/github.png" alt="lien vers github"/></a>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar;
