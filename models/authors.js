import { pool } from "../db/index.js";

export async function getAuthors() {
  // Query the database and return all authors
  const result = await pool.query("SELECT * FROM authors");
  return result.rows;
}

export async function searchAuthorsByName(searchTerm) {
  // Query the database and return all authors that have a name matching the searchTerm
  const values = [searchTerm];
  const query = `SELECT * FROM authors WHERE first_name = $1 OR LAST_NAME = $1`;
  const result = await pool.query(query, values);
  return result.rows;
}

// const values = [2, 3];
// const query = `SELECT * FROM BOOKS WHERE id IN ($1, $2);`;
// const result = await client.query(query, values);

export async function getAuthorById(id) {
  // Query the database and return the book with a matching id
  const values = [id];
  const query = `SELECT * FROM authors WHERE id = $1`;
  const result = await pool.query(query, values);
  return result.rows;
}

export async function createAuthor(author) {
  // Query the database to create an author and return the newly created author
  return {};
}

export async function updateAuthorById(id, updates) {
  // Query the database to update an author and return the newly updated author
  return {};
}

export async function deleteAuthorById(id) {
  // Query the database to delete an author and return the deleted author
  return {};
}
