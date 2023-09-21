import _, { template } from "lodash"
import { useState } from "react"
import { useForm } from "react-hook-form"

const numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero']
let numbersShuffle = _.shuffle(numbers)
let numberRiddled = _.shuffle(numbers)

export function App() {
  const { handleSubmit, register } = useForm({})

  const [imgOne, setImgOne] = useState(numbersShuffle[0] + '.png')
  const [imgTwo, setImgTwo] = useState(numbersShuffle[1] + '.png')
  const [imgThree, setImgThree] = useState(numbersShuffle[2] + '.png')
  const [imgFour, setImgFour] = useState(numbersShuffle[3] + '.png')
  const [imgFive, setImgFive] = useState(numbersShuffle[4] + '.png')
  const [imgSix, setImgSix] = useState(numbersShuffle[5] + '.png')
  const [imgSeven, setImgSeven] = useState(numbersShuffle[6] + '.png')
  const [imgEight, setImgEight] = useState(numbersShuffle[7] + '.png')
  const [imgNine, setImgNine] = useState(numbersShuffle[8] + '.png')
  const [imgZero, setImgZero] = useState(numbersShuffle[9] + '.png')

  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [value, setValue] = useState(0)
  const [previousCardValue, setPreviousCardValue] = useState({
    one: imgOne,
    two: imgTwo,
    three: imgThree,
    four: imgFour,
    five: imgFive,
    six: imgSix,
    seven: imgSeven,
    eight: imgEight,
    nine: imgNine,
    zero: imgZero,
  });

  const [riddle, setRiddle] = useState("")
  const [sortedRiddle, setSortedRiddle] = useState("")

  function hideCards() {
    // setPreviousCardValue({
    //   one: imgOne,
    //   two: imgTwo,
    //   three: imgThree,
    //   four: imgFour,
    //   five: imgFive,
    //   six: imgSix,
    //   seven: imgSeven,
    //   eight: imgEight,
    //   nine: imgNine,
    //   zero: imgZero,
    // });

    setImgOne('x.png')
    setImgTwo('x.png')
    setImgThree('x.png')
    setImgFour('x.png')
    setImgFive('x.png')
    setImgSix('x.png')
    setImgSeven('x.png')
    setImgEight('x.png')
    setImgNine('x.png')
    setImgZero('x.png')
    setRiddle('Adivinha onde está o número = ')
    setSortedRiddle(numberRiddled[0] + '.png')
  }

  function receiveData(data) {
    setName(data.name)
    setValue(+data.value)
  }

  const cardValues = {
    one: imgOne,
    two: imgTwo,
    three: imgThree,
    four: imgFour,
    five: imgFive,
    six: imgSix,
    seven: imgSeven,
    eight: imgEight,
    nine: imgNine,
    zero: imgZero,
  };

  function tryCard(cardKey) {
    const previousValue = cardValues[cardKey];
    console.log(previousValue);
    console.log(sortedRiddle);
    setMessage(`${name} você clicou na carta com o valor: ${previousValue}`);
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
                <input type="text" className="form-control"
                  placeholder="Nome do Apostador" {...register("name")} />
              </div>
              <div className="col">
                <input type="text" className="form-control"
                  placeholder="Valor R$" {...register("value")} />
              </div>
              <div className="col">
                <button type="submit" className="btn btn-danger" onClick={hideCards}>Responder</button>
              </div>
            </div>


            <div className="card-body">
              <h4 className="text-primary text-left">Memorize a posição dos números.</h4>
              <h4 className="text-danger text-left">{riddle}</h4>
              <img src={sortedRiddle} width={30} />
              <div className="col">
                <div className="row mt-3">
                  <div className="col border border-dark m-2">
                    <img
                      src={imgOne}
                      alt=""
                      width={75}
                      height={150}
                      onClick={() => tryCard('one')}
                      {...register('one')}
                    />
                  </div>

                  <div className="col border border-dark m-2">
                    <img
                      src={imgTwo}
                      alt=""
                      width={75}
                      height={150}
                      onClick={() => tryCard('two')}
                      {...register('two')}
                    />
                  </div>

                  <div className="col border border-dark m-2">
                    <img
                      src={imgThree}
                      alt=""
                      width={75}
                      height={150}
                      onClick={() => tryCard('three')}
                      {...register('three')}
                    />
                  </div>

                  <div className="col border border-dark m-2">
                    <img
                      src={imgFour}
                      alt=""
                      width={75}
                      height={150}
                      onClick={() => tryCard('four')}
                      {...register('four')}
                    />
                  </div>

                  <div className="col border border-dark m-2">
                    <img
                      src={imgFive}
                      alt=""
                      width={75}
                      height={150}
                      onClick={() => tryCard('five')}
                      {...register('five')}
                    />
                  </div>

                </div>
                <div className="row mt-3">
                  <div className="col border border-dark m-2">
                    <img
                      src={imgSix}
                      alt=""
                      width={75}
                      height={150}
                      onClick={() => tryCard('six')}
                      {...register('six')}
                    />
                  </div>

                  <div className="col border border-dark m-2">
                    <img
                      src={imgSeven}
                      alt=""
                      width={75}
                      height={150}
                      onClick={() => tryCard('seven')}
                      {...register('seven')}
                    />
                  </div>

                  <div className="col border border-dark m-2">
                    <img
                      src={imgEight}
                      alt=""
                      width={75}
                      height={150}
                      onClick={() => tryCard('eight')}
                      {...register('eight')}
                    />
                  </div>

                  <div className="col border border-dark m-2">
                    <img
                      src={imgNine}
                      alt=""
                      width={75}
                      height={150}
                      onClick={() => tryCard('nine')}
                      {...register('nine')}
                    />
                  </div>

                  <div className="col border border-dark m-2">
                    <img
                      src={imgZero}
                      alt=""
                      width={75}
                      height={150}
                      onClick={() => tryCard('zero')}
                      {...register('zero')}
                    />
                  </div>


                </div>
              </div>
            </div>


            <div className="card-footer text-primary fw-bold p-3">{message}</div>
          </form>
        </div>
      </div>
    </>
  )
}