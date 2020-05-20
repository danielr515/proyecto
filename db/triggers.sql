CREATE OR REPLACE FUNCTION initgame_func()
  RETURNS trigger AS
$$
DECLARE 
			team1 CURSOR FOR SELECT char1, char2, char3, char4 FROM teams WHERE id = NEW.p1team;
			team2 CURSOR FOR SELECT char1, char2, char3, char4 FROM teams WHERE id = NEW.p2team;
			character CURSOR (charid int) FOR SELECT hp, mana, atk, def, spatk, spdef, speed FROM characters WHERE id = charid;
			char1 int;
			char2 int;
			char3 int;
			char4 int;
			hp int;
			mana int;
			atk int;
			def int;
			spatk int;
			spdef int;
			speed int;
BEGIN	
		OPEN team1;
			FETCH team1 INTO char1, char2, char3, char4;
			OPEN character(char1);
				FETCH character INTO hp, mana, atk, def, spatk, spdef, speed;
				INSERT INTO characterbattlehistory (turn, room, player, character, currhp, currmana, curratk, currdef, currspatk, currspdef, currspeed) VALUES(0, NEW.id, NEW.player1, char1, hp, mana, atk, def, spatk, spdef, speed);
			CLOSE character;
			OPEN character(char2);
				FETCH character INTO hp, mana, atk, def, spatk, spdef, speed;
				INSERT INTO characterbattlehistory (turn, room, player, character, currhp, currmana, curratk, currdef, currspatk, currspdef, currspeed) VALUES(0, NEW.id, NEW.player1, char2, hp, mana, atk, def, spatk, spdef, speed);
			CLOSE character;
			OPEN character(char3);
				FETCH character INTO hp, mana, atk, def, spatk, spdef, speed;
				INSERT INTO characterbattlehistory (turn, room, player, character, currhp, currmana, curratk, currdef, currspatk, currspdef, currspeed) VALUES(0, NEW.id, NEW.player1, char3, hp, mana, atk, def, spatk, spdef, speed);
			CLOSE character;
			OPEN character(char4);
				FETCH character INTO hp, mana, atk, def, spatk, spdef, speed;
				INSERT INTO characterbattlehistory (turn, room, player, character, currhp, currmana, curratk, currdef, currspatk, currspdef, currspeed) VALUES(0, NEW.id, NEW.player1, char4, hp, mana, atk, def, spatk, spdef, speed);
			CLOSE character;
		CLOSE team1;
		OPEN team2;
			FETCH team2 INTO char1, char2, char3, char4;
			OPEN character(char1);
				FETCH character INTO hp, mana, atk, def, spatk, spdef, speed;
				INSERT INTO characterbattlehistory (turn, room, player, character, currhp, currmana, curratk, currdef, currspatk, currspdef, currspeed) VALUES(0, NEW.id, NEW.player1, char1, hp, mana, atk, def, spatk, spdef, speed);
			CLOSE character;
			OPEN character(char2);
				FETCH character INTO hp, mana, atk, def, spatk, spdef, speed;
				INSERT INTO characterbattlehistory (turn, room, player, character, currhp, currmana, curratk, currdef, currspatk, currspdef, currspeed) VALUES(0, NEW.id, NEW.player1, char2, hp, mana, atk, def, spatk, spdef, speed);
			CLOSE character;
			OPEN character(char3);
				FETCH character INTO hp, mana, atk, def, spatk, spdef, speed;
				INSERT INTO characterbattlehistory (turn, room, player, character, currhp, currmana, curratk, currdef, currspatk, currspdef, currspeed) VALUES(0, NEW.id, NEW.player1, char3, hp, mana, atk, def, spatk, spdef, speed);
			CLOSE character;
			OPEN character(char4);
				FETCH character INTO hp, mana, atk, def, spatk, spdef, speed;
				INSERT INTO characterbattlehistory (turn, room, player, character, currhp, currmana, curratk, currdef, currspatk, currspdef, currspeed) VALUES(0, NEW.id, NEW.player1, char4, hp, mana, atk, def, spatk, spdef, speed);
			CLOSE character;
		CLOSE team2;
		UPDATE rooms SET status = 'PLAYING', turn = 0  WHERE id = new.id;
		RETURN NEW;
END;
$$
LANGUAGE 'plpgsql';

DROP TRIGGER IF EXISTS initgame ON rooms;
CREATE TRIGGER initgame 
AFTER UPDATE ON rooms
FOR EACH ROW 
EXECUTE PROCEDURE initgame_func();