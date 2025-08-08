"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _bcrypt = require('bcrypt'); var _bcrypt2 = _interopRequireDefault(_bcrypt);

 class User extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo nome não pode ficar vazio!',
          },
          len: {
            args: [3, 255],
            msg: 'Campo nome deve ter entre 3 e 255 caracteres!',
          },
        },
      },

      email: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        unique: {
          msg: 'E-mail já em uso!',
        },
        validate: {
          isEmail: {
            msg: 'E-mail invalido!',
          },
        },
      },

      password_hash: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },

      password: {
        type: _sequelize2.default.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: 'Senha deve ter entre 6 a 50 caracteres!',
          },
        },
      },
    }, {
      sequelize,
    });

    this.addHook('beforeSave', (async (user) => {
      if (user.password) {
        user.password_hash = await _bcrypt2.default.hash(user.password, 8);
      }
    }));

    return this;
  }

  async passwordIsValid(password) {
    return await _bcrypt2.default.compare(password, this.password_hash);
  }
} exports.default = User;
