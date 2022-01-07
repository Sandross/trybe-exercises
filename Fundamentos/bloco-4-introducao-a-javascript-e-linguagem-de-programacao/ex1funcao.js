let palindrome = ''; 
function verificaPalindrome(nome){
    for(index=nome.length -1 ; index<=0; index-=1){
        palindrome += nome[index];
    }
        if(palindrome === nome){
        return true;
        }
        else{
        return false;
        }
    }
          
   console.log(verificaPalindrome('arara'))
   