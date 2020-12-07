'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    // Dummy data for table books
    const books = [
      {
        name: "Subtle Art of Not Giving a F*cks",
        stock: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Atomic Habit",
        stock: 90,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Spark Joy",
        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]

    // insert to table
    await queryInterface.bulkInsert('books', books);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    // drop delete data from table
    await queryInterface.bulkDelete('books', null);
  }
};
