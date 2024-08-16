
//en esta funcion recibiremos un parametro llamado numero el cual se validara si es par o impar

const par_o_impar = function(numero){

    if(numero % 2 === 0){
       return  "el numero ingresado es par " + numero 
    } else{
       return  "el numero ingresado es impar " + numero 
    }

}

let resultado = par_o_impar(3);
   console.log(resultado);

 