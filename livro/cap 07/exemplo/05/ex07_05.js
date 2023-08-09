const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const funcionario = frm.idFuncionario.value

    const partes = funcionario.split(" ")
    const tam = partes.length
    let email = ""

    for(let i = 0; i < tam - 1; i++) {
        email += partes[i].charAt(0)
    }

    email += partes[tam - 1] + "@empresa.com.br"

    resp.innerText = `E-mail: ${email.toLowerCase()}`
})