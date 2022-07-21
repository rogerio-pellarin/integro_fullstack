SELECT u.name, u.birthdate, c.name FROM user_customer uc
INNER JOIN user u ON u.id = uc.user_id
INNER JOIN customer c ON c.id = uc.customer_id
WHERE TIMESTAMPDIFF(YEAR,u.birthdate,CURDATE()) > 18 and u.status = 1 and c.status = 1
ORDER BY c.name
