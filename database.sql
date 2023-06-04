
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "number" INTEGER NOT NULL,
    "position" VARCHAR (10) NOT NULL,
    "playstyle" VARCHAR NOT NULL
);

CREATE TABLE "game_stats" (
	"id" SERIAL PRIMARY KEY,
	"points" INTEGER NOT NULL, 
	"rebounds" INTEGER NOT NULL,
	"assists" INTEGER NOT NULL,
	"steals" INTEGER NOT NULL,
	"blocks" INTEGER NOT NULL,
	"fg" INTEGER NOT NULL,
	"fga" INTEGER NOT NULL,
	"turnovers" INTEGER,
	"game_score" FLOAT,
	"my_team_score" INTEGER,
	"opp_score" INTEGER,
	"date" DATE, 
	"user_id" INT REFERENCES "user" NOT NULL
	);