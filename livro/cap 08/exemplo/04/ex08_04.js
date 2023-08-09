const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const itens = []

frm.rbPizza.addEventListener("click", () => {
    frm.idBebida.className = "oculta"
    frm.idPizza.className = "exibe"
})

frm.rbBebida.addEventListener("click", () => {
    frm.idBebida.className = "exibe"
    frm.idPizza.className = "oculta"
})

frm.idDetalhes.addEventListener("focus", () => {
    if (frm.rbPizza.checked) {
        const pizza = frm.idPizza.value
        const num = pizza == "media" ? 2 : pizza == "grande" ? 3 : 4
        frm.idDetalhes.placeholder = `Até ${num} sabores`
    }
})

frm.idDetalhes.addEventListener("blur", () => {
    frm.idDetalhes.placeholder = ""
})

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    let produto

    if (frm.rbPizza.checked) {
        const num = frm.idPizza.selectedIndex   
        produto = frm.idPizza.options[num].text
    } else {
        const num = frm.idBebida.selectedIndex
        produto = frm.idBebida.options[num].text
    }

    const detalhes = frm.idDetalhes.value
    itens.push(produto + "(" + detalhes + ")")
    resp.innerText = itens.join("\n")

    frm.reset()
    frm.rbPizza.dispatchEvent(new Event("click"))
})