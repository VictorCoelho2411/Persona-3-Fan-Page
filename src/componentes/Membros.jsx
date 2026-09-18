

function Membros({imagem, nome, persona, descrição}) {

  return (
    <>
        <div className="membros">
            <img src={imagem} alt={nome} />
            <h2>{nome}</h2>
            <h3>Persona inicial: <em>{persona}</em> </h3>
            <p>{descrição}</p>
        </div>
    </>
  )
}

export default Membros
