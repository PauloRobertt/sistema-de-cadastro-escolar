import User from '../models/User.js';
import jwt from 'jsonwebtoken';

class TokenController {
  async store(req, res) {
    try {
      const { email: emailBody, password: passwordBody } = req.body;

      if (!emailBody || !passwordBody) {
        return res.status(400).json({
          errors: ['Credenciais invalidas!'],
        });
      }

      const user = await User.findOne({ where: { email: emailBody } });
      if (!user) {
        return res.status(401).json({
          errors: ['Credenciais invalidas!'],
        });
      }

      if (!(await user.passwordIsValid(passwordBody))) {
        return res.status(401).json({
          errors: ['Credenciais invalidas!'],
        });
      }

      const { id } = user;

      const token = jwt.sign({ id, emailBody }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });

      res.json({
        token: token,
        user: {
          userID: id,
          userEmail: emailBody,
          userNome: user.nome,
        },
      });
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((erros) => {
          return erros.message;
        }),
      });
    }
  }
}

export default new TokenController();
