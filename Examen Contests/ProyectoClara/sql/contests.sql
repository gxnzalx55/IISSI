DROP TABLE IF EXISTS Contests;

CREATE TABLE Contests (
    contestId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(256) NOT NULL,
    organizer VARCHAR(512) NOT NULL,
    contestDate DATE NOT NULL,
    prize DEC(6,2) NOT NULL,
    description VARCHAR(512) NOT NULL,
    imageUrl VARCHAR(512)
);

INSERT INTO Contests (name, organizer, contestDate, prize, description, imageUrl) VALUES
    ('Pencil drawing XIX edition', 'Daniel Ayala', '2023-08-08', 99.99, 'Send a pencil drawing of any theme. Best three will be chosen as winners', 'https://upload.wikimedia.org/wikipedia/commons/0/08/Pencils_hb.jpg'),
    ('CoD tournament', 'Jesús Lozano', '2023-09-09', 777.00, '5 rounds. No perks. No custom controllers.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/DualShock_3.jpg/1200px-DualShock_3.jpg'),
    ('Jumping tournament', 'Daniel Ayala', '2020-05-21', 200.00, 'Whoever makes the longest jump will be the winner. Free drinks for all participants.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/US_Navy_070422-N-5215E-003_A_Special_Olympics_athlete_participates_in_the_long_jump_at_the_Naval_Academy.jpg/250px-US_Navy_070422-N-5215E-003_A_Special_Olympics_athlete_participates_in_the_long_jump_at_the_Naval_Academy.jpg'),
    ('Physics olympics', 'Pablo Hernández', '2024-01-01', 2250.50, 'Participants will have 5 hours to complete a physics exam with 879 questions', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Acceleration_components.JPG/220px-Acceleration_components.JPG');
