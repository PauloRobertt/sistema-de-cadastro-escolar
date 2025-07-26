import Aluno from '../models/Aluno.js';
import Photo from '../models/Photo.js';
class AlunoController {
  async index(req, res) {
    try {
      const alunos = await Aluno.findAll({
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade'],
        order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
        include: [{
          model: Photo,
          attributes: ['url', 'filename'],
        }],
      });
      res.status(200).json(alunos);
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((erros) => { return erros.message; }),
      });
    }
  }

  async show(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado!'],
        });
      }

      const aluno = await Aluno.findByPk(req.params.id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade'],
        order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
        include: [{
          model: Photo,
          attributes: ['url', 'filename'],
        }],
      });

      if (!aluno) {
        return res.status(400).json({
          errors: ['Usuario não encontrado!'],
        });
      }

      res.status(200).json(aluno);
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((erros) => { return erros.message; }),
      });
    }
  }

  async store(req, res) {
    try {
      const novoAluno = await Aluno.create(req.body);
      res.status(200).json(novoAluno);
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((erros) => { return erros.message; }),
      });
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado!'],
        });
      }

      const aluno = await Aluno.findByPk(req.params.id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não encontrado!'],
        });
      }

      const alunoAtualizado = await aluno.update(req.body);
      res.status(200).json({ alunoAtualizado });
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((erros) => { return erros.message; }),
      });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado!'],
        });
      }

      const aluno = await Aluno.findByPk(req.params.id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não encontrado!'],
        });
      }

      await aluno.destroy();
      res.json(aluno);
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((erros) => { return erros.message; }),
      });
    }
  }
}

export default new AlunoController();
