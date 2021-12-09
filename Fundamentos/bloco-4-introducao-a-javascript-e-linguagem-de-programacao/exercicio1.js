let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente:'Sim'
  };
  let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell s four color comig ',
    nota: 'O último Macpatinhas',
    recorrente:'Sim'
  };
  for (let key in info){
    if(key === 'recorrente' && info.recorrente==='Sim' && info2.recorrente==='Sim'){
    console.log('Ambos recorrentes')
    }
    else{  
    console.log(info[key] + ' e ' + info2[key]);
    }   
    }