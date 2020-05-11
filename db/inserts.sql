INSERT INTO admins VALUES ('admin@test.com', 'admin', '1234', '', '');
INSERT INTO players VALUES ('player@test.com', 'player', '1234', '', '', 1000, 0);


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


