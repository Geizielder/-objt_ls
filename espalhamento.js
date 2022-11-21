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

function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente(...cliente.telefone);


const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
}

console.log(encomenda);