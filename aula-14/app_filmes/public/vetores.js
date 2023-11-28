const nomes = ["Ana", "Carlos", "Pedro", "Maria"]
nomes.push("Rodrigo")

console.log("Lista de Nomes");
console.log("-".repeat(40));

for (const nome of nomes) {
    console.log(nome);
}

const listaNomesMaiusc = nomes.map(nome => nome.toUpperCase)
console.log(listaNomesMaiusc);

const clientes = [
    { nome: "Luiza Costa", idade: 35 },
    { nome: "Marcelo Fernandes", idade: 29 },
    { nome: "Juliana Matos", idade: 27 }
]

console.log("Lista de Clientes");
console.log("-".repeat(40));

for (const cliente of clientes) {
    console.log(`${cliente.nome} - ${cliente.idade} anos`);
}