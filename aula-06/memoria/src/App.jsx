import _ from "lodash";
import { useState } from "react";
import { useForm } from "react-hook-form";

const numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero'];
let numbersShuffle = _.shuffle(numbers);
let numberRiddled = _.shuffle(numbers);

export function App() {
  const { handleSubmit, register } = useForm({});

  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [value, setValue] = useState(0);
  const [riddle, setRiddle] = useState('');
  const [sortedRiddle, setSortedRiddle] = useState('');
  const [cards, setCards] = useState(numbersShuffle.map((number) => ({ number, isFlipped: true })));

  const [userTry, setUserTry] = useState(false)

  function hideCards() {
    setCards(cards.map((card) => ({ ...card, isFlipped: false })));
    setRiddle(<font color="red">Adivinha onde está o número = </font>);
    setSortedRiddle(numberRiddled[0] + '.png');
  }

  function receiveData(data) {
    setName(data.name);
    setValue(+data.value);
  }

  function tryCard(cardIndex) {

    const selectedCard = cards[cardIndex];

    if (selectedCard.isFlipped || userTry) {
      return;
    }
    // Vire a carta selecionada
    const newCards = [...cards];
    newCards[cardIndex] = {
      ...selectedCard,
      isFlipped: true,
    };
    setCards(newCards);

    const newSortedRiddle = sortedRiddle.replace(".png", "");
    if (selectedCard.number === newSortedRiddle) {
      const award = (value * 2).toLocaleString("pt-br", { minimumFractionDigits: 2 })
      setMessage(`Parabéns ${name}! Você acertou a carta e ganhou: R$${award}`);
      setUserTry(true)
    }
    else {
      setMessage(`Você perdeu ${name}`)
      setUserTry(true)
    }
  }

  return (
    <>
      <nav className="navbar bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            <img src="logo.png" alt="Logo" width="60" height="48" className="d-inline-block align-text-center" />
            Jogo da memória: Teste
          </a>
        </div>
      </nav>
      <div className="card text-center mt-3 w-75 mx-auto">
        <div className="card-header">
          <form onSubmit={handleSubmit(receiveData)}>
            <div className="row">
              <div className="col">
                <input type="text" className="form-control" placeholder="Nome do Apostador" {...register("name")} />
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="Valor R$" {...register("value")} />
              </div>
              <div className="col">
                <button type="submit" className="btn btn-danger" onClick={hideCards}>
                  Responder
                </button>
              </div>
            </div>

            <div className="card-body">
              <h4 className="text-primary text-left">Memorize a posição dos números.
                {riddle}
                <img src={sortedRiddle} width={30} /></h4>

              <div className="col">
                <div className="row mt-3">
                  {cards.slice(0, 5).map((card, index) => (
                    <div className="col" key={index}>
                      <div className="col border border-dark m-2">
                        <img
                          src={card.isFlipped ? card.number + '.png' : 'x.png'}
                          alt=""
                          width={200}
                          height={200}
                          onClick={() => tryCard(index)}
                          {...register(card.number)}
                          required
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="row mt-3">
                  {cards.slice(5, 10).map((card, index) => (
                    <div className="col" key={index}>
                      <div className="col border border-dark m-2">
                        <img
                          src={card.isFlipped ? card.number + '.png' : 'x.png'}
                          alt=""
                          width={200}
                          height={200}
                          onClick={() => tryCard(index + 5)}
                          {...register(card.number)}
                          required
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="card-footer text-primary fw-bold p-3">{message}</div>
          </form>
        </div>
      </div>
    </>
  );
}
