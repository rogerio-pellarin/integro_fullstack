Select user.name as userName, user.birthdate,user.status as userStatus, customer.status as customerStatus, customer.name as customerName, TIMESTAMPDIFF(YEAR,user.birthdate,CURDATE()) AS edad
FROM user_customer
INNER JOIN user
    ON user.id = user_customer.user_id
INNER JOIN customer
    ON customer.id = user_customer.customer_id
Where user.status = 1 AND customer.status = 1 AND TIMESTAMPDIFF(YEAR,user.birthdate,CURDATE()) > 18
ORDER BY customerName