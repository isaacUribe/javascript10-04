
const Galeria = ({autosDeportivos}) => {
  return (
    <div>
        {
        autosDeportivos.map((auto)=>(
            <section>
                <h1>{auto.nombre}</h1>
                <img src={auto.img}/>
            </section>
        ))
        }
    </div>
  )
}

export default Galeria