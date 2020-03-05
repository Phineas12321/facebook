SELECT *
FROM ppposts p
JOIN ppusers u ON p.user_id = u.user_id
WHERE u.user_id = $1
ORDER BY post_id DESC