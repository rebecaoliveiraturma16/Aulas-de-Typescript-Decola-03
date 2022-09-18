const nome: string = "Rebeca Oliveira";
const idade: number = 10;
const statusUser: Number = 1;

//statusUser = 1 - usuario; 2 - empresa; 3 - adm
//switch case

switch(statusUser){
    case 1 :
        console.log("Status: Usuario");
        break;
    case 2 :
        console.log("Status: empresa");
        break;
    case 3 :
            console.log("Status: adm");
        break;
    default:
        console.log("Status: Código Inválido");
}

if (idade <= 2){
    console.log("Bebê");
} else if (idade > 2 && idade <= 11) {
    console.log("Criança");
} else if (idade > 11 && idade <= 11) {
    console.log("Adolescente");
} else if (idade > 19 && idade <= 50) {
    console.log("Adulto");
} else {
    console.log("Idoso")
}


console.log("Bem vindo "+ nome);

const yearFactory: number = 1920;

for (let x: number = yearFactory; x <= new Date (). getFullYear (); x++ ){
    console.log(x, " ");
}
console.log("-------------------------------------------------");
for (let x: number = new Date().getFullYear(); x >= yearFactory; x-= 10 ){
    if (x >= 1990 && x < 2000){
        continue;
    }
    console.log(x, " ");
}
console.log("-------------------------------------------------");

let y = 2;
for(let x = 0; x <= 2; x++){ 
console.log(y, ' x ', x, ' = ', y*x); 
}
console.log ('. \n.\n.')
console.log (y, ' x ', '10', ' = ', y*10);


console.log("-----------------------");

let e = 6;
for(let x = 0; x <= 10; x++){ 
console.log(e, 'x', x, ' = ', e*x); 
}

console.log("-----------------------");


