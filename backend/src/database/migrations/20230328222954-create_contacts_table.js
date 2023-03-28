'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('contacts', { 
      
    });

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('contacts');
  }
};
