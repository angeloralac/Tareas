//noprotect

/*

Pasos para determinar signo zodiacal del usuario

1. Solicitamos dia
2. Solicitamos mes

Determinar signo Zodiacal

1. Evaluar mes introducido
2. Evaluar día introducido
5. Determinar a que signo zodiacal pertenece el valor de mes
6. Determinar a que signo zodiacal pertenece el valor de dia
7. Mostrar signo zodiacal


*/

var dia = prompt("ingrese el dia")
var mes = prompt ("ingrese el mes")

if(mes == 1){
  if(dia <= 20){
    alert("Es Capricornio");
  }
  if(dia >=21){
    alert("Es Acuario");
  }
}

if(mes == 2){
  if(dia <= 19){
    alert("Es Acuario");
  }
  if(dia >=20){
    alert("Es Piscis");
  }
}

if(mes == 3){
  if(dia <= 19){
    alert("Es Piscis");
  }
  if(dia >=20){
    alert("Es Aries");
  }
}

if(mes == 4){
  if(dia <= 19){
    alert("Es Aries");
  }
  if(dia >=21){
    alert("Es Tauro");
  }
}

if(mes == 5){
  if(dia <= 19){
    alert("Es Tauro");
  }
  if(dia >=21){
    alert("Es Geminis");
  }
}

if(mes == 6){
  if(dia <= 19){
    alert("Es Geminis");
  }
  if(dia >=21){
    alert("Es Cancer");
  }
}

if(mes == 7){
  if(dia <= 21){
    alert("Es Cancer");
  }
  if(dia >=23){
    alert("Es Leo");
  }
}

if(mes == 8){
  if(dia <= 23){
    alert("Es Leo");
  }
  if(dia >=24){
    alert("Es Virgo");
  }
}

if(mes == 9){
  if(dia <= 22){
    alert("Es Virgo");
  }
  if(dia >=23){
    alert("Es Libra");
  }
}

if(mes == 10){
  if(dia <= 23){
    alert("Libra");
  }
  if(dia >=24){
    alert("Es Escorpio");
  }
}

if(mes == 11){
  if(dia <= 22){
    alert("Es Escorpio");
  }
  if(dia >=23){
    alert("Es Sagitario");
  }
}

if(mes == 12){
  if(dia <= 21){
    alert("Es Sagitario");
  }
  if(dia >=22){
    alert("Es Capricornio");
  }
}
