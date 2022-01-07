let aprovacao = "aprovada"

switch(aprovacao){
    case "aprovada":
        console.log("Parabéns, você foi aprovada");
        break;

    case "reprovada":
        console.log("Infelizmente você não passou");
        break;
   
    case "lista":
        console.log("Você está na lista de espera");
        break;
        
   default:
       console.log("Valor não identificado");     
}