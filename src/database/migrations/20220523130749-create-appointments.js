'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('appointments', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      user_id:{
        type: Sequelize.INTEGER,
        references: { model: 'files', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      provider_id:{
        type: Sequelize.INTEGER,
        references: { model: 'files', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false
      },
      canceled_at: {
        type: Sequelize.DATE,
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false
      },
    });
  },

  async down (queryInterface) {
   await queryInterface.dropTable('appointments');

  }
};
