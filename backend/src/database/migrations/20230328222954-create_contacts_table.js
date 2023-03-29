'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('contacts', { 
      id:{
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      name:{
        type: Sequelize.STRING,
        allowNull: false
      },
      tel:{
        type: Sequelize.STRING,
        allowNull: false
      },
      email:{
        type: Sequelize.STRING,
        allowNull: false
      },
      userId:{
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false 
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }

    });

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('contacts');
  }
};
