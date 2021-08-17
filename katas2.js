// comece a criar a sua função add na linha abaixo
function add (a, b) {    
        
    return a + b
     
    
}
// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply (a, b) {
    
    let total = 0

    for(let i = 1; i <= a; i++) {
        total = add(b, total)

    }
       
    return total
}
// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power (x, n) {

    let total = 1
    

    for(let i = 1; i <= n; i++) {
        total = multiply(x, total)
        

    }

    return total
}
// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial (y) {
    
    let total = y
    
    for(let i = 1; i < y; i++) {
        total = multiply(i,total)
        
    }

    return total
}
//descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

function fibonacci (n) {
    let numero = []    
    numero[0] = 0
    numero[1] = 1
    
    for (let i = 2; i <= n; i++) {
         
        numero[i] = (numero[i-2]+numero[i-1])
        resultado = numero[n]

    }
   
    return resultado

}
//descomente a linha seguinte para testar sua função
console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');