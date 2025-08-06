"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Userjs = require('../models/User.js'); var _Userjs2 = _interopRequireDefault(_Userjs);

class UserController {
  async index(req, res) {
    try {
      const users = await _Userjs2.default.findAll({ attributes: ['id', 'nome', 'email'] });
      res.status(200).json(users);
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

      const user = await _Userjs2.default.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuario não encontrado!'],
        });
      }

      const { id, nome, email } = user;

      res.status(200).json({ id, nome, email });
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((erros) => { return erros.message; }),
      });
    }
  }

  async store(req, res) {
    try {
      const newUser = await _Userjs2.default.create(req.body);
      const { id, nome, email } = newUser;
      res.status(200).json({ id, nome, email });
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((erros) => { return erros.message; }),
      });
    }
  }

  async update(req, res) {
    try {
      if (!req.userID) {
        return res.status(400).json({
          errors: ['ID não enviado!'],
        });
      }

      const user = await _Userjs2.default.findByPk(req.userID);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuario não encontrado!'],
        });
      }

      const usuarioAtualizado = await user.update(req.body);
      res.status(200).json({ usuarioAtualizado });
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((erros) => { return erros.message; }),
      });
    }
  }

  async delete(req, res) {
    try {
      if (!req.userID) {
        return res.status(400).json({
          errors: ['ID não enviado!'],
        });
      }

      const user = await _Userjs2.default.findByPk(req.userID);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuario não encontrado!'],
        });
      }

      await user.destroy();
      res.json(user);
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((erros) => { return erros.message; }),
      });
    }
  }
}

exports. default = new UserController();
