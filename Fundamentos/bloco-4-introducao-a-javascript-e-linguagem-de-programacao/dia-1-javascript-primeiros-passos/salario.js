let salario = 3000;
if(salario <= 1556.94){
    salario = salario -(salario*0.08);
     }
     else if (salario >=1556.95 && salario <= 2594.92){
         salario = salario -(salario*0.09)
         }
         else if (salario >=2594.93 && salario <= 5189.92){
             salario = salario - (salario*0.11)
         }
         else if (salario>5189.82){
             salario = salario - 570.88
         }
         
if(salario<=1903.98){
    console.log("Você está isento, seu salário é" + salario);
}
else if (salario >=1903.00 && salario <=2826.65){
    salario = (salario+142.80)-(salario * 0.075)
    console.log("Seu salário após deduções é:" + salario)
}
else if (salario >= 2828.66 && salario <=3751.05){
    salario = (salario+354.80)-(salario*0.15)
    console.log("Seu salário após deduções é " + salario)
}
else if (salario >=3751.06 && salario <=4664.68){
    salario = (salario+ 636.13)-(salario*0.225)
    console.log("Seu salário após deduções é:" + salario)
}
else if (salário>4664.68){
    salario=(salario+869.36)-(salario * 0.275)
    console.log("Seu salário após deduções é:" + salario)
}
