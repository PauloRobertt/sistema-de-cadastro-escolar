import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Campo nome não pode ficar vazio!',
            },
            len: {
              args: [3, 255],
              msg: 'Campo nome deve ter entre 3 e 255 caracteres!',
            },
            is: {
              args: /^[A-Za-zÀ-ÖØ-öø-ÿ\s]{6,}$/,
              msg: 'Campo nome deve conter apenas letras!',
            },
          },
        },

        sobrenome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Campo sobrenome não pode ficar vazio!',
            },
            len: {
              args: [3, 255],
              msg: 'Campo sobrenome deve ter entre 3 e 255 caracteres!',
            },
            is: {
              args: /^[A-Za-zÀ-ÖØ-öø-ÿ\s]{6,}$/,
              msg: 'Campo sobrenome deve conter apenas letras!',
            },
          },
        },

        email: {
          type: Sequelize.STRING,
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
          type: Sequelize.INTEGER,
          defaultValue: '',
          validate: {
            isInt: {
              msg: 'Idade precisa ser um número inteiro!',
            },
          },
        },

        foto: {
          type: Sequelize.STRING,
          defaultValue: '',
        },
      },
      {
        sequelize,
      },
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Photo, { foreignKey: 'aluno_id' });
  }
}
