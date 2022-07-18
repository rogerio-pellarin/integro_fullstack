select user.name, user.birthdate, customer.name
from user
inner join user_customer
on user.id = user_customer.user_id
inner join customer
on user_customer.customer_id = customer.id
where year(getdate())-year(user.birthdate)>18 and user.status = 1
order by customer.name