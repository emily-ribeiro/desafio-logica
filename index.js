// Declação de variaveis

let nomeHeroi = "Mulher Maravilha";
let qtdXp = 1000;

// Declação de constantes

switch (nomeHeroi) {
    case qtdXp >= 1000:
        console.log("Ferro");
        break;
    case qtdXp >1.001 && qtdXp <= 2000:
        console.log("Bronze");
        break;
    case qtdXp >2.001 && qtdXp <= 5000:
        console.log("Prata");
        break;
    case qtdXp >5.001 && qtdXp <= 7000:
        console.log("Ouro");
        break;
    case qtdXp >7.001 && qtdXp <= 8000:
        console.log("Platina");
        break;
    case qtdXp >8.001 && qtdXp <= 9000:
        console.log("Ascendente");
        break;
    case qtdXp >9.001 && qtdXp <= 10000:
        console.log("imortal");
        break;
    case qtdXp >10.001:
        console.log("Radiante");
        break;
}
console.log("O herói " + nomeHeroi + " possui " + qtdXp + " pontos de experiência.");