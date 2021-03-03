
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('clients').del()
    .then(function () {
      // Inserts seed entries
      return knex('clients').insert([
        {id: 1, username: 'Ronnie Coleman', password: "$2a$10$ismIWy4E07ShjnVpnqshRunE7LlB2UInJpSOanyoJYZqMzHWvQP7i"},
        {id: 2, username: 'Arnold Schawrzenegger', password: "$2a$10$QbTJf5wCaM9KjUkqD6UvjulziLShYU/4jbtsAU0s6EFqH/lR6.Vb."},
        {id: 3, username: 'Jay Cutler', password: "$2a$10$7Z6t/mczmlABGgKkixabUOL..D5CtM1/9gziKNQ7g5O1vsdSHCDH."}
      ]);
    });
};
