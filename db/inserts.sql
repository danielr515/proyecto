INSERT INTO admins VALUES ('admin@test.com', 'admin', '81dc9bdb52d04dc20036dbd8313ed055', '', '');
INSERT INTO players VALUES ('player@test.com', 'player', '81dc9bdb52d04dc20036dbd8313ed055', '', '', 1000, 0);


INSERT INTO types (name) VALUES ('Ígneo');
INSERT INTO types (name) VALUES ('Naturaleza');
INSERT INTO types (name) VALUES ('Océano');
INSERT INTO types (name) VALUES ('Eléctrico');
INSERT INTO types (name) VALUES ('Montaña');
INSERT INTO types (name) VALUES ('Tóxico');
INSERT INTO types (name) VALUES ('Muerte');
INSERT INTO types (name) VALUES ('Sagrado');
INSERT INTO types (name) VALUES ('Sombra');

-- Ígneo
INSERT INTO typesrelation VALUES (1, 1, 0.5);
INSERT INTO typesrelation VALUES (1, 2, 2);
INSERT INTO typesrelation VALUES (1, 3, 0.5);
INSERT INTO typesrelation VALUES (1, 4, 1);
INSERT INTO typesrelation VALUES (1, 5, 0.5);
INSERT INTO typesrelation VALUES (1, 6, 1);
INSERT INTO typesrelation VALUES (1, 7, 2);
INSERT INTO typesrelation VALUES (1, 8, 1);
INSERT INTO typesrelation VALUES (1, 9, 1);
-- Naturaleza
INSERT INTO typesrelation VALUES (2, 1, 0.5);
INSERT INTO typesrelation VALUES (2, 2, 0.5);
INSERT INTO typesrelation VALUES (2, 3, 2);
INSERT INTO typesrelation VALUES (2, 4, 1);
INSERT INTO typesrelation VALUES (2, 5, 2);
INSERT INTO typesrelation VALUES (2, 6, 1);
INSERT INTO typesrelation VALUES (2, 7, 0.5);
INSERT INTO typesrelation VALUES (2, 8, 1);
INSERT INTO typesrelation VALUES (2, 9, 1);
--Océano
INSERT INTO typesrelation VALUES (3, 1, 2);
INSERT INTO typesrelation VALUES (3, 2, 0.5);
INSERT INTO typesrelation VALUES (3, 3, 0.5);
INSERT INTO typesrelation VALUES (3, 4, 1);
INSERT INTO typesrelation VALUES (3, 5, 2);
INSERT INTO typesrelation VALUES (3, 6, 0.5);
INSERT INTO typesrelation VALUES (3, 7, 1);
INSERT INTO typesrelation VALUES (3, 8, 1);
INSERT INTO typesrelation VALUES (3, 9, 1);
--Eléctrico
INSERT INTO typesrelation VALUES (4, 1, 1);
INSERT INTO typesrelation VALUES (4, 2, 1);
INSERT INTO typesrelation VALUES (4, 3, 2);
INSERT INTO typesrelation VALUES (4, 4, 0.5);
INSERT INTO typesrelation VALUES (4, 5, 0.5);
INSERT INTO typesrelation VALUES (4, 6, 1);
INSERT INTO typesrelation VALUES (4, 7, 1);
INSERT INTO typesrelation VALUES (4, 8, 2);
INSERT INTO typesrelation VALUES (4, 9, 1);
--Montaña
INSERT INTO typesrelation VALUES (5, 1, 2);
INSERT INTO typesrelation VALUES (5, 2, 0.5);
INSERT INTO typesrelation VALUES (5, 3, 0.5);
INSERT INTO typesrelation VALUES (5, 4, 2);
INSERT INTO typesrelation VALUES (5, 5, 1);
INSERT INTO typesrelation VALUES (5, 6, 1);
INSERT INTO typesrelation VALUES (5, 7, 1);
INSERT INTO typesrelation VALUES (5, 8, 1);
INSERT INTO typesrelation VALUES (5, 9, 1);
--Tóxico
INSERT INTO typesrelation VALUES (6, 1, 1);
INSERT INTO typesrelation VALUES (6, 2, 2);
INSERT INTO typesrelation VALUES (6, 3, 2);
INSERT INTO typesrelation VALUES (6, 4, 1);
INSERT INTO typesrelation VALUES (6, 5, 0.5);
INSERT INTO typesrelation VALUES (6, 6, 1);
INSERT INTO typesrelation VALUES (6, 7, 0.5);
INSERT INTO typesrelation VALUES (6, 8, 0.5);
INSERT INTO typesrelation VALUES (6, 9, 1);
--Muerte
INSERT INTO typesrelation VALUES (7, 1, 1);
INSERT INTO typesrelation VALUES (7, 2, 2);
INSERT INTO typesrelation VALUES (7, 3, 1);
INSERT INTO typesrelation VALUES (7, 4, 1);
INSERT INTO typesrelation VALUES (7, 5, 1);
INSERT INTO typesrelation VALUES (7, 6, 1);
INSERT INTO typesrelation VALUES (7, 7, 0.5);
INSERT INTO typesrelation VALUES (7, 8, 0.5);
INSERT INTO typesrelation VALUES (7, 9, 1);
--Sagrado
INSERT INTO typesrelation VALUES (8, 1, 1);
INSERT INTO typesrelation VALUES (8, 2, 1);
INSERT INTO typesrelation VALUES (8, 3, 1);
INSERT INTO typesrelation VALUES (8, 4, 0.5);
INSERT INTO typesrelation VALUES (8, 5, 1);
INSERT INTO typesrelation VALUES (8, 6, 2);
INSERT INTO typesrelation VALUES (8, 7, 2);
INSERT INTO typesrelation VALUES (8, 8, 0.5);
INSERT INTO typesrelation VALUES (8, 9, 2);
--Sombra
INSERT INTO typesrelation VALUES (9, 1, 0.5);
INSERT INTO typesrelation VALUES (9, 2, 1);
INSERT INTO typesrelation VALUES (9, 3, 1);
INSERT INTO typesrelation VALUES (9, 4, 1);
INSERT INTO typesrelation VALUES (9, 5, 1);
INSERT INTO typesrelation VALUES (9, 6, 1);
INSERT INTO typesrelation VALUES (9, 7, 0.5);
INSERT INTO typesrelation VALUES (9, 8, 2);
INSERT INTO typesrelation VALUES (9, 9, 2);


-- 1 Ígneo
-- 2 Naturaleza
-- 3 Océano
-- 4 Eléctrico
-- 5 Montaña
-- 6 Tóxico
-- 7 Muerte
-- 8 Sagrado
-- 9 Sombra

-- 	name VARCHAR(30)
-- 	class VARCHAR(10) --SKILL, PASSIVE, ULTIMATE, etc
-- 	mode VARCHAR(5) --ATK, SPATK, HEAL, PRIO etc
-- 	cost INT
-- 	damage INT
-- 	type INT
-- 	FOREIGN KEY(type) REFERENCES types(id),
-- 	UNIQUE(name)

--Tex_lizardman      Tipo Océano       ATK>ATKSP     DEF>SPDEF   


-- 1 Ataque acuático con lanza				usuarios: Noy
INSERT INTO skills (name, class, mode, cost, damage, type) VALUES ('Perforador oceánico', 'SKILL', 'ATK', 25, 70, 3);
-- 2 Curación de lagartos					usuarios: Noy
INSERT INTO skills (name, class, mode, cost, damage, type) VALUES ('Regeneración de reptil', 'SKILL', 'HEAL', 50, 60, 2);
-- 3 Pasiva de Noy, x2 de velocidad a ataques tipo agua
INSERT INTO skills (name, class, mode, cost, damage, type) VALUES ('Afinidad acuática', 'PASSIVE', 'SPEED', 0, 0, 3);
-- 4 Definitiva de Noy
INSERT INTO skills (name, class, mode, cost, damage, type) VALUES ('Empujón hidráulico', 'ULTIMATE', 'ATK', 100, 120, 3);

INSERT INTO characters (name, hp, mana, atk, def, spatk, spdef, speed, skill1, skill2, passive, ultimate, type1, type2) VALUES ('Noy, lancero de Atlantis', 400, 210, 100, 100, 45, 60, 75, 1, 2, 3, 4, 3, null );

-- 5 Placaje de montaña						usuarios: Rockfen, Wawe
INSERT INTO skills (name, class, mode, cost, damage, type) VALUES ('Carrera rocosa', 'SKILL', 'ATK', 25, 80, 5);
-- 6 Cornada ígnea								usuarios: Rockfen
INSERT INTO skills (name, class, mode, cost, damage, type) VALUES ('Cornada ígnea', 'SKILL', 'ATK', 15, 60, 1);
-- 7 Pasiva de Rockfen, los ataques de fuego le curan
INSERT INTO skills (name, class, mode, cost, damage, type) VALUES ('Absorción de magma', 'PASSIVE', 'HEAL', 0, 0, 1);
-- 8 Definitiva de Rockfen
INSERT INTO skills (name, class, mode, cost, damage, type) VALUES ('Apisonadora ardiente', 'ULTIMATE', 'ATK', 100, 120, 1);

INSERT INTO characters (name, hp, mana, atk, def, spatk, spdef, speed, skill1, skill2, passive, ultimate, type1, type2) VALUES ('Rockfen, el golem de magma', 450, 180, 70, 120, 45, 90, 45, 5, 6, 7, 8, 1, 5 );

-- 9 Un ataque eléctrico						usuarios: Ynax
INSERT INTO skills (name, class, mode, cost, damage, type) VALUES ('Trueno', 'SKILL', 'SPATK', 25, 75, 4);
-- 10 Zona de fuego causada por un rayo			usuarios: Ynax
INSERT INTO skills (name, class, mode, cost, damage, type) VALUES ('Incendio eléctrico', 'SKILL', 'ATK', 15, 55, 1);
-- 11 Pasiva de Ynax, recibe daño supereficaz de ataques de fuego
INSERT INTO skills (name, class, mode, cost, damage, type) VALUES ('Cuerpo de acero', 'PASSIVE', 'WEAK', 0, 0, 1); -- WEAK, lo hace débil al tipo
-- 12 Definitiva de Ynax
INSERT INTO skills (name, class, mode, cost, damage, type) VALUES ('Ruptura relámpago', 'ULTIMATE', 'ATK', 100, 120, 4);

INSERT INTO characters (name, hp, mana, atk, def, spatk, spdef, speed, skill1, skill2, passive, ultimate, type1, type2) VALUES ('Ynax, el centinela', 420, 250, 50, 70, 130, 70, 95, 9, 10, 11, 12, 4, null );

-- 13 Curación del ermitaño					usuarios: Wawe
INSERT INTO skills (name, class, mode, cost, damage, type) VALUES ('Meditación', 'SKILL', 'HEAL', 50, 60, 5);
-- 14 Pasiva de Wawe, recibe la mitad de daño de ataques físicos
INSERT INTO skills (name, class, mode, cost, damage, type) VALUES ('Armadura peluda', 'PASSIVE', 'RED', 0, 0, 1); -- RED = REDUCTION, ignora los tipos
-- 15 Definitiva de Wawe
INSERT INTO skills (name, class, mode, cost, damage, type) VALUES ('Fragmento sísmico', 'ULTIMATE', 'ATK', 100, 120, 4);

INSERT INTO characters (name, hp, mana, atk, def, spatk, spdef, speed, skill1, skill2, passive, ultimate, type1, type2) VALUES ('Wawe, el ermitaño', 380, 200, 80, 60, 50, 60, 105, 5, 13, 14, 15, 5, null );


