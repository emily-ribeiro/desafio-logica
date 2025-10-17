// Declação de variaveis

let qtdVictories = 500;

// Declação de constantes

switch (true) {
    case (qtdVictories <= 10):
        console.log(`O Heroi tem o saldo ${qtdVictories} está no nível de Ferro`);
        break;
    case (qtdVictories <= 20):
        console.log(`O Heroi tem o saldo ${qtdVictories} está no nível de Bronze`);
        break;
    case (qtdVictories <= 50):
        console.log(`O Heroi tem o saldo ${qtdVictories} está no nível de Prata`);
        break;
    case (qtdVictories <= 80):
        console.log(`O Heroi tem o saldo ${qtdVictories} está no nível de Ouro`);
        break;
    case (qtdVictories <= 90):
        console.log(`O Heroi tem o saldo ${qtdVictories} está no nível de Diamante`);
        break;
    case (qtdVictories <= 100):
        console.log(`O Heroi tem o saldo ${qtdVictories} está no nível de lendário`);
        break;
    default:
        console.log("Imortal");
}
