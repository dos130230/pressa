CREATE DATABASE demo_db;


create extension pgcrypto;

CREATE TABLE rols (
	admin_id int generated always as identity,
	admin_name varchar(50) not null,
	admin_fname varchar(50) not null,
	admin_phone varchar(50) not null,
	admin_password varchar(100) not null
);

INSERT INTO rols(admin_name,admin_fname,admin_phone,admin_password) VALUES ('dostonbek','uktamov','99890138277',crypt('dos@1',gen_salt('bf'))); 

INSERT INTO rols(admin_name,admin_fname,admin_phone,admin_password) VALUES ('bahodir','omonov','998996050616',crypt('bah@1',gen_salt('bf'))); 



SELECT admin_id,admin_password
  FROM rols
 WHERE admin_name = 'dostonbek' 
   AND admin_password = crypt('dos@1', admin_password);



DROP TABLE users CASCADE;
CREATE TABLE users (
	user_id int generated always as identity primary key,
	user_name character varying(50) not null,
	user_fname varchar(50),
	user_job varchar(50),
	user_phone varchar(15)
);

DROP TABLE posters CASCADE;
CREATE TABLE posters (
	post_id int generated always as identity ,
	post_thema varchar(100) not null,
	post_comment varchar(200) not null,
	post_more varchar(2000) not null,
	post_views int not null default 0,
	post_img varchar(100) not null,
	post_subcat varchar(100),
	type smallint not null,
	meeting_place varchar(100) not null,
	start_data timestamptz not null,
	is_accept int not null,
	user_id int references users(user_id)
);





insert into users (user_name, user_fname, user_job, user_phone) values ('Burchess', 'Jordan', 'Structural Analysis Engineer', '517-759-2296');
insert into users (user_name, user_fname, user_job, user_phone) values ('Kemell', 'Reeba', 'Quality Control Specialist', '802-535-6552');
insert into users (user_name, user_fname, user_job, user_phone) values ('Abrahmson', 'Benjamin', 'Design Engineer', '163-295-4919');
insert into users (user_name, user_fname, user_job, user_phone) values ('Dugald', 'Greggory', 'Statistician III', '533-426-7618');
insert into users (user_name, user_fname, user_job, user_phone) values ('Miettinen', 'Zorine', 'Web Developer II', '363-325-1989');
insert into users (user_name, user_fname, user_job, user_phone) values ('Hugo', 'Babb', 'Chief Design Engineer', '297-864-3639');
insert into users (user_name, user_fname, user_job, user_phone) values ('Shadrach', 'Cherri', 'Desktop Support Technician', '948-225-5124');
insert into users (user_name, user_fname, user_job, user_phone) values ('Nobles', 'Constantin', 'Mechanical Systems Engineer', '619-992-9795');
insert into users (user_name, user_fname, user_job, user_phone) values ('Stormont', 'Phillis', 'Account Coordinator', '930-339-3337');
insert into users (user_name, user_fname, user_job, user_phone) values ('Ingon', 'Alisa', 'Staff Scientist', '550-204-3298');



insert into posters (post_thema, post_comment, post_more, post_views, post_img, post_subcat,type, meeting_place, start_data, is_accept, user_id) values ('-1', ' ', '!@#$%^&*()', 197363, '/images/ustoz.jpg','Professor', 2, 'https://www.mockaroo.com/schemas/new', '2022-10-12', 1, 1);
insert into posters (post_thema, post_comment, post_more, post_views, post_img, post_subcat,type, meeting_place, start_data, is_accept, user_id) values ('울란바토르', '1E2', '1E+02', 188149, '/images/ustoz.jpg','Cost Accountant', 1, 'https://www.mockaroo.com/schemas/new', '2022-09-14', 1, 2);
insert into posters (post_thema, post_comment, post_more, post_views, post_img, post_subcat,type, meeting_place, start_data, is_accept, user_id) values ('0.00', '-1.00', 'åß∂ƒ©˙∆˚¬…æ', 11256, '/images/ustoz.jpg','Account Coordinator', 2, 'https://www.mockaroo.com/schemas/new', '2022-02-03', 1, 3);
insert into posters (post_thema, post_comment, post_more, post_views, post_img, post_subcat,type, meeting_place, start_data, is_accept, user_id) values ('社會科學院語學研究所', '‫test‫', '<script>alert(''hi'')</script>', 570375, '/images/ustoz.jpg','Geologist II', 1, 'https://www.mockaroo.com/schemas/new', '2021-08-22', 1, 4);
insert into posters (post_thema, post_comment, post_more, post_views, post_img, post_subcat,type, meeting_place, start_data, is_accept, user_id) values ('<svg><script>0<1>alert(''XSS'')</script>', ' ', '⁰⁴⁵', 811462, '/images/ustoz.jpg','Analog Circuit Design manager', 1, 'https://www.mockaroo.com/schemas/new', '2021-08-21', 1, 5);
insert into posters (post_thema, post_comment, post_more, post_views, post_img, post_subcat,type, meeting_place, start_data, is_accept, user_id) values ('ヽ༼ຈل͜ຈ༽ﾉ ヽ༼ຈل͜ຈ༽ﾉ ', '・(￣∀￣)・:*:', '''', 438278, '/images/ustoz.jpg','Senior Cost Accountant', 2, 'https://www.mockaroo.com/schemas/new', '2021-10-20', 1, 6);
insert into posters (post_thema, post_comment, post_more, post_views, post_img, post_subcat,type, meeting_place, start_data, is_accept, user_id) values ('"', '˙ɐnbᴉlɐ ɐuƃɐɯ ǝɹolop ʇǝ ǝɹoqɐl ʇn ʇunpᴉpᴉɔuᴉ ɹodɯǝʇ poɯsnᴉǝ op pǝs ''ʇᴉlǝ ƃuᴉɔsᴉdᴉpɐ ɹnʇǝʇɔǝsuoɔ ''ʇǝɯɐ ʇᴉs ɹolop ɯnsdᴉ ɯǝɹo˥', '<script>alert(''hi'')</script>', 92815, '/images/ustoz.jpg','Engineer I', 2, 'https://www.mockaroo.com/schemas/new', '2021-07-25', 1, 7);
insert into posters (post_thema, post_comment, post_more, post_views, post_img, post_subcat,type, meeting_place, start_data, is_accept, user_id) values ('ヽ༼ຈل͜ຈ༽ﾉ ヽ༼ຈل͜ຈ༽ﾉ ', '-1E+02', '0️⃣ 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟', 363418, '/images/ustoz.jpg','Associate Professor', 1, 'https://www.mockaroo.com/schemas/new', '2022-01-19', 1, 8);
insert into posters (post_thema, post_comment, post_more, post_views, post_img, post_subcat,type, meeting_place, start_data, is_accept, user_id) values ('"''''''''"''"', '() { 0; }; touch /tmp/blns.shellshock1.fail;', '../../../../../../../../../../../etc/passwd%00', 69235, '/images/ustoz.jpg','Accountant II', 1, 'https://www.mockaroo.com/schemas/new', '2021-12-30', 1, 9);
insert into posters (post_thema, post_comment, post_more, post_views, post_img, post_subcat,type, meeting_place, start_data, is_accept, user_id) values ('-1E02', '''', '() { _; } >_[$($())] { touch /tmp/blns.shellshock2.fail; }', 348856, '/images/ustoz.jpg','VP Sales', 2, 'https://www.mockaroo.com/schemas/new', '2020-03-10', 1, 10);

DROP TABLE categories CASCADE;
CREATE TABLE categories (
	cat_id int generated always as identity primary key,
	cat_name varchar(50) not null
);

insert into categories (cat_name) values ('IT');
insert into categories (cat_name) values ('BIZNES');
insert into categories (cat_name) values ('TIBBIYOT');
insert into categories (cat_name) values ('SANAT');
insert into categories (cat_name) values ('TALIM');




DROP TABLE subcategories CASCADE;
CREATE TABLE subcategories (
	subcat_id int generated always as identity,
	cat_id int references categories(cat_id),
	subcat_name varchar(50) not null
);

insert into subcategories (cat_id, subcat_name) values (1, 'BACKEND');
insert into subcategories (cat_id, subcat_name) values (1, 'FRONTEND');
insert into subcategories (cat_id, subcat_name) values (1, 'DIZAYN');
insert into subcategories (cat_id, subcat_name) values (1, 'TIZMLASH');
insert into subcategories (cat_id, subcat_name) values (1, 'Telekommunikatsiya');

insert into subcategories (cat_id, subcat_name) values (2, 'Konsalting');
insert into subcategories (cat_id, subcat_name) values (2, 'Hisob-kitob');
insert into subcategories (cat_id, subcat_name) values (2, 'Sugurta');
insert into subcategories (cat_id, subcat_name) values (2, 'Marketing');

insert into subcategories (cat_id, subcat_name) values ( 3, 'Pediatriya');
insert into subcategories (cat_id, subcat_name) values ( 3,'Stomatologiya');
insert into subcategories (cat_id, subcat_name) values ( 3, 'Hamshiralik');
insert into subcategories (cat_id, subcat_name) values ( 3, 'Terapeft');
insert into subcategories (cat_id, subcat_name) values ( 3, 'Lor');

insert into subcategories (cat_id, subcat_name) values ( 4, 'Maqom');
insert into subcategories (cat_id, subcat_name) values ( 4, 'Sozandachilik');
insert into subcategories (cat_id, subcat_name) values ( 4, 'Aktiyor');
insert into subcategories (cat_id, subcat_name) values ( 4, 'Qiziqchi');
insert into subcategories (cat_id, subcat_name) values ( 4, 'Ashulachi');

insert into subcategories (cat_id, subcat_name) values ( 5, 'Matematika');
insert into subcategories (cat_id, subcat_name) values ( 5, 'Fizika');
insert into subcategories (cat_id, subcat_name) values ( 5, 'Ingliz-tili');
insert into subcategories (cat_id, subcat_name) values ( 5, 'Rus-til');





SELECT 
	u.*,
	p.*,
	to_char(p.start_data, 'YYYY-MM-DD hh:mm:ss') as start_data
FROM posters as p
left join users as u on u.user_id = p.user_id
where p.is_accept = false and
	case
		when $1 > 0 then p.post_id = $1 
		else true
	end
order by p.post_id asc;


select
cat.*,
json_agg(sub.subcat_name) as subcat
from categories as cat 
left join subcategories as sub on sub.cat_id = cat.cat_id
where
case
	when $1 > 0 then cat.cat_id = $1
	else true	 
end
group by cat.cat_id;


with my_del_post as (select
	p.post_id
	from posters as p
	where
	p.start_data >= now()
),
post as (
DELETE FROM posters
WHERE post_id=ANY(select post_id from my_del_post)
)
DELETE FROM users
WHERE user_id=ANY(select post_id from my_del_post)
;

