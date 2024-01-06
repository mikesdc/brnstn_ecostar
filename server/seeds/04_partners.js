/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('partners').del();
  await knex('partners').insert([
    {
      id: 1,
      name: "Walmart",
      image_url: "http://localhost:8088/partner/logo/1",
      store_website: "https://www.walmart.ca/en"
    },
    {
      id: 2,
      name: "Adidas",
      image_url: "http://localhost:8088/partner/logo/2",
      store_website: "https://www.adidas.ca/en"
    },
    {
      id: 3,
      name: "Nike",
      image_url: "http://localhost:8088/partner/logo/3",
      store_website: "https://www.nike.com/ca/"
    },
  ]);
};