/* const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(3, (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
});


const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
};

const isOdd = (number) => {
  if ((number % 2) > 0) {
    console.log(number, 'is odd');
  }
};

repeat(3, isEven); // Testa quais números serão pares;
repeat(3, isOdd); // Testa quais números serão ímpares; */
/* const carrinho = [10, 30, 20, 40];

const desconto10reais = (total) => {
    return 10;
}

const desconto20reais = (total) => {
    return 20;
}

const desconto10porcento = (total) => {
    return total * 0.1;
}

const desconto5porcento = (total) => {
    // if
    return total * 0.05;
}

const checkout = (carrinho, desconto) => {
    let total = 0;
    for (const item of carrinho) {
        total = total + item;
    }
    total = total - desconto(total);
    return total;
}
 */
// const total = checkout(carrinho, desconto5porcento);
// console.log(total);

/* const criaDesconto = (porcentagem) => {
    const calculaDesconto = (xablau) => {
        return xablau * porcentagem/100;
    }
    return calculaDesconto;
}
 */
// const desconto15porcento = criaDesconto(15);
// const desconto20porcento = criaDesconto(20);
/* const employeeGenerator = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return { fullName, email: `${email}@trybe.com` };
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  };
  return employees;
};

console.log(newEmployees(employeeGenerator)); */

/* const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, number) ? ` The number is ${number}, lucky day, you won!` : `The number is ${number}, try Again!`;
};

console.log(lotteryResult(2, numberChecker)); */

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const compareAnswers = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
};

const countPoints = (rightAnswers, studentAnswers, action) => {
  let contador = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const actionReturn = action(rightAnswers[index], studentAnswers[index]);
    contador += actionReturn;
  }
  return `Resultado final: ${contador} pontos`;
};

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));