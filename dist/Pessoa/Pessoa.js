"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    nome = 'Usuario';
    idade = 0;
    constructor(parametroNome, parametroIdade) {
        this.nome = parametroNome;
        this.idade = parametroIdade;
        console.log(`A pessoa ${this.nome} de Idade ${this.idade} está andando`);
    }
}
exports.default = Pessoa;
