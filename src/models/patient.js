"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    calculateAge() {
      if (!this.dob) return null;
      const today = new Date();
      const birthDate = new Date(this.dob);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    }

  }
  Patient.init(
    {
      user_id: { type: DataTypes.INTEGER, allowNull: false, unique: true,
        references: {
          model: "Users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
       },
      name: { type: DataTypes.STRING, allowNull: false },
      dob: { type: DataTypes.DATEONLY, allowNull: false },
      gender: {
        type: DataTypes.ENUM("male", "female", "other"),
        allowNull: false,
      },
      contact_number: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "Patient",
    }
  );

  Patient.beforeCreate(async (doctor, options) => {
    const { Doctor, Hospital } = sequelize.models;

    const doctorExists = await Doctor.findOne({ where: { user_id: doctor.user_id } });
    const hospitalExists = await Hospital.findOne({ where: { user_id: doctor.user_id } });

    if (doctorExists || hospitalExists) {
      throw new Error("The given user_id is already associated with another role (Doctor or Hospital).");
    }
  });

  Patient.beforeUpdate(async (doctor, options) => {
    const { Doctor, Hospital } = sequelize.models;

    const doctorExists = await Doctor.findOne({ where: { user_id: doctor.user_id } });
    const hospitalExists = await Hospital.findOne({ where: { user_id: doctor.user_id } });

    if (doctorExists || hospitalExists) {
      throw new Error("The given user_id is already associated with another role (Doctor or Hospital).");
    }
  });

  return Patient;
};
