SELECT user.name, user.birthday, customer.name FROM user
INNER JOIN user_customer ON user.id = user_customer.user_id
INNER JOIN customer ON user_customer.customer_id = customer.id
WHERE 
user.birthday <= now() - INTERVAL 18 YEAR AND
user.status = 1 AND
customer.status = 1
ORDER BY customer.name;