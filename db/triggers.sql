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
				INSERT INTO characterbattlehistory (turn, room, player, character, currhp, currmana, curratk, currdef, currspatk, currspdef, currspeed) VALUES(0, NEW.id, NEW.player2, char1, hp, mana, atk, def, spatk, spdef, speed);
			CLOSE character;
			OPEN character(char2);
				FETCH character INTO hp, mana, atk, def, spatk, spdef, speed;
				INSERT INTO characterbattlehistory (turn, room, player, character, currhp, currmana, curratk, currdef, currspatk, currspdef, currspeed) VALUES(0, NEW.id, NEW.player2, char2, hp, mana, atk, def, spatk, spdef, speed);
			CLOSE character;
			OPEN character(char3);
				FETCH character INTO hp, mana, atk, def, spatk, spdef, speed;
				INSERT INTO characterbattlehistory (turn, room, player, character, currhp, currmana, curratk, currdef, currspatk, currspdef, currspeed) VALUES(0, NEW.id, NEW.player2, char3, hp, mana, atk, def, spatk, spdef, speed);
			CLOSE character;
			OPEN character(char4);
				FETCH character INTO hp, mana, atk, def, spatk, spdef, speed;
				INSERT INTO characterbattlehistory (turn, room, player, character, currhp, currmana, curratk, currdef, currspatk, currspdef, currspeed) VALUES(0, NEW.id, NEW.player2, char4, hp, mana, atk, def, spatk, spdef, speed);
			CLOSE character;
		CLOSE team2;
		UPDATE rooms SET status = 'PLAYING', turn = 0  WHERE id = NEW.id;
		INSERT INTO battlehistory (turn, room, player) VALUES (0, NEW.id, NEW.player1);
		INSERT INTO battlehistory (turn, room, player) VALUES (0, NEW.id, NEW.player2);
		RETURN NEW;
END;
$$
LANGUAGE 'plpgsql';

DROP TRIGGER IF EXISTS initgame ON rooms;
CREATE TRIGGER initgame 
AFTER UPDATE ON rooms
FOR EACH ROW 
WHEN (NEW.p1team IS DISTINCT FROM null AND NEW.p2team IS DISTINCT FROM null AND NEW.turn IS null)
EXECUTE PROCEDURE initgame_func();




CREATE OR REPLACE FUNCTION combat_func()
  RETURNS trigger AS
$$
DECLARE 
			battlehistory CURSOR (playername VARCHAR(50)) FOR SELECT character, action, actionvalue FROM battlehistory WHERE player = playername AND room = NEW.id;
			skill CURSOR (skillid int) FOR SELECT mode, damage, cost, type FROM skills WHERE id=skillid;
			stats CURSOR (charid int, playername VARCHAR(50)) FOR SELECT currhp, currmana, curratk, currdef, currspatk, currspdef, currspeed FROM characterbattlehistory WHERE id = charid AND room = NEW.id AND player = playername;
			basehp CURSOR (charid int) FOR SELECT hp FROM characters WHERE id = charid;
			p1basehp int;
			p2basehp int;
			p1charid int;
			p1action varchar(30);
			p1actionvalue int;
			p1mode VARCHAR(5);
			p1damage int;
			p1cost int;
			p1type int;
			p1hp int;
			p1mana int;
			p1atk int;
			p1def int;
			p1spatk int;
			p1spdef int;
			p1speed int;
			p2charid int;
			p2action varchar(30);
			p2actionvalue int;
			p2mode VARCHAR(5);
			p2damage int;
			p2cost int;
			p2type int;
			p2hp int;
			p2mana int;
			p2atk int;
			p2def int;
			p2spatk int;
			p2spdef int;
			p2speed int;
			p1newhp int;
			p2newhp int;
			p1newmana int;
			p2newmana int;
BEGIN	
		UPDATE rooms SET turn = NEW.turn+1 WHERE id = NEW.id;
		OPEN battlehistory(NEW.player1);
			FETCH battlehistory INTO p1charid, p1action, p1actionvalue;
		CLOSE battlehistory;
		OPEN battlehistory(NEW.player2);
			FETCH battlehistory INTO p2charid, p2action, p2actionvalue;
		CLOSE battlehistory;
		CASE p1action
		      WHEN 'SKILL' THEN
		      	OPEN skill(p1actionvalue);
					FETCH skill INTO p1mode, p1damage, p1cost, p1type;
				CLOSE skill;
		      WHEN 'BASIC' THEN
		      	p1damage=50;
		      	p1mode='ATK';
		      ELSE
		END CASE;
		OPEN stats(p1charid, NEW.player1);
			FETCH stats INTO p1hp, p1mana, p1atk, p1def, p1spatk, p1spdef, p1speed;
		CLOSE stats;
		OPEN basehp(p1charid);
			FETCH basehp INTO p1basehp;
		CLOSE basehp;
		CASE p2action
		      WHEN 'SKILL' THEN
		      	OPEN skill(p2actionvalue);
					FETCH skill INTO p2mode, p2damage, p2cost, p2type;
				CLOSE skill;
		      WHEN 'BASIC' THEN 
					p2damage=50;
		      		p2mode='ATK';
		      ELSE
		END CASE;
		OPEN stats(p2charid, NEW.player2);
			FETCH stats INTO p2hp, p2mana, p2atk, p2def, p2spatk, p2spdef, p2speed;
		CLOSE stats;
		OPEN basehp(p2charid);
			FETCH basehp INTO p2basehp;
		CLOSE basehp;

		IF p1speed>=p2speed THEN
			CASE p1mode
				WHEN 'ATK' THEN
						p1newmana = p1mana - p1cost;
						p2newhp = p2hp + p2def - p1atk - p1damage;
				WHEN 'SPATK' THEN
						p1newmana = p1mana - p1cost;
						p2newhp = p2hp + p2spdef - p1spatk - p1damage;
				WHEN 'HEAL' THEN
						p1newmana = p1mana - p1cost;
						p1newhp = p1hp + p1damage;
					IF p1newhp>p1basehp THEN
							p1newhp = p1basehp;
					END IF;
				ELSE
			END CASE;
			IF p2newhp>0 THEN
				CASE p2mode
					WHEN 'ATK' THEN
						p2newmana = p2mana - p2cost;
						p1newhp = p1hp + p1def - p2atk - p2damage;
					WHEN 'SPATK' THEN
						p2newmana = p1mana - p1cost;
						p1newhp = p1hp + p1spdef - p2spatk - p2damage;
					WHEN 'HEAL' THEN
						p2newmana = p2mana - p2cost;
						p2newhp = p2hp + p2damage;
						IF p2newhp>p2basehp THEN
							p2newhp = p2basehp;
						END IF;
					ELSE
				END CASE;
			END IF;
		ELSE		
			CASE p2mode
					WHEN 'ATK' THEN
						p2newmana = p2mana - p2cost;
						p1newhp = p1hp + p1def - p2atk - p2damage;
					WHEN 'SPATK' THEN
						p2newmana = p1mana - p1cost;
						p1newhp = p1hp + p1spdef - p2spatk - p2damage;
					WHEN 'HEAL' THEN
						p2newmana = p2mana - p2cost;
						p2newhp = p2hp + p2damage;
						IF p2newhp>p2basehp THEN
							p2newhp = p2basehp;
						END IF;
					ELSE
				END CASE;
			IF p1newhp>0 THEN
				CASE p1mode
					WHEN 'ATK' THEN
						p1newmana = p1mana - p1cost;
						p2newhp = p2hp + p2def - p1atk - p1damage;
					WHEN 'SPATK' THEN
						p1newmana = p1mana - p1cost;
						p2newhp = p2hp + p2spdef - p1spatk - p1damage;
					WHEN 'HEAL' THEN
						p1newmana = p1mana - p1cost;
						p1newhp = p1hp + p1damage;
						IF p1newhp>p1basehp THEN
							p1newhp = p1basehp;
						END IF;
					ELSE
				END CASE;
			END IF;
		END IF;

		UPDATE characterbattlehistory SET currhp = p1newhp, currmana = p1newmana, turn = NEW.turn+1 WHERE room = NEW.id AND player = NEW.player1 AND character = p1charid;
		UPDATE characterbattlehistory SET currhp = p2newhp, currmana = p2newmana, turn = NEW.turn+1 WHERE room = NEW.id AND player = NEW.player2 AND character = p2charid;
		UPDATE battlehistory SET turn=NEW.turn+1, action = '', actionvalue = null WHERE room = NEW.id AND player = NEW.player1 AND character = p1charid;
		UPDATE battlehistory SET turn=NEW.turn+1, action = '', actionvalue = null WHERE room = NEW.id AND player = NEW.player2 AND character = p2charid;
		IF p1newhp<=0 THEN
			UPDATE battlehistory SET character = null WHERE room = NEW.id AND player = NEW.player1 AND character = p1charid;
		END IF;
		IF p2newhp<=0 THEN
			UPDATE battlehistory SET character = null WHERE room = NEW.id AND player = NEW.player1 AND character = p2charid;
		END IF;
		RETURN NEW;
END;
$$
LANGUAGE 'plpgsql';

DROP TRIGGER IF EXISTS combat ON rooms;
CREATE TRIGGER combat 
AFTER UPDATE ON rooms
FOR EACH ROW 
WHEN ((NEW.p1status IS DISTINCT FROM OLD.p1status OR NEW.p2status IS DISTINCT FROM OLD.p2status) AND (NEW.p1status IS DISTINCT FROM '' AND NEW.p2status IS DISTINCT FROM ''))
EXECUTE PROCEDURE combat_func();