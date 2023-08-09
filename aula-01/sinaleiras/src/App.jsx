import { useState } from "react"

function App() {
  const [cor, setCor] = useState("vermelha.png")
  const [aviso, setAviso] = useState("Sinal Vermelho: Proibido Passar")

  function trocaSinaleira() {
    if (cor == "vermelha.png") {
      setCor("verde.png")
      setAviso("Sinal Verde: Avance com segurança")
    } else if (cor == "verde.png") {
      setCor("amarela.png")
      setAviso("Sinal Amarelo: Atenção o sinal irá fechar")
    } else {
      setCor("vermelha.png")
      setAviso("Sinal Vermelho: Proibido Passar")
    }
  }

  return (
    <>
      <h1>Escola de Trânsito</h1>
      <h2>Aula sobre sinaleira</h2>
      <hr />
      <img src={cor} alt="vermelha" width={200} onClick={trocaSinaleira} />
      <h2>{aviso}</h2>
      <h4><i>* Clique sobre a sinaleira para trocar de cor * </i></h4>
    </>
  )
}

export default App
