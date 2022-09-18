//sub - está engessada
function escreveConsole(): void{
    console.log ("Lute como uma garota!");
}
//function - está livre - dirigido à abstração
function escreve(): string{
    return "Lute como uma garota!";
}

escreveConsole();
console.log (`Quem é minha campeã: ${escreve()}`);


// Existem duas categorias de funções.
// Built-in functions - Funções nativas do JS 
// User-defined functions - Funções definidas pelo usuário

let a = 2;
for(let x = 0; x <= 10; x++){ 
console.log(a, 'x', x, ' = ', a*x); 
}
console.log("--------------");

let b = 3;
for(let x = 0; x <= 10; x++){ 
console.log(b, 'x', x, ' = ', b*x); 
}
console.log("--------------");

let c = 4;
for(let x = 0; x <= 10; x++){ 
console.log(c, 'x', x, ' = ', c*x); 
}
console.log("--------------");

let d = 5;
for(let x = 0; x <= 10; x++){ 
console.log(d, 'x', x, ' = ', d*x); 
}
console.log("--------------");

let e = 6;
for(let x = 0; x <= 10; x++){ 
console.log(e, 'x', x, ' = ', e*x); 
}


