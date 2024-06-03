insert into user_roles_role ("userId", "roleId") values (
	(select id from public.user where email = 'kostabarilo12@gmail.com'),
	(select id from public.role where value = 'Admin')
)