CREATE TABLE IF NOT EXISTS pokedex (
  id INTEGER PRIMARY KEY,
  name TEXT DEFAULT "",
  status TEXT DEFAULT ""
);

INSERT INTO pokedex (id,name,status)
VALUES
(2, "ivysaur", "locked"),
(7, "squirtle", "freedom"),
(10, "caterpie", "locked");