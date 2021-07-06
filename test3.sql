SELECT user.name, user.birthdate, customer.name
FROM user 
JOIN user_customer ON user.id = user_customer.user_id
JOIN customer ON user_customer.customer_id = customer.id
WHERE TIMESTAMPDIFF(YEAR, user.birthdate, CURDATE()) >= 18 AND user.status = '1' AND customer.status = '1'
ORDER BY customer.name