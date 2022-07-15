SELECT name, birthdate, customer.name FROM user, customer
WHERE DATEDIFF(year, birthdate, GETDATE()) > 18
AND user.status = 1
AND customer.status = 1
ORDER BY customer.name;