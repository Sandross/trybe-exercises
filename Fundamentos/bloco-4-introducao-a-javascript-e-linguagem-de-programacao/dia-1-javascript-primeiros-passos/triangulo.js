let anguloa = 50;
let angulob = 50;
let anguloc = 82;

let angulos = anguloa + angulob + anguloc;
let angulospositivos = anguloa > 0 && angulob > 0 && anguloc> 0 ;

if (angulospositivos){
    if(angulos === 180);
   console.log("True"); 
}
else if (angulospositivos <180){
    if(angulos < 180);
    console.log("False");
}
else{
    console.log("Angulo inválido");
}