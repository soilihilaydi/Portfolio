import "./contact.scss"

const Contact = () => {
  return (
    <div className="contact">
      <div className="textContainer">
        <h1>toujours chaud pour taffer</h1>
        <div className="item">
          <h2>Mail</h2>
          <span>soilihi.laydi.pro@gmail.com</span>
        </div>
        <div className="item">
          <h2>Adresse</h2>
          <span>3 rue dareyre <br/>
             07270 Lamastre
          </span>
        </div>
        <div className="item">
          <h2>Telephone</h2>
          <span>07.67.36.00.68</span>
        </div>
      </div>
      <div className="formContainer">
        <form>
          <input type="text" required placeholder="Name" />
          <input type="email" required placeholder="Email" />
          <textarea rows={8} placeholder="Message" />
          <button>Va s'y envoye</button>
        </form>
      </div>
    </div>
     
  )
}


export default Contact