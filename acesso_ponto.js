const cliente = {
    nome: "Geizielder",
    idade: 39,
    cpf: "11122233342",
    email: "geizielder@gmail.com"
}

console.log(`O cliente é ${cliente.nome} e esssa pessoa tem ${cliente.idade}`);

console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`);
