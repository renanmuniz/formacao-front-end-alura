console.log(`Trabalhando com Listas`);

const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio De Janeiro`;

console.log("Destinos possíveis");
// console.log(salvador);
// console.log(saoPaulo);
// console.log(rioDeJaneiro);

// -----------------------------

const lisaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`    
);

lisaDestinos.push(`Curitiba`);
console.log(lisaDestinos);

lisaDestinos.splice(1,1) //Começa a contar do zero.
console.log(lisaDestinos);
console.log(lisaDestinos[1]);