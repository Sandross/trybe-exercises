let n=5;
let simbolo='*';
let linha ='';
let posição = n;

for(let index=0; index<n; index+=1){
    for(index2= 0; index2<=n; index2+=1){
        
        if(index2<posição){
       linha = linha + " "   
        }else{
           linha += simbolo; 
        }
         }
    console.log(linha)
    linha= '';
    posição = posição -1
}
