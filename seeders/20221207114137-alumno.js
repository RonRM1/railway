'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Alumno",
       [
        {
      Nombre: 'Pepe',
      Apellido:'Doe',
      Edad:22,
      Fecha: new Date(),
      activo: "NO",
      id_nacionalidad: 2,
    },
  ],
   {}
   );
},
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
//   },

  async down (queryInterface, Sequelize) {
//     /**
//      * Add commands to revert seed here.
//      *
//      * Example:
//      * await queryInterface.bulkDelete('People', null, {});
//      */

    
  },
};
