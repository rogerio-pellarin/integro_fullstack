--  write a query in the file "test3.sql" that brings a listing with the following data:
-- - user.name
-- - user.birthdate
-- - customer.name
-- Where: user is over 18 years old and his status is = 1, and the customer's status is = 1, discarding users who do not belong to a customer.
-- Sorted by: customer.name


SELECT user.name, user.birthday, costumer.name FROM user LEFT JOIN user_costumer ON user.id = user_costumer.user_id
LEFT JOIN costumer ON costumer.id = user_costumer.costumer_id
WHERE user.age > 19 AND user.status = 1
ORDER BY costumer.name
