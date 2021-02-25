console.log(`\nTrabalhando com Loops`);

const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`
);

const idadeComprador = 18;
const acompanhada = true;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\nDestinos possíveis");
console.log(listaDestinos);

const podeComprar = (idadeComprador >= 18 || acompanhada == true); 

let contador = 0;

while (contador < listaDestinos.length) {
    if(listaDestinos[contador] == destino){
        console.log("Destino existe.");
        //break;
    }else{
        console.log("Destino não existe.");
    }
    contador++;
}
