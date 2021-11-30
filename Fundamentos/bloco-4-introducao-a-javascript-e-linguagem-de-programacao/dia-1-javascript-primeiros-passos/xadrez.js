let bispo = "Movimento nas diagonais";
let peão = "Movimento para frente";
let cavalo = "Movimento em L";
let rainha = "Movimentos na horizontal e vertical";
let rei = "Um movimento para cada lado";
let peça ="REI";

switch(peça.toLowerCase()){

    case 'bispo':
    console.log(bispo);
    break;

    case 'peao':
    console.log(peao);
    break;

    case 'rainha':
    console.log(rainha);
    break;

    case 'rei':
    console.log(rei);
    break;

    case 'cavalo':
    console.log(cavalo);
    break;

    default:
        console.log("Valos não identificado;")
}