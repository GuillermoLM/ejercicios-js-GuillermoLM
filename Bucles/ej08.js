// Crea un bucle  que imprima por consola números del 1 al 100
// pero que los múltiplos de 3 imprima GEEKS en lugar del numero
// y los múltiplos de 5 imprima HUBS.
// Además los múltiplos de 3 y 5 ha de imprimir GEEKSHUBS
function multiple(valor, multiple)
        {
            resto = valor % multiple;
            if(resto==0)
                return true;
            else
                return false;
        }
 
        var myArray=[];

        for(var i=1;i<=100;i++)
        {
            if(i){
                myArray.push(i);
            }
            if(multiple(i,3)){
                myArray.pop(i);
                myArray.push("GEEKS");
            }
            if(multiple(i,5)){
                myArray.pop(i);
                myArray.push("HUBS");
            }
            if((multiple(i,3)) && (multiple(i,5))){
                myArray.pop(i);
                myArray.push("GEEKHUBS");
            }
        }

        console.log(myArray);