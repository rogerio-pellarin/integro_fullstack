select u.name as user_name, u.birthdate, c.name customer_name
from user u
         left join user_customer uc on u.id = uc.user_id
         left join customer c on uc.customer_id = c.id
where u.birthdate::date <= dateadd('year', -18, current_date)
and c.status = 1
and c.id is not null
order by c.name