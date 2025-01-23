module.exports = (sequelize, DataTypes) => {
    const DoctorSpecialization = sequelize.define('DoctorSpecializations', {
      doctor_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Doctors',
          key: 'id',
        },
      },
      specialization_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Specializations',
          key: 'id',
        },
      },
    });
  
    return DoctorSpecialization;
  };
  