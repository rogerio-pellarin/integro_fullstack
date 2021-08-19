SELECT user_name, birthdate, customer_name
FROM
    (SELECT user.name AS user_name, user.birthdate, cus.name AS customer_name, cus.status AS customer_status, user.status AS user_status
    FROM
        (SELECT name, status, user_id, customer_id
        FROM customer 
        JOIN
        user_customer 
        ON customer.id=user_customer.customer_id) AS cus
        JOIN
        user
        ON cus.user_id=user.id) AS cus_user
WHERE YEAR(cus_user.birthdate) < 2004
AND cus_user.user_status=1
AND cus_user.customer_status=1
ORDER BY cus_user.customer_name;