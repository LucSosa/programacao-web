import { useEffect, useState } from "react"
import { dados } from "../assets/clubes"
import { useForm } from "react-hook-form"

function Principal() {
    const [clubes, setClubes] = useState([])
    const { register, watch } = useForm()

    const listaClubes = clubes.map(clube => (
        <div className="form-check" key={clube.id}>
            <input className="form-check-input" type="radio"
                name="rbClube" {...register("rbClube")} value={clube.url} />
            <label className="form-check-label">
                {clube.nome}
            </label>
        </div>

    ))

    useEffect(() => {
        setClubes(dados)
    }, [])
    return (
        <div className="container" style={{ height: 500 }}>
            <h2 className="mt-4">Qual clube será campeão Brasileiro?</h2>
            <form>
                {listaClubes}
            </form>
            {/* {watch("rbClube") &&
                <>
                    <h6 className="mt-3">Você selecionou:</h6>
                    <img src={watch("rbClube")} width={240} />
                </>
            } */}
            {watch("rbClube") ?
                <>
                    <h6 className="mt-3">Você selecionou:</h6>
                    <img src={watch("rbClube")} width={240} />
                </>
                :
                <h6 className="mt-3">Você ainda não selecionou</h6>
            }
        </div>
    )
}

export default Principal