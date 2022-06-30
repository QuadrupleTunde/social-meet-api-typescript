'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hobby extends Model {
    static associate({ Event }) {
      Hobby.hasMany(Event, {
        foreignKey: "hobby_id",
        as: "events"
      })
    }
  }
  Hobby.init({
    hobby_id: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    hobby_name: {
      type:DataTypes.STRING,
      allowNull: false
    },
    hobby_img_url: {
      type:DataTypes.STRING,
      allowNull: false
    },
    hobby_category: {
      type:DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Hobby',
    tableName: 'hobbies',
    timestamps: false
  });
  return Hobby;
};