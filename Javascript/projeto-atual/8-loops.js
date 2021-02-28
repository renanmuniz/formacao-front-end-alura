console.log(`\nTrabalhando com Loops`);

const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`
);

const idadeComprador = 18;
const acompanhada = true;
let temPassagemComprada = false;
const destino = "São Paulo";

console.log("\nDestinos possíveis");
console.log(listaDestinos);

const podeComprar = (idadeComprador >= 18 || acompanhada == true); 

let contador = 0;
let destinoExiste = false;

while (contador < listaDestinos.length) {
    if(listaDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador++;
}

console.log("Destino existe? ",destinoExiste);

if(podeComprar && destinoExiste) {
    console.log("Boa Viagem");
} else {
    console.log("Erro...");
}

destinoExiste = false;
for (let i = 0; i< listaDestinos.length; i++) {
    //console.log(i);
    if(listaDestinos[i] == destino){
        destinoExiste = true;
    }
    console.log("Verificando destino no índice [" + i + "]. Existe: " + destinoExiste);
}
