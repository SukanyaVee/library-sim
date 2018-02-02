CREATE TABLE IF NOT EXISTS lib_users (
  id SERIAL PRIMARY KEY,
  username TEXT UNIQUE,
  password TEXT
  );

  DROP TABLE lib_books;
CREATE TABLE lib_books (
    id SERIAL PRIMARY KEY,
    title TEXT,
    author TEXT , 
    genre VARCHAR(20),
    description VARCHAR, 
    available BOOLEAN DEFAULT TRUE,
    checked_out_by INTEGER REFERENCES lib_users(id) DEFAULT 5
);


INSERT INTO lib_users
(username, password)
VALUES
    ('Aaaa', 'aaaaaaa'),
    ('bBbb', 'bbbbbbb'),
    ('ccCc', 'ccccccc'),
    ('dddD', 'ddddddd'),
    ('library', 'library');

INSERT INTO lib_books 
(title, author, genre, description, available, checked_out_by)
VALUES 
('Morning', 'morn', 'm', 'morning', TRUE, 5),
('Evening', 'eve', 'e', 'evening', TRUE, 5),
('Night', 'Nigh', 'n', 'night', TRUE, 5),
('Afternoon', 'after', 'a', 'afternoon', FALSE, 3);

SELECT * FROM lib_users;
SELECT * FROM lib_books;