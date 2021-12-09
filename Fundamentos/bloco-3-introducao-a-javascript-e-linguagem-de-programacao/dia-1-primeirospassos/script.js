const base = 5;
let height = 8;
const area = base * height ;
perimeter = base + base + height + height;
const currentHour=22;
let message = '';
if(currentHour>=22){
  message=("Não deveríamos comer nada, é hora de dormir");
}
if(currentHour >=18 && currentHour <22){
  message=("Rango da noite, vamos jantar");
}
if(currentHour >=14 && currentHour <18){
  message=("Vamos fazer um bolo pro café da tarde?");
}
if(currentHour >=11 && currentHour <= 14){
  message=("Hora do almoço!");
}
if(currentHour < 4 && currentHour <= 11){
  message=("Hmm, cheiro de café recém passado");
}
console.log(message);
