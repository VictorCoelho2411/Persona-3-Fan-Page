

function Cards({imagem, nome, numero, descrição, personagem, foto} ) {
  
  

  return (
    <>
      <div className="container">
        <div className="card">
            <img src={imagem} alt={nome} />
            <h2>{nome}</h2>
            <h3> Número: {numero}</h3>
            <p>{descrição}</p>
            <h3>O personagem correspondente a esse Arcano é: <i>{personagem}</i></h3>
            <img src={foto} alt={foto} />
            

        </div>
        

      </div>
    </>
  )
}

export default Cards
