import Sequelize from 'sequelize';
import databaseConfig from '../config/database.cjs';
import Aluno from '../models/Aluno.js';

const models = [Aluno];
const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
