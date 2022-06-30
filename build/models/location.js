'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    static associate({ Event }) {
      Location.hasMany(Event, {
        foreignKey: "location_id",
        as: "events"
      })
    }
  }
  Location.init({
    location_id: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    location_name: {
      type:DataTypes.STRING,
      allowNull: false
    },
    location_state: {
      type:DataTypes.STRING,
      allowNull: false
    },
    location_city: {
      type:DataTypes.STRING,
      allowNull: false
    },
    location_address: {
      type:DataTypes.STRING,
      allowNull: false
    },
    location_img_url: {
      type:DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Location',
    tableName: 'locations',
    timestamps: false
  });
  return Location;
};