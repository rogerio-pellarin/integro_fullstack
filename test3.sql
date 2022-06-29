SELECT user.name, user.birthdate, costumer.name FROM user LEFT JOIN user_costumer ON user.id = user_costumer.user_id
LEFT JOIN costumer ON costumer.id = user_costumer.costumer_id
WHERE user.age > 18 AND user.status = 1
ORDER BY costumer.name
