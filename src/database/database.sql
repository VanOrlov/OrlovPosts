CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255),
    login VARCHAR(255),
    password VARCHAR(255),
    date_reg INTEGER,
    admin BOOLEAN
);

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    content VARCHAR(255),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users (id)
);