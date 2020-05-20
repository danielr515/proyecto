DROP TRIGGER IF EXISTS initgame;
CREATE TRIGGER initgame 
AFTER UPDATE ON rooms
FOR EACH ROW 
WHEN ((OLD.p1team IS DISTINCT FROM NEW.p1team OR OLD.p2team IS DISTINCT FROM NEW.p2team) AND (NEW.p1team != null AND NEW.p2team != null) AND NEW.turn = null)
BEGIN
		DECLARE team1 CURSOR FOR SELECT char1, char2, char3, char4 FROM teams WHERE id = NEW.p1team;
		DECLARE team2 CURSOR FOR SELECT char1, char2, char3, char4 FROM teams WHERE id = NEW.p2team;
		DECLARE character CURSOR;
		DECLARE CONTINUE HANDLER FOR NOT FOUND SET fin=1;
		UPDATE rooms SET status = 'PLAYING', turn = 0  WHERE id = new.id;
		OPEN team1;
			FETCH team1 INTO char1, char2, char3, char4;
			OPEN character FOR SELECT hp, mana, atk, def, spatk, spdef, speed FROM characters WHERE id = char1;
				FETCH character INTO hp, mana, atk, def, spatk, spdef, speed;
				INSERT INTO characterbattlehistory (turn, room, player, character, currhp, currmana, curratk, currdef, currspatk, currspdef, currspeed) VALUES(0, NEW.id, NEW.player1, hp, mana, atk, def, spatk, spdef, speed);
			CLOSE character;
			OPEN character FOR SELECT hp, mana, atk, def, spatk, spdef, speed FROM characters WHERE id = char2;
				FETCH character INTO hp, mana, atk, def, spatk, spdef, speed;
				INSERT INTO characterbattlehistory (turn, room, player, character, currhp, currmana, curratk, currdef, currspatk, currspdef, currspeed) VALUES(0, NEW.id, NEW.player1, hp, mana, atk, def, spatk, spdef, speed);
			CLOSE character;
			OPEN character FOR SELECT hp, mana, atk, def, spatk, spdef, speed FROM characters WHERE id = char3;
				FETCH character INTO hp, mana, atk, def, spatk, spdef, speed;
				INSERT INTO characterbattlehistory (turn, room, player, character, currhp, currmana, curratk, currdef, currspatk, currspdef, currspeed) VALUES(0, NEW.id, NEW.player1, hp, mana, atk, def, spatk, spdef, speed);
			CLOSE character;
			OPEN character FOR SELECT hp, mana, atk, def, spatk, spdef, speed FROM characters WHERE id = char4;
				FETCH character INTO hp, mana, atk, def, spatk, spdef, speed;
				INSERT INTO characterbattlehistory (turn, room, player, character, currhp, currmana, curratk, currdef, currspatk, currspdef, currspeed) VALUES(0, NEW.id, NEW.player1, hp, mana, atk, def, spatk, spdef, speed);
			CLOSE character;
		CLOSE team1;
		OPEN team2;
			FETCH team2 INTO char1, char2, char3, char4;
			OPEN character FOR SELECT hp, mana, atk, def, spatk, spdef, speed FROM characters WHERE id = char1;
				FETCH character INTO hp, mana, atk, def, spatk, spdef, speed;
				INSERT INTO characterbattlehistory (turn, room, player, character, currhp, currmana, curratk, currdef, currspatk, currspdef, currspeed) VALUES(0, NEW.id, NEW.player1, hp, mana, atk, def, spatk, spdef, speed);
			CLOSE character;
			OPEN character FOR SELECT hp, mana, atk, def, spatk, spdef, speed FROM characters WHERE id = char2;
				FETCH character INTO hp, mana, atk, def, spatk, spdef, speed;
				INSERT INTO characterbattlehistory (turn, room, player, character, currhp, currmana, curratk, currdef, currspatk, currspdef, currspeed) VALUES(0, NEW.id, NEW.player1, hp, mana, atk, def, spatk, spdef, speed);
			CLOSE character;
			OPEN character FOR SELECT hp, mana, atk, def, spatk, spdef, speed FROM characters WHERE id = char3;
				FETCH character INTO hp, mana, atk, def, spatk, spdef, speed;
				INSERT INTO characterbattlehistory (turn, room, player, character, currhp, currmana, curratk, currdef, currspatk, currspdef, currspeed) VALUES(0, NEW.id, NEW.player1, hp, mana, atk, def, spatk, spdef, speed);
			CLOSE character;
			OPEN character FOR SELECT hp, mana, atk, def, spatk, spdef, speed FROM characters WHERE id = char4;
				FETCH character INTO hp, mana, atk, def, spatk, spdef, speed;
				INSERT INTO characterbattlehistory (turn, room, player, character, currhp, currmana, curratk, currdef, currspatk, currspdef, currspeed) VALUES(0, NEW.id, NEW.player1, hp, mana, atk, def, spatk, spdef, speed);
			CLOSE character;
		CLOSE team2;
END