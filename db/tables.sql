DROP DATABASE IF EXISTS rpg;
CREATE DATABASE rpg;
\c rpg;

CREATE TABLE users(
	email VARCHAR(50) NOT NULL,
	uname VARCHAR(20) NOT NULL,
	passwd VARCHAR(20) NOT NULL,
	status VARCHAR(10),
	sessiontoken VARCHAR(20),
	PRIMARY KEY(uname),
	UNIQUE(email)
);
CREATE TABLE admins(
	PRIMARY KEY(uname)
) INHERITS (users);

CREATE TABLE players(
	rankpoints INT NOT NULL,
	money INT NOT NULL,
	PRIMARY KEY(uname)
) INHERITS (users);

CREATE TABLE items(
	id SERIAL NOT NULL,
	name VARCHAR(30) NOT NULL,
	class VARCHAR(10) NOT NULL,
	value INT NOT NULL,
	description TEXT,
	prize INT,
	PRIMARY KEY(id),
	UNIQUE(name)
);
CREATE TABLE types(
	id SERIAL NOT NULL,
	name VARCHAR(15) NOT NULL,
	description TEXT,
	PRIMARY KEY(id),
	UNIQUE(name)
);
CREATE TABLE typesrelation (
	typeatk INT NOT NULL,
	typedef INT NOT NULL,
	relation decimal(2,1) NOT NULL,
	PRIMARY KEY(typeatk, typedef),
	FOREIGN KEY(typeatk) REFERENCES types(id) ON DELETE CASCADE,
	FOREIGN KEY(typedef) REFERENCES types(id) ON DELETE CASCADE
);
CREATE TABLE skills(
	id SERIAL NOT NULL,
	name VARCHAR(30) NOT NULL,
	class VARCHAR(10) NOT NULL,
	mode VARCHAR(5) NOT NULL,
	cost INT,
	damage INT,
	type INT,
	PRIMARY KEY(id),
	FOREIGN KEY(type) REFERENCES types(id) ON DELETE CASCADE,
	UNIQUE(name)
);
CREATE TABLE characters(
	id SERIAL NOT NULL,
	name VARCHAR(30) NOT NULL,
	hp INT,
	mana INT,
	atk INT,
	def INT,
	spatk INT,
	spdef INT,
	speed INT,
	skill1 INT,
	skill2 INT,
	passive INT,
	ultimate INT,
	type1 INT,
	type2 INT,
	PRIMARY KEY(id),
	FOREIGN KEY(skill1) REFERENCES skills(id) ON DELETE CASCADE,
	FOREIGN KEY(skill2) REFERENCES skills(id) ON DELETE CASCADE,
	FOREIGN KEY(passive) REFERENCES skills(id) ON DELETE CASCADE,
	FOREIGN KEY(ultimate) REFERENCES skills(id) ON DELETE CASCADE,
	FOREIGN KEY(type1) REFERENCES types(id) ON DELETE CASCADE,
	FOREIGN KEY(type2) REFERENCES types(id) ON DELETE CASCADE,
	UNIQUE(name)
);
CREATE TABLE teams(
	id SERIAL NOT NULL,
	name VARCHAR(30) NOT NULL,
	player VARCHAR(20) NOT NULL,
	char1 INT,
	char2 INT,
	char3 INT,
	char4 INT,
	item1 INT,
	item2 INT,
	item3 INT,
	item4 INT,
	PRIMARY KEY(id),
	FOREIGN KEY(player) REFERENCES players(uname) ON DELETE CASCADE,
	FOREIGN KEY(char1) REFERENCES characters(id) ON DELETE CASCADE,
	FOREIGN KEY(char2) REFERENCES characters(id) ON DELETE CASCADE,
	FOREIGN KEY(char3) REFERENCES characters(id) ON DELETE CASCADE,
	FOREIGN KEY(char4) REFERENCES characters(id) ON DELETE CASCADE,
	FOREIGN KEY(item1) REFERENCES items(id) ON DELETE CASCADE,
	FOREIGN KEY(item2) REFERENCES items(id) ON DELETE CASCADE,
	FOREIGN KEY(item3) REFERENCES items(id) ON DELETE CASCADE,
	FOREIGN KEY(item4) REFERENCES items(id) ON DELETE CASCADE
);
CREATE TABLE rooms(
	id SERIAL NOT NULL,
	name VARCHAR(30) NOT NULL,
	type VARCHAR(10) NOT NULL,
	passwd VARCHAR(20),
	player1 VARCHAR(20) NOT NULL,
	player2 VARCHAR(20),
	status VARCHAR(10) NOT NULL,
	p1status VARCHAR(20),
	p2status VARCHAR(10),
	p1team INT,
	p2team INT,
	turn INT,
	PRIMARY KEY(id),
	FOREIGN KEY(player1) REFERENCES players(uname) ON DELETE CASCADE,
	FOREIGN KEY(player2) REFERENCES players(uname) ON DELETE CASCADE,
	FOREIGN KEY(p1team) REFERENCES teams(id) ON DELETE CASCADE,
	FOREIGN KEY(p2team) REFERENCES teams(id) ON DELETE CASCADE
);
CREATE TABLE characterbattlehistory(
	id SERIAL NOT NULL,
	turn INT NOT NULL,
	room INT NOT NULL,
	player VARCHAR(20) NOT NULL,
	character INT NOT NULL,
	currhp INT,
	currmana INT,
	curratk INT,
	currdef INT,
	currspatk INT,
	currspdef INT,
	currspeed INT,
	PRIMARY KEY(id),
	FOREIGN KEY(player) REFERENCES players(uname) ON DELETE CASCADE,
	FOREIGN KEY(room) REFERENCES rooms(id) ON DELETE CASCADE,
	FOREIGN KEY(character) REFERENCES characters(id) ON DELETE CASCADE
);
CREATE TABLE battlehistory(
	id SERIAL NOT NULL,
	turn INT NOT NULL,
	room INT NOT NULL,
	p1char INT,
	p2char INT,
	p1move INT,
	p2move INT,
	PRIMARY KEY(id),
	FOREIGN KEY(p1char) REFERENCES characterbattlehistory(id) ON DELETE CASCADE,
	FOREIGN KEY(p2char) REFERENCES characterbattlehistory(id) ON DELETE CASCADE,
	FOREIGN KEY(p1move) REFERENCES skills(id) ON DELETE CASCADE,
	FOREIGN KEY(p2move) REFERENCES skills(id) ON DELETE CASCADE
);
CREATE TABLE shop(
	item INT,
	discount INT,
	PRIMARY KEY(item),
	FOREIGN KEY(item) REFERENCES items(id) ON DELETE CASCADE
);
CREATE TABLE inventory(
	id SERIAL NOT NULL,
	player VARCHAR(20),
	item INT,
	quantity INT,
	PRIMARY KEY(id),
	FOREIGN KEY(player) REFERENCES players(uname) ON DELETE CASCADE,
	FOREIGN KEY(item) REFERENCES items(id) ON DELETE CASCADE
);

