SELECT user.name AS user_name, 
    user.birthdate,
    customer.name AS customer_name
FROM user
LEFT JOIN user_customer 
ON user.id = user_customer.user_id
JOIN customer
ON customer.id = user_customer.customer_id
WHERE user_customer.customer_id AND
    TIMESTAMPDIFF(YEAR, user.birthdate, CURDATE()) >= 18 AND
    user.status = 1 AND 
    customer.status=1
ORDER BY customer.name