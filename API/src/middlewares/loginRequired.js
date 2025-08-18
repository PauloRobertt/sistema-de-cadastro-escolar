import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export default async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      errors: ['Token não enviado!'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const tokenVerify = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, emailBody } = tokenVerify;

    req.userID = id;
    req.userEmail = emailBody;

    const usuarioEncontrado = await User.findOne({
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
