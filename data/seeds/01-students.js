exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("students")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("students").insert([
        { name: "Zach", cohort_id: 2 },
        { name: "Sam", cohort_id: 1 },
        { name: "Dave", cohort_id: 3 }
      ]);
    });
};
