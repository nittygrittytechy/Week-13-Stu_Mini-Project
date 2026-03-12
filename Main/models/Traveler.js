//Traveler.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Traveler model
class Traveler extends Model {}

// create fields/columns for Traveler model
Traveler.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'traveler'
  }
);

module.exports = Traveler;
