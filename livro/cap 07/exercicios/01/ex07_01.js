const frm = document.querySelector("form")
const respo = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const msg = frm.idMensagem.value

    let resp = ""
    const tam = msg.length

    for (let i = 1; i < tam; i = i + 2) {nnn 
        resp += msg.charAt(i)
    }

    for (let i = 0; i < tam; i = i + 2) {
        resp += msg.charAt(i)
    }

    respo.innerText = resp
})

frm.addEventListener("click", () => {
    if (!frm.checkValidity()) {
        alert("Informe a mensagem criptografada!")
        frm.idMensagem.focus()
    }

    const msg = frm.idMensagem.value

    const tam = msg.length
    const metade = Math.floor(tam / 2)
    let resp = ""

    if (tam % 2 == 0) {
        for (let i = metade; i < tam; i++) {
            resp += msg.charAt(i)
            resp += msg.charAt(i - metade)
        }
    } else {
        for (let i = metade; i < tam - 1; i++) {
            resp += msg.charAt(i)
            resp += msg.charAt(i - metade)
        }
        resp += msg.charAt(i)
    }

    respo.innerText = resp
})