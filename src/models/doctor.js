"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Doctor.belongsTo(models.User, { foreignKey: "user_id" });
      Doctor.belongsTo(models.Hospital, { foreignKey: "hospital_id" });
      Doctor.belongsToMany(models.Specialization, {
        through: "DoctorSpecializations",
        foreignKey: "doctor_id",
      });
    }
  }
  Doctor.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        references: {
          model: "Users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      first_name: { type: DataTypes.STRING, allowNull: false },
      last_name: { type: DataTypes.STRING, allowNull: true },
      hospital_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "Hospitals",
          key: "id",
        },
      },
      years_of_experience: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      medicalhistory: {
        type: DataTypes.JSONB,
        allowNull: false,
      },
      availability: { type: DataTypes.JSONB, allowNull: true },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Doctor",
    }
  );

  Doctor.beforeCreate(async (doctor, options) => {
    const { Hospital, Patient } = sequelize.models;

    const hospitalExists = await Hospital.findOne({ where: { user_id: doctor.user_id } });
    const patientExists = await Patient.findOne({ where: { user_id: doctor.user_id } });

    if (hospitalExists || patientExists) {
      throw new Error("The given user_id is already associated with another role (Hospital or Patient).");
    }
  });

  Doctor.beforeUpdate(async (doctor, options) => {
    const { Hospital, Patient } = sequelize.models;

    const hospitalExists = await Hospital.findOne({ where: { user_id: doctor.user_id } });
    const patientExists = await Patient.findOne({ where: { user_id: doctor.user_id } });

    if (hospitalExists || patientExists) {
      throw new Error("The given user_id is already associated with another role (Hospital or Patient).");
    }
  });

  return Doctor;
};
