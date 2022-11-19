const cliente = {
    nome: "Geizielder",
    idade: 39,
    cpf: "11122233342",
    email: "geizielder@gmail.com"
}

console.log(`O cliente é ${cliente["nome"]} e esssa pessoa tem ${cliente["idade"]}`);

const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
});
