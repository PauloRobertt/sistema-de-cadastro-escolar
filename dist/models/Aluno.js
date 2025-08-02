"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _bcrypt = require('bcrypt'); var _bcrypt2 = _interopRequireDefault(_bcrypt);

 class Aluno extends _sequelize.Model {
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

      sobrenome: {
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

      idade: {
        type: _sequelize2.default.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Idade precisa ser um número inteiro!',
          },
        },
      },

      foto: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },

    }, {
      sequelize,
    });

    return this;
  }

  static associate(models) {
    this.hasMany(models.Photo, { foreignKey: 'aluno_id' });
  }
} exports.default = Aluno;
