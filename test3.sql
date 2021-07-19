#POSTGRES FORMAT
SELECT 
  u.name AS userName,
  u.birthdate AS userBrithdate,
  c.name As custumerName,
FROM
  user u
  LEFT JOIN user_customer uc ON u.id = uc.user_customer 
  LEFT JOIN customer c ON uc.customer_id = c.id
WHERE
  SELECT DATE_PART('year', NOW()) - DATE_PART('year', u.birthdate::date)
  AND u.status = 1
  AND c.status = 1
  AND customer_id IS NOT NULL
ORDER BY
    c.name
;
