DROP TABLE IF EXISTS Videos;

CREATE TABLE Videos (
    videoId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    userId INT NOT NULL,
    title VARCHAR(256) NOT NULL,
    description VARCHAR(512) NOT NULL,
    uploadDate DATE NOT NULL,
    durationSeconds INT NOT NULL,
    thumbnailUrl VARCHAR(512),
    FOREIGN KEY (userId) REFERENCES Users(userId)
);

CREATE OR REPLACE VIEW VideosWithUsers AS 
    SELECT Videos.*, Users.username, Users.fullName, Users.avatarUrl, Users.city, Users.age
    FROM Videos
    JOIN Users ON Videos.userId = Users.userId;

INSERT INTO Videos (userId, title, description, uploadDate, durationSeconds, thumbnailUrl) VALUES
    (1, 'Caidas graciosas  2022', 'Patricia Lozano', '2022-12-15', 321, 'https://upload.wikimedia.org/wikipedia/ca/2/2a/Fall_%282022_film%29.jpg'),
    (1, 'RHEM I SE blind playthrough', 'Daniel Ayala', '2019-09-09', 99999, 'https://thumbnails.pcgamingwiki.com/3/35/RHEM_I_SE_The_Mysterious_Land_cover.jpg/300px-RHEM_I_SE_The_Mysterious_Land_cover.jpg'),
    (2, 'How to cheat during IISSI exams', 'David Ruiz', '2023-05-24', 412, 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Cheating.JPG/1200px-Cheating.JPG'),
    (2, 'Full LotR Xtreme speedup', 'Daniel Ayala', '2022-01-01', 33, 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/Fotrcd-cover.jpg/220px-Fotrcd-cover.jpg');


