SELECT p.post_id, p.post_content, u.first_name, u.last_name, u.user_id
FROM ppposts p
JOIN ppusers u ON p.user_id = u.user_id
ORDER BY post_id DESC
-- SELECT *
-- FROM ppposts
-- ORDER BY post_id DESC