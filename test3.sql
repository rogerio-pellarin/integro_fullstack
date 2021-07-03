SELECT u.id, u.birthday, c.name from user_customer as uc 
inner join user as u on uc.user_id = u.id
inner join customer as c on uc.customer_id = c.id
where (YEAR(CURDATE())-YEAR(u.birthday) + 
IF(DATE_FORMAT(CURDATE(),'%m-%d') > DATE_FORMAT(u.birthday,'%m-%d'), 0 , -1 ) > 18) and  u.status = 1 and c.status = 1
order by c.name