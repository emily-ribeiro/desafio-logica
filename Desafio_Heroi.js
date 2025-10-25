class BaseHeroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    ataque() {
        switch (this.tipo) {
            case 'guerreiro':
                return 'Atacou com espada';
            case 'mago':
                return 'Atacou com magia';
            case 'monge':
                return 'Atacou com artes marciais';
            case 'ninja':
                return 'Atacou com shuriken';
            default:
                return 'Tipo desconhecido';
        }
    }
}
const guerreiro = new BaseHeroi('Joao', 25, 'guerreiro');
console.log(guerreiro.ataque());
const mago = new BaseHeroi('Maria', 30, 'mago');
console.log(mago.ataque());
const monge = new BaseHeroi('Maria', 30, 'monge');
console.log(monge.ataque());
const ninja = new BaseHeroi('Akira', 20, 'ninja'); 
console.log(ninja.ataque());