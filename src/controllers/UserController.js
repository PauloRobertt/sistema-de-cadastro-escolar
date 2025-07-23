import User from '../models/User.js';

class UserController {
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
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

      const user = await User.findByPk(req.params.id);

      const { id, nome, email } = user;

      if (!user) {
        return res.status(400).json({
          errors: ['Usuario não encontrado!'],
        });
      }

      res.status(200).json({ id, nome, email });
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((erros) => { return erros.message; }),
      });
    }
  }

  async store(req, res) {
    try {
      const newUser = await User.create(req.body);
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

      const user = await User.findByPk(req.userID);

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

      const user = await User.findByPk(req.userID);

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

export default new UserController();
