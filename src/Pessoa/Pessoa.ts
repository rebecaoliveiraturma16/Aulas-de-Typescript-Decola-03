class Pessoa{
    nome: string = 'Usuario';
    idade: number = 0;


    constructor(parametroNome: string, parametroIdade:number ){
        this.nome = parametroNome;
        this.idade = parametroIdade;
        console.log(`A pessoa ${this.nome} de Idade ${this.idade} está andando`);
    }
}

export default Pessoa;
