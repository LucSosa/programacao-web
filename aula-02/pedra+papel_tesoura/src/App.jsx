import { useState } from 'react'
import './App.css'

function App() {
  const [aposta, setAposta] = useState('')
  const [figura, setFigura] = useState('')
  const [aviso, setAviso] = useState('')
  const [vitoria, setVitoria] = useState(0)
  const [empate, setEmpate] = useState(0)
  const [derrota, setDerrota] = useState(0)

  function clickPapel() {
    setAposta("papel.png")
  }

  function clickPedra() {
    setAposta("pedra.png")
  }

  function clickTesoura() {
    setAposta("tesoura.png")
  }

  function desafiarPC() {
    if (aposta == '') {
      alert("Você ainda não apostou... Não vale")
      return
    }

    const num = Math.ceil(Math.random() * 3)
    if (num == 1) {
      setFigura("papel.png")
      if(aposta == 'papel.png'){
        setAviso("Empate!")
        setEmpate(empate + 1)
      } else if (aposta == 'pedra.png') {
        setAviso('Você Perdeu')
        setDerrota(derrota + 1)
      } else {
        setAviso('Você venceu!')
        setVitoria(vitoria + 1)
      }
    } else if (num == 2) {
      setFigura("pedra.png")
      if(aposta == 'papel.png'){
        setAviso('Você venceu!')
        setVitoria(vitoria + 1)
      } else if (aposta == 'pedra.png') {
        setAviso("Empate!")
        setEmpate(empate + 1)
      } else {
        setAviso('Você Perdeu')
        setDerrota(derrota + 1)
      }
    } else {
      setFigura("tesoura.png")
      if(aposta == 'papel.png'){
        setAviso('Você Perdeu')
        setDerrota(derrota + 1)
      } else if (aposta == 'pedra.png') {
        setAviso('Você venceu!')
        setVitoria(vitoria + 1)
      } else {
        setAviso("Empate!")
        setEmpate(empate + 1)
      }
    }

  }

  function reset (){
    setVitoria(0)
    setDerrota(0)
    setEmpate(0)
    setAviso('')
    setAposta('')
    setFigura('')
  }

  return (
    <div className="container">
      <nav className="navbar bg-info">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="./logo.png"
              alt="Pedra, Papel e Tesoura"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            Jogo: Pedra, Papel, Tesoura
          </a>
        </div>
      </nav>

      <h2>
        Clique sobre a imagem:
        <img src="./pedra.png" alt="Pedra" onClick={clickPedra} className="img-pequena mx-3" />
        <img src="./papel.png" alt="Papel" onClick={clickPapel} className="img-pequena mx-3" />
        <img src="./tesoura.png" alt="Tesoura" onClick={clickTesoura} className="img-pequena mx-3" />
      </h2>

      <div className="row">
        <div className="col-sm-4">
          <h3>Sua Aposta:</h3>
          {aposta && <img src={aposta} alt="Aposta" />}
        </div>
        <div className="col-sm-8">
          <button onClick={desafiarPC} className="btn btn-danger btn-lg">
            Desafiar PC
          </button><br />
          {figura && <img src={figura} alt="Figura do PC" />}
        </div>
      </div>

      <h3 className='mt-3'>{aviso}</h3>

      <h2 className='text-success'>N° de Vitórias: {vitoria}</h2>
      <h2 className='text'>N° de Empates: {empate}</h2>
      <h2 className='text-danger'>N° de Derrotas: {derrota}</h2>

      <button onClick={reset} className='btn btn-success btn-lg'>Novo Jogo</button>
    </div>
  )
}

export default App
