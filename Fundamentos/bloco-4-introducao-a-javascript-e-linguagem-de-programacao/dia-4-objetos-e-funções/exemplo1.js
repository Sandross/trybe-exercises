let player = {
    name:'Marta',
    LastName:'Silva',
    age:34, 
    bestInTheWorld:[2006, 2007, 2008, 2009, 2010, 2018],
    medals:{
        golden:2, 
        silver: 3
    }
};
console.log('A jogadora' + ' ' + player.name + ' ' + 'tem' +' '+ player.age + '  ' +'anos de idade')
console.log('A jogadora' + ' ' + player.name +  ' ' + 'foi eleita a melhor do mundo por 6 vezes:' + player.bestInTheWorld + '.')
console.log('A jogadora possui' + ' ' + player.medals.golden +  ' medalhas de ouro' +' '+ 'e'  + ' ' + player.medals.silver  + ' medalhas de prata')