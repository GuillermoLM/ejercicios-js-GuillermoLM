// Rellena la matriz como la siguiente utilizando bucles for anidados
 let matriz = [
   [],
   [],
   []
 ];

for(var i = 0; i<3; i++) {
    for(var j=0; j<3; j++) {
        matriz[i][j] = i + '' + j
    }
}
console.log(matriz);