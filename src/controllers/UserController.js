import User from '../models/User.js';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      res.status(200).json(novoUser);
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((erros) => { return erros.message; }),
      });
    }
  }
}

export default new UserController();
