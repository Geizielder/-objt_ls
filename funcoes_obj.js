const cliente = {
    nome: "Pedro",
    idade: 26,
    email: "pedro@empresa.com",
    telefone: ["11555555333", "11555555444"],
    saldo: 200,
    efetuaPagamanto: function (valor) {
        if (valor > this.saldo){
            console.log("Saldo insuficiente");
        }else{
            this.saldo -= valor;
            console.log(`Pagamaento realizado. Novo saldo é: ${this.saldo}`);
        }
    }
}


cliente.efetuaPagamanto(100);