import { useState, useEffect } from "react"
import { dados } from "../../public/filmes"
import CardFilme from "./CardFilm"

export function Novidades() {
  const [filmes, setFilmes] = useState([])

  useEffect(() => {
    setFilmes(dados)
  }, [])

  const listaFilmes = filmes.map(filme => (
    <CardFilme
      key={filme.id}
      filme={filme}
    />
  ))

  return (
    <div className="container mt-3">
      <h3>Novidades: Filmes disponíveis para alugar</h3>
      <div className="row">
        {listaFilmes}
      </div>
    </div>
  )
}
