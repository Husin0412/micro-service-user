'use strict';

const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('users', [{
        name: 'Husin',
        profession: "Admin Micro",
        role: "admin",
        email: "husinsandjaya@yopmail.com",
        password: await bcrypt.hash('husin123', 10),
        avatar: "https://fitrianamaya.files.wordpress.com/2014/01/600full-nicholas-saputra.jpg",
        created_at: new Date(),
        updated_at: new Date
      },
      {
        name: 'Apro Fitria',
        profession: "programer develover",
        role: "student",
        email: "AproFitri@yopmail.com",
        password: await bcrypt.hash('apro123', 10),
        avatar: "https://pbs.twimg.com/profile_images/550075598454792193/bPJJcX9c_400x400.jpeg",
        created_at: new Date(),
        updated_at: new Date
      },
      {
        name: 'Marwah',
        profession: "Mahasiswa",
        role: "student",
        email: "marwah@yopmail.com",
        password: await bcrypt.hash('marwah123', 10),
        avatar: "https://lh3.googleusercontent.com/proxy/9_4U-92_D12eoBY4FcpVslb_gmJ9y46beYGw0nRiUaqmW6wQEsQy2pcbcxylflWimf6z-nSCcaWpM0QINJ9r5P-_Kc_6u4fOAPP0Rto_Lzc_jkeD4Km4oV_PHCN-XnEAEIXacv9iIg5lwO5XhgQ9dHibUGrRN9RRH_f-f0mQjA",
        created_at: new Date(),
        updated_at: new Date
      },
      {
        name: 'Saputra Harahap',
        profession: "pengamen suka ngoding",
        role: "student",
        email: "saputra@yopmail.com",
        password: await bcrypt.hash('apro123', 10),
        avatar: "https://alchetron.com/cdn/hanny-saputra-46717b16-5f1b-492d-9e08-44bbd831510-resize-750.jpeg",
        created_at: new Date(),
        updated_at: new Date
      },
      {
        name: 'Sumanto Komandanu',
        profession: "juragan baso koding",
        role: "student",
        email: "sumanto@yopmail.com",
        password: await bcrypt.hash('apro123', 10),
        avatar: "https://www.indiantelevision.com/sites/default/files/images/tv-images/2020/03/11/Sumanto-Chattopadhyay.jpg",
        created_at: new Date(),
        updated_at: new Date
      }
    ]);

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};