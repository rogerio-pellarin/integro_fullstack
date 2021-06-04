SELECT user.name, user.birthdate, TIMESTAMPDIFF(YEAR, user.birthdate, CURDATE()) AS age
	FROM user
	INNER JOIN user_customer ON user.id = user_customer.user_id
	INNER JOIN customer ON user_customer.customer_id = customer.id
	WHERE TIMESTAMPDIFF(YEAR, user.birthdate, CURDATE()) > 18
	AND user.status = 1 AND customer.status = 1 AND user.id HAVING (
	SELECT user.id FROM user INNER JOIN user_customer ON user.id = user_customer.user_id
	INNER JOIN customer ON user_customer.customer_id = customer.id
	)
	ORDER BY  customer.name ASC;