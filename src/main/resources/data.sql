DELETE FROM category;
DELETE FROM sound;

INSERT INTO category (id, name, icon) values (1, 'Las', 'las.jpg');
INSERT INTO category (id, name, icon) values (2, 'Owady', 'zuk.jpg');
INSERT INTO category (id, name, icon) values (3, 'Miasto', 'miasto.jpg');
INSERT INTO category (id, name, icon) values (4, 'Ognicho', 'bonfire.jpg');
INSERT INTO category (id, name, icon) values (5, 'Morze', 'wave.jpg');
INSERT INTO category (id, name, icon) values (6, 'Marsjanie', 'outer.jpg');

INSERT INTO sound (id, category_id, name, icon, sound_file) values (1, 2, 'Kosmiczne owady', 'outer.jpg', '3-4-10001.mp3');
INSERT INTO sound (id, category_id, name, icon, sound_file) values (2, 2, 'Miejskie owady', 'miasto.jpg', '3-4-10004.mp3');
INSERT INTO sound (id, category_id, name, icon, sound_file) values (3, 2, 'Piekielne owady', 'bonfire.jpg', '3-4-10006.mp3');
INSERT INTO sound (id, category_id, name, icon, sound_file) values (4, 3, 'Morskie miasto', 'wave.jpg', '3-1-10004.mp3');
INSERT INTO sound (id, category_id, name, icon, sound_file) values (5, 3, 'Marsjańskie miasto', 'outer.jpg', '3-1-10004.mp3');