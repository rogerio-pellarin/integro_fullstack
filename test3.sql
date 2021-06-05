SELECT  user.name 
       ,user.birthdate 
       ,customer.name
FROM user
INNER JOIN user_customer
ON user.id = user_customer.user_id
INNER JOIN customer
ON customer.id = user_customer.customer_id
WHERE TIMESTAMPDIFF(YEAR,user.birthdate,CURDATE())>= 18 
AND user.status = 1 
AND customer.status = 1
ORDER BY customer.name ASC 