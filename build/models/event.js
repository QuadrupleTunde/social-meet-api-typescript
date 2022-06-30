'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate({ Hobby, Location }) {
      Event.belongsTo(Hobby, {
        foreignKey: "hobby_id",
        as: "hobbies",
      })
      Event.belongsTo(Location, {
        foreignKey: "location_id",
        as: "locations",
      })
    }
  }
  Event.init({
    event_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    event_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    event_start_date:{ 
      type:DataTypes.DATE,
      allowNull: false
    },
    event_end_date: {
      type:DataTypes.DATE,
      allowNull: false
    },
    event_description: {
      type:DataTypes.STRING,
      allowNull: false
    },
    hobby_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    location_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
},
{
    sequelize,
    modelName: 'Event',
    tableName: 'events',
    timestamps: false
  })
  return Event;
}