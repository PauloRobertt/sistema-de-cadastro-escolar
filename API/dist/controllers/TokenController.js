"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Userjs = require('../models/User.js'); var _Userjs2 = _interopRequireDefault(_Userjs);
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

class TokenController {
  async store(req, res) {
    try {
      const { email: emailBody, password: passwordBody } = req.body;

      if (!emailBody || !passwordBody) {
        return res.status(400).json({
          errors: ['Credenciais invalidas!', '1'],
        });
      }

      const user = await _Userjs2.default.findOne({ where: { email: emailBody } });
      if (!user) {
        return res.status(401).json({
          errors: ['Credenciais invalidas!', '2'],
        });
      }

      if (!(await user.passwordIsValid(passwordBody))) {
        return res.status(401).json({
          errors: ['Credenciais invalidas!', '3'],
        });
      }

      const { id } = user;

      const token = _jsonwebtoken2.default.sign({ id, emailBody }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });

      res.json(token);
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((erros) => { return erros.message; }),
      });
    }
  }
}

exports. default = new TokenController();
