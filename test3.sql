SELECT u.name, u.birthdate, uc.name FROM  user u 
    INNER JOIN user_customer uc ON u.id = uc 
    INNER JOIN customer c ON c.id = uc.customer.id
    WHERE u.birthdate > 18 && u.status = 1 && c.status = 1
    ORDER BY c.name ASC