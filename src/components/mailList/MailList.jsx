import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Renta tu maquinaria!</h1>
      <span className="mailDesc">Subscribete para tener promociones!</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Correo Electronico" />
        <button>Suscribirse</button>
      </div>
    </div>
  )
}

export default MailList