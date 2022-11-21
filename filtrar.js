const clientes =  require("./clientes.json");

function filterApartSemComplemento(clientes){
    return clientes.filter((cliente) => {
        return (cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento"));
    });
}

const filtrados = filterApartSemComplemento(clientes);

console.log(filtrados);