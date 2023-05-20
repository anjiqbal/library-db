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

export async function getAuthorById(id) {
  // Query the database and return the book with a matching id
  const values = [id];
  const query = `SELECT * FROM authors WHERE id = $1`;
  const result = await pool.query(query, values);
  return result.rows;
}

export async function createAuthor(author) {
  const values = [author.first_name, author.last_name];
  const query = `INSERT INTO authors (first_name, last_name) VALUES ($1, $2) RETURNING *`;
  const result = await pool.query(query, values);
  return result.rows;
}

export async function updateAuthorById(id, updates) {
  // Query the database to update an author and return the newly updated author
  const values = [id, updates.first_name, updates.last_name ]
  const query = `UPDATE authors SET first_name = $2, last_name = $3 WHERE id = $1`
  const result = await pool.query(query, values)
  return result.rows;
}

export async function deleteAuthorById(id) {
  // Query the database to delete an author and return the deleted author
  const values = [id]
  const query = `DELETE from authors WHERE id = $1`
  const result = await pool.query(query, values)
  console.log(result.rows)
  return result.rows;
}
