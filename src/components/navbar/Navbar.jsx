import "./navbar.scss"

 const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <div className="wrapper">
        <span>Laydi Soilihi</span>
        <div className="social">
          <a href="https://github.com/soilihilaydi"><img src="/github.png" alt="lien vers github"/></a>
          <a href="#"><img src="/Linkedin.png" alt="lien vers linkedin"/></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
