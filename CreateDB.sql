CREATE TABLE user_login (
	user_id serial NOT NULL PRIMARY KEY,
	username varchar(255) NOT NULL,
	user_password varchar(255) NOT NULL
);

INSERT INTO user_login(username, user_password) Values ('3021', '3021');
