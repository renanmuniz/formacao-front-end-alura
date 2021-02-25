console.log(`Trabalhando com Condicionais`);

const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`
);

const idadeComprador = 18;
const acompanhada = true;
const temPassagemComprada = true;

console.log("Destinos possíveis");
console.log(listaDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDestinos.splice(1, 1); //Começa a contar do zero.
// } else if (acompanhada) {
//     console.log("Comprador está acompanhado");
//     listaDestinos.splice(1, 1); //Começa a contar do zero.
// } else {
//     console.log("Comprador menor de idade e não está acompanhado.");
// }

if (idadeComprador >= 18 || acompanhada) {
    console.log("Comprador maior de idade ou está acompanhado.");
    listaDestinos.splice(1, 1); //Começa a contar do zero.
} else {
    console.log("Comprador menor de idade e não está acompanhado.");
}

console.log("Embarcando: \n\n");
if(idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa Viagem")
} else {
    console.log("Você não pode embarcar")
}

console.log(listaDestinos);