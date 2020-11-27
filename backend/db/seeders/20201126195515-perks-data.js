"use strict";

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
    await queryInterface.bulkInsert(
      "Perks",
      [
        {
          id: 1,
          visibility: true,
          title: "Sumuhdat Wine",
          description: "How can you not have this with some good ass cheese?",
          perkImage:
            "https://www.asenzya.com/wp-content/uploads/2016/11/Asen_WP_WINE_PinotNoir.png",
          price: 200,
          quantityAvailable: 10,
          campaignId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
