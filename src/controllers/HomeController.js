import Aluno from '../models/Aluno.js';

class HomeController {
  async index(req, res) {
    console.log('Controller');
    const novoAluno = await Aluno.create({
      nome: 'TesteNome',
      sobrenome: 'TesteSobrenome',
      email: 'TesteEmail',
      idade: 23,
      foto: 'URLFoto',
    });
    console.log(novoAluno);

    res.json(novoAluno);
  }
}

export default new HomeController();
