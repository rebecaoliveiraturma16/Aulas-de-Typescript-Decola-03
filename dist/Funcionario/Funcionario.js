"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Funcionario {
    nome = 'Usuario';
    ri = '1234';
    cpf = '123.123.123.-34';
    constructor(parametroNome, parametroRi, parametroCpf) {
        this.nome = parametroNome;
        this.ri = parametroRi;
        this.cpf = parametroCpf;
        console.log(`Funcionário ${this.nome} cadastrado com sucesso`);
    }
}
exports.default = Funcionario;
