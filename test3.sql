Select user.name, user.birthdate, customer.name 
 From user, customer
Where (DATEDIFF(CURDATE(), user.birthdate) >= 6557) AND (user.status = 1) AND (customer = 1)
Order By customer.name Asc