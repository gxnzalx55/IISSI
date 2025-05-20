USE LabRed;

DROP TABLE IF EXISTS Votes;
DROP TABLE IF EXISTS Photos;
DROP TABLE IF EXISTS Users;

CREATE TABLE Users (
	userId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	username VARCHAR(64) UNIQUE NOT NULL,
	password VARCHAR(256) NOT NULL
);

CREATE TABLE Photos (
	photoId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(128) NOT NULL,
	description VARCHAR(512),
	url VARCHAR(512) NOT NULL,
	visibility VARCHAR(16) NOT NULL,
	userId INT NOT NULL,
	FOREIGN KEY (userId) REFERENCES Users (userId),
	CONSTRAINT ValidVisibility CHECK (visibility in ('Public', 'Private'))
);

CREATE TABLE Votes (
	voteId 		INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	`value` 		INT NOT NULL,
	userId INT NOT NULL,
	photoId INT NOT NULL,
	FOREIGN KEY (userId) REFERENCES Users (userId),
	FOREIGN KEY (photoId) REFERENCES Photos (photoId),
	CONSTRAINT ValidVote CHECK (`value` BETWEEN 0 AND 5),
  	CONSTRAINT OneVotePerPhoto UNIQUE (userId, photoId)
);

CREATE VIEW V_votes AS
SELECT DISTINCT photoId,avg(VALUE) avgValue FROM votes 
	GROUP BY photoId;