SELECT u.name, u.birthdate, c.name FROM user_customer uc
INNER JOIN user u ON u.id = uc.user_id
INNER JOIN customer c ON c.id = uc.customer_id
WHERE floor(
(cast(convert(varchar(8),getdate(),112) as int)-
cast(convert(varchar(8),u.birthdate,112) as int) ) / 10000
) > 18 and u.status = 1 and c.status = 1
ORDER BY c.name
