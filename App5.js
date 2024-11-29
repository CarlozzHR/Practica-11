// Metodo get y set
class cuentaBancaria{
    constructor(saldo){
        this._saldo = saldo;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(cantidad){
        if (cantidad >=0) {
            this._saldo = cantidad;
        }else{
            console.log(`Saldo: '${cantidad}', no se puede establecer un saldo negativo`)
        }
    }
}

const cuenta = new cuentaBancaria(1200)

console.log(`Saldo inicial: ${cuenta.saldo}`)

cuenta.saldo = 600
console.log(`Movimientos: ${cuenta.saldo}`)

cuenta.saldo = -300