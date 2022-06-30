'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('locations', {
      location_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      location_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      location_state: {
        type: Sequelize.STRING,
        allowNull: false
      },
      location_city: {
        type: Sequelize.STRING,
        allowNull: false
      },
      location_address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      location_img_url: {
        type: Sequelize.STRING,
        allowNull: false
      }
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('locations');
  }
};