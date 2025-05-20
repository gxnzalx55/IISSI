DROP TABLE IF EXISTS Games;

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
