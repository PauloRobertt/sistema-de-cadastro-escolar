const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'TesteSeed1',
          email: 'TesteSeed1@hotmail.com',
          password_hash: await bcrypt.hash('testeSeed', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'TesteSeed2',
          email: 'TesteSeed2@hotmail.com',
          password_hash: await bcrypt.hash('testeSeed', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'TesteSeed3',
          email: 'TesteSeed3@hotmail.com',
          password_hash: await bcrypt.hash('testeSeed', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ], {});
  },

  async down() { },
};
