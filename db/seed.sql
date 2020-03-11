CREATE TABLE ppusers (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(200),
    password VARCHAR(500),
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    profile_img VARCHAR(2048)
);

CREATE TABLE ppposts (
    post_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES ppusers(user_id),
    post_content VARCHAR(500)
);

