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

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")){
    console.error("Erro é necessário ter um endereco cadastrado")
}