"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _Userjs = require('../models/User.js'); var _Userjs2 = _interopRequireDefault(_Userjs);

exports. default = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      errors: ['Token não enviado!'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const tokenVerify = _jsonwebtoken2.default.verify(token, process.env.TOKEN_SECRET);
    const { id, emailBody } = tokenVerify;

    req.userID = id;
    req.userEmail = emailBody;

    const usuarioEncontrado = await _Userjs2.default.findOne({
      where: {
        id: req.userID,
        email: req.userEmail,
      },
    });

    if (!usuarioEncontrado) {
      return res.status(401).json({
        errors: ['Token invalido ou expirado'],
      });
    }

    return next();
  } catch (e) {
    res.status(401).json({
      errors: ['Token invalido ou expirado!'],
    });
  }
};
