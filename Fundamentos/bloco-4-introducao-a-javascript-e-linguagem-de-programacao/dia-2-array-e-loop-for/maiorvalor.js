let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiornumero = [0];//acrescentar a posição 0
for(let index=1; index<numbers.length; index+=1){
  if  (numbers[index]> maiornumero)
  maiornumero= numbers[index];
}
console.log(maiornumero);
//começar pela 1 posiçao(adicionei a 0)