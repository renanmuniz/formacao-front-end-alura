class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    _saldo = 0; // Não existe campo privado no js ainda, então por "convenção" dos devs,
                //denomina-se o "_" (underline) como sinal de que o campo é privado e que você não deveria acessar ele diretamente.

    sacar(valor) {
        if(valor > this._saldo) {
            console.log("Saldo insuficiente para saque.");
            return;
        }
        this._saldo -= valor;
        return valor;
    }

    depositar(valor) {
        if(valor <= 0) {
            console.log("Valor inválido.");
            return;
        }        
        this._saldo += valor;       
        return valor;
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

console.log(cliente1);
console.log(cliente2);

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(200);
contaCorrenteRicardo.depositar(-1);

const valorSacado = contaCorrenteRicardo.sacar(150);
console.log("Saque realizado de R$" + valorSacado);

console.log(contaCorrenteRicardo);



