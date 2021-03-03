
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructors').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructors').insert([
        {id: 1, username: 'Eddie Hall', password: "password"},
        {id: 2, username: 'Larry Wheels', password: "password"},
        {id: 3, username: 'Hafbor Bjornsson', password: "password"}
      ]);
    });
};
