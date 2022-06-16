SELECT
    user.name user.birthdate customer.birthdate
FROM
    user
    INNER JOIN Customers ON user.name user.id customer.id.CustomerID = Customers.CustomerID
WHERE
    user.status = 1;