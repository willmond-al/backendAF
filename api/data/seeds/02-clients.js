
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('clients').del()
    .then(function () {
      // Inserts seed entries
      return knex('clients').insert([
        {id: 1, username: 'Ronnie Coleman', password: "password"},
        {id: 2, username: 'Arnold Schawrzenegger', password: "password"},
        {id: 3, username: 'Jay Cutler', password: "password"}
      ]);
    });
};
