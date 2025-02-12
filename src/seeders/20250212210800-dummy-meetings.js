"use strict";
const { faker } = require("@faker-js/faker");

module.exports = {
  async up(queryInterface, Sequelize) {
    const meetings = [];

    // Generate 10 dummy meetings
    for (let i = 0; i < 10; i++) {
      meetings.push({
        doctorId: faker.number.int({ min: 1, max: 6 }), // Random doctorId between 1 and 5
        patientId: faker.number.int({ min: 1, max: 11 }), // Random patientId between 1 and 10
        datetime: faker.date.future(), // Random future date and time
        status: faker.helpers.arrayElement(["scheduled", "ongoing", "completed", "canceled"]), // Random status
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    // Insert dummy data into the Meetings table
    await queryInterface.bulkInsert("Meetings", meetings, {});
  },

  async down(queryInterface, Sequelize) {
    // Remove all data from the Meetings table
    await queryInterface.bulkDelete("Meetings", null, {});
  },
};