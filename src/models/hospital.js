"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Hospital extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
        Hospital.belongsTo(models.User, { foreignKey: "user_id" });
        Hospital.hasMany(models.Doctor, { foreignKey: "hospital_id" });
        Hospital.belongsToMany(models.Specialization, {
          through: 'HospitalSpecializations',
          foreignKey: "hospital_id",
        });
    
    }
  }
  Hospital.init(
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
      name: { type: DataTypes.STRING, allowNull: false },
      address: { type: DataTypes.TEXT, allowNull: false },
      state: { type: DataTypes.STRING, allowNull: false },
      city: { type: DataTypes.STRING, allowNull: false },
      contact_number: { type: DataTypes.STRING, allowNull: false },
      isVerified: { type: DataTypes.BOOLEAN, defaultValue: false },
      createdAt: { allowNull: false, type: DataTypes.DATE },
      updatedAt: { allowNull: false, type: DataTypes.DATE },
    },
    {
      sequelize,
      modelName: "Hospital",
    }
  );

  Hospital.beforeCreate(async (doctor, options) => {
    const { Doctor, Patient } = sequelize.models;

    const doctorExists = await Doctor.findOne({ where: { user_id: doctor.user_id } });
    const patientExists = await Patient.findOne({ where: { user_id: doctor.user_id } });

    if (doctorExists || patientExists) {
      throw new Error("The given user_id is already associated with another role (Doctor or Patient).");
    }
  });

  Hospital.beforeUpdate(async (doctor, options) => {
    const { Doctor, Patient } = sequelize.models;

    const doctorExists = await Doctor.findOne({ where: { user_id: doctor.user_id } });
    const patientExists = await Patient.findOne({ where: { user_id: doctor.user_id } });

    if (doctorExists || patientExists) {
      throw new Error("The given user_id is already associated with another role (Doctor or Patient).");
    }
  });

  return Hospital;
};
