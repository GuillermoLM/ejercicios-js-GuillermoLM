let gente = [
  {nombre:'Jamiro', edad:45},
  {nombre: 'Juan', edad: 35},
  {nombre: 'Paco', edad:34},
  {nombre: 'Pepe', edad:14},
  {nombre: 'Pilar', edad:24},
  {nombre: 'Laura', edad:24},
  {nombre: 'Jenny', edad:10},
]

// crea un array con la gente que empieza por J
let peopleStartJ = [];
for (let obj of gente) {
  if (obj.nombre[0] == "J") {
    peopleStartJ.push(obj);
  }
}
console.log(peopleStartJ);
