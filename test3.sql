SELECT u.name, u.birthdate
FROM user as u
INNER JOIN user_customer as uc on uc.user_id = u.id 
INNER JOIN customer as c on c.id = uc.customer_id 
WHERE 
	(YEAR(CURDATE()) - YEAR(u.birthdate)) >= 18 AND
	(u.status = 1) AND
	(c.status = 1)
GROUP BY u.id;