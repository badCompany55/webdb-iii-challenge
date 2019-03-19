exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("cohorts")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cohorts").insert([
        { name: "Full Stack" },
        { name: "Data Science" },
        { name: "Web PT3" }
      ]);
    });
};
