let gente = [
  {nombre:'Jamiro', edad:45},
  {nombre: 'Juan', edad: 35},
  {nombre: 'Paco', edad:34},
  {nombre: 'Pepe', edad:14},
  {nombre: 'Pilar', edad:24},
  {nombre: 'Laura', edad:24},
  {nombre: 'Jenny', edad:10},
]

// crea un array con la gente mayor de 25 años.
 let greaterThan25 = [];
 for (let obj of gente) {
   if (obj.edad > 25) {
     greaterThan25.push(obj);
   }
 }
 console.log(greaterThan25);