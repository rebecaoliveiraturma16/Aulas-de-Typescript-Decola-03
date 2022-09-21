class Funcionario{
    
    nome: string = 'Usuario';
    ri: string = '1234';
    cpf: string = '123.123.123.-34'
    
    constructor(parametroNome: string, parametroRi: string, parametroCpf: string){
        this.nome = parametroNome;
        this.ri = parametroRi;
        this.cpf = parametroCpf;
        console.log(`Funcionário ${this.nome} cadastrado com sucesso`);
    }

}

export default Funcionario; 
