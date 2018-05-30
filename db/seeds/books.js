exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([{
          "author": "Jami Kaufman",
          "title": "Emtrak",
          "pages": 886
        },
        {
          "author": "Blankenship May",
          "title": "Metroz",
          "pages": 556
        },
        {
          "author": "Wise Rodriquez",
          "title": "Balooba",
          "pages": 946
        },
        {
          "author": "Paula Sweeney",
          "title": "Vertide",
          "pages": 349
        },
        {
          "author": "Burke Schmidt",
          "title": "Quiltigen",
          "pages": 223
        },
        {
          "author": "Wiggins Holland",
          "title": "Idetica",
          "pages": 968
        },
        {
          "author": "Penelope Pena",
          "title": "Zidant",
          "pages": 924
        },
        {
          "author": "Tillman Dickerson",
          "title": "Conjurica",
          "pages": 712
        },
        {
          "author": "Rosemarie Lott",
          "title": "Snowpoke",
          "pages": 933
        },
        {
          "author": "Madelyn Potter",
          "title": "Gronk",
          "pages": 303
        },
        {
          "author": "Bryan Key",
          "title": "Talkola",
          "pages": 805
        },
        {
          "author": "Lakeisha Taylor",
          "title": "Eyewax",
          "pages": 604
        },
        {
          "author": "Queen Chang",
          "title": "Inquala",
          "pages": 554
        },
        {
          "author": "Loretta Wright",
          "title": "Zboo",
          "pages": 648
        },
        {
          "author": "Ward Cannon",
          "title": "Izzby",
          "pages": 329
        }
      ]);
    });
};
