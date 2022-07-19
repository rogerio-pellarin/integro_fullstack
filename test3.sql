SELECT u.name,  u.birthdate, c.name FROM user_customer inner uc join user u on uc.user_id = u.id 
inner join customer c on  uc.customer.id = c.id 
where u.status = 1 and u.birthdate >= 18 and c.status = 1 
order by c.name desc;