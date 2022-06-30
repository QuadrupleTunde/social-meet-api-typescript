'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('events', {
      event_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      event_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      event_start_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      event_end_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      event_description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      hobby_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      location_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('events');
  }
};