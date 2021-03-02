
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructors').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructors').insert([
        {id: 1, username: 'rowValue1', password: "password"},
        {id: 2, username: 'rowValue2', password: "password"},
        {id: 3, username: 'rowValue3', password: "password"}
      ]);
    });
};
