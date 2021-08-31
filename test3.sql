/*
As the image1.png, write a query in the file "test3.sql" that brings a listing with the following data:
- user.name
- user.birthdate
- customer.name Where: user is over 18 years old and his status is = 1, and the customer's status is = 1, discarding
  users who do not belong to a customer. Sorted by: customer.name

create table "user" (id integer, name varchar(100), birthdate date);
create table customer (id integer, name varchar(100), status smallint);
create table user_customer (id integer, user_id integer, customer_id integer);

insert into "user" (id, name, birthdate) VALUES (1, 'User A menor', '2019-01-01');
insert into "user" (id, name, birthdate) VALUES (2, 'User B mayor', '1981-01-01');
insert into customer (id, name, status) VALUES (1, 'Customer A mayor', 1);
insert into customer (id, name, status) VALUES (2, 'Customer B mayor', 0);
insert into user_customer (id, user_id, customer_id) VALUES (1, 1, 1);
insert into user_customer (id, user_id, customer_id) VALUES (2, 2, 2);
insert into user_customer (id, user_id, customer_id) VALUES (2, 2, 1);
*/

SELECT
  us.name,
  us.birthdate,
  cu.name
FROM
  user_customer uc
  LEFT JOIN "user" us ON uc.user_id = us.id
  LEFT JOIN customer cu ON uc.customer_id = cu.id
WHERE
  date_part('year', age(us.birthdate)) > 18 AND
  us.status = 1 AND
  cu.status = 1
ORDER BY
  cu.name
;
