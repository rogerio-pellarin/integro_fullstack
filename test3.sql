SELECT
user.name AS USERNAME, 
user.birthdate AS BIRTHDATE, 
customer.name AS CUSTOMERNAME,
FROM `user`
LEFT JOIN user_customer
ON user.id = user_customer.user_id
LEFT JOIN customer
ON user_customer.customer_id = customer.id
WHERE DATE_FORMAT(FROM_DAYS(DATEDIFF(now(),user.birthdate)), '%Y')+0 > 18 
AND user.status = 1 
AND customer.status = 1
