
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('classes').del()
    .then(function () {
      // Inserts seed entries
      return knex('classes').insert([
        {id: 1, name: 'Spin Class', time: "1400", duration: "60 hour", location: "Seattle"},
        {id: 2, name: 'Weight Training', time: "1200", duration: "30 mins" , location: "Seattle"},
        {id: 3, name: 'Water Aerobics', time: "1000", duration: "90 mins", location: "Seattle"}
      ]);
    });
};
