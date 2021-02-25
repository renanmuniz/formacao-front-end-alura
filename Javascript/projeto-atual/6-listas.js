console.log(`Trabalhando com Listas`);

const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio De Janeiro`;

console.log("Destinos possíveis");
// console.log(salvador);
// console.log(saoPaulo);
// console.log(rioDeJaneiro);

// -----------------------------

const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`    
);

listaDestinos.push(`Curitiba`);
console.log(listaDestinos);

listaDestinos.splice(1,1) //Começa a contar do zero.
console.log(listaDestinos);
console.log(listaDestinos[1]);