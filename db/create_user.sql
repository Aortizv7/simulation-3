insert into users (
    first_name,
    last_name,
    gender,
    auth_id
)
values ($1, $2, $3, $4)
returning *;
