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

for (let chave in cliente) {
    let tipo = typeof cliente[chave];
    if(tipo !== "object" && tipo !== "function"){
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
}