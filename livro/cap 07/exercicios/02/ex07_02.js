const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const frase = frm.idFrase.value.toUpperCase()

    if (frase.indexOf(" ") == -1) {
        alert("Informe, por favor, uma frase")
        frm.idFrase.focus()
        return
    }

    const fraseArr = frase.replace(/ /g, "")
    const tam = fraseArr.length

    let iguais = true

    for (let i = 0; i < tam / 2; i++) {
        if (fraseArr[i] != fraseArr[tam - 1 - i]) {
            iguais = false
            break
        }
    }

    if (iguais) {
        resp.innerText = `${frase} é um Palíndromo`
    } else {
        resp.innerText = `${frase} Não é um Palíndromo`
    }
})