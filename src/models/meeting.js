'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Meeting extends Model {
    static associate(models) {
      // Define associations here
      Meeting.belongsTo(models.Doctor, { foreignKey: 'doctorId' });
      Meeting.belongsTo(models.Patient, { foreignKey: 'patientId' });
    }
  }
  Meeting.init({
    doctorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Doctors',
        key: 'id'
      }
    },
    patientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Patients',
        key: 'id'
      }
    },
    datetime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('scheduled', 'ongoing', 'completed', 'canceled'),
      defaultValue: 'scheduled'
    }
  }, {
    sequelize,
    modelName: 'Meeting',
  });
  return Meeting;
};