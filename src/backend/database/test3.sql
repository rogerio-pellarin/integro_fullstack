SELECT
user.name
user.birthdate,
customer.name
FROM user
JOIN user_customer ON user_customer.user_id = user.id
JOIN customer ON customer.id = user_customer.customer_id
WHERE DATEDIFF(YEAR, user.birthdate, GETDATE()) > 18
AND user.status = 1 AND customer.status = 1
ORDER BY customer.name
