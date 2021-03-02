export class ContaCorrente {
    agencia;
    cliente;

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

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}