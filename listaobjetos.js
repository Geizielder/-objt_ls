const cliente = {
    nome: "Pedro",
    idade: 26,
    email: "pedro@empresa.com",
    telefone: ["11555555333", "11555555444"],
}

cliente.enderecos = [
    {
        rua: "Rua Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",      
    },
];

cliente.enderecos.push({
    rua: "Rua Joseph Lader",
    numero: 404,
    apartamento: false,
})

// console.log(cliente.enderecos);

const listaApartamentos = cliente.enderecos.filter((endereco) => endereco.apartamento === true);

console.log(listaApartamentos);