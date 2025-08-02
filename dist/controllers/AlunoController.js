"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Alunojs = require('../models/Aluno.js'); var _Alunojs2 = _interopRequireDefault(_Alunojs);
var _Photojs = require('../models/Photo.js'); var _Photojs2 = _interopRequireDefault(_Photojs);
class AlunoController {
  async index(req, res) {
    try {
      const alunos = await _Alunojs2.default.findAll({
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade'],
        order: [['id', 'DESC'], [_Photojs2.default, 'id', 'DESC']],
        include: [{
          model: _Photojs2.default,
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

      const aluno = await _Alunojs2.default.findByPk(req.params.id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade'],
        order: [['id', 'DESC'], [_Photojs2.default, 'id', 'DESC']],
        include: [{
          model: _Photojs2.default,
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
      const novoAluno = await _Alunojs2.default.create(req.body);
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

      const aluno = await _Alunojs2.default.findByPk(req.params.id);

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

      const aluno = await _Alunojs2.default.findByPk(req.params.id);

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

exports. default = new AlunoController();
