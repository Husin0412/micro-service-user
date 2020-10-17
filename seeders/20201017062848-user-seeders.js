'use strict';

const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('users', [{
        name: 'Husin',
        profession: "Admin Micro",
        role: "admin",
        email: "husinsandjaya@yopmail.com",
        password: await bcrypt.hash('husin123', 10),
        created_at: new Date(),
        updated_at: new Date
      },
      {
        name: 'Apro Fitria',
        profession: "programer develover",
        role: "student",
        email: "AproFitri@yopmail.com",
        password: await bcrypt.hash('apro123', 10),
        created_at: new Date(),
        updated_at: new Date
      }
    ]);

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};