CREATE DATABASE knock_knock;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  username VARCHAR(250),
  status VARCHAR(5)
);