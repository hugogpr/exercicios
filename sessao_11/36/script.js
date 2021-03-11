class ContaBancaria{
    constructor(saldo){
        this.saldo = saldo;
    }
    get getSaldo(){
        return this.saldo;
    }
    set setSaldo(saldo){
        this.saldo = saldo;
    }

    deposito(valor){
        this.saldo += valor;
    }
    saque(valor){
        this.saldo -= valor;
    }
}

let conta = new ContaBancaria(0);

console.log(conta.getSaldo);
console.log('\n');

conta.deposito(5000);
console.log(conta.getSaldo);
console.log('\n');

conta.saque(1000);
console.log(conta.getSaldo);