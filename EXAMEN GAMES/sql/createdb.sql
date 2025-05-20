DROP TABLE IF EXISTS Games;
DROP TABLE IF EXISTS Users;

CREATE TABLE Users (
  userId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  fullName VARCHAR(256) NOT NULL,
  username VARCHAR(64) UNIQUE NOT NULL,
  password VARCHAR(512) NOT NULL
);

CREATE TABLE Games (
    gameId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(256) NOT NULL,
    developer VARCHAR(256) NOT NULL,
    releaseYear INT NOT NULL,
    imageUrl VARCHAR(512),
    reviewScore INT NOT NULL
);

INSERT INTO Games (title, developer, releaseYear, imageUrl, reviewScore) VALUES
    ('Elden Ring', 'FromSoftware', 2022, 'https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg', 96),
    ('Super Smash Bros. Ultimate', 'Bandai Namco', 2018, 'https://upload.wikimedia.org/wikipedia/en/5/50/Super_Smash_Bros._Ultimate.jpg', 93),
    ('Genshin Impact', 'HoYoverse', 2020, 'https://upload.wikimedia.org/wikipedia/vi/0/0a/Genshin_Impact_cover.jpg', 84),
    ('God of War', 'Santa Monica Studio', 2018, 'https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg', 94),
    ('Stardew Valley', 'ConcernedApe', 2016, 'https://upload.wikimedia.org/wikipedia/en/f/fd/Logo_of_Stardew_Valley.png', 89),
    ('Microsoft Flight Simulator', 'Asobo Studio', 2020, 'https://upload.wikimedia.org/wikipedia/en/8/84/Microsoft_Flight_Simulator_2020_cover_art.png', 91);

-- La password de todos los usuarios es iissi
INSERT INTO Users (userId, fullName, username, password) VALUES
	(1, 'Alfredo Aguirre', 'alfredo', 'pbkdf2:sha256:150000$MjN72ikE$897d960e08be9150d943c747ff6194904fd325821945ff7d7f5c1d1d08b40bbd'),
	(2, 'Beatriz Barrios', 'beatriz', 'pbkdf2:sha256:150000$MjN72ikE$897d960e08be9150d943c747ff6194904fd325821945ff7d7f5c1d1d08b40bbd'),
	(3, 'Claudia Carmona', 'claudia', 'pbkdf2:sha256:150000$MjN72ikE$897d960e08be9150d943c747ff6194904fd325821945ff7d7f5c1d1d08b40bbd');
