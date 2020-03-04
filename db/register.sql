INSERT INTO ppusers (
    email,
    password,
    first_name,
    last_name
)
VALUES(
    ${email},
    ${hash},
    ${first_name},
    ${last_name}
)
RETURNING email, password, first_name, last_name, user_id;