-- Change db name
DROP DATABASE IF EXISTS eeriepapers_db;
CREATE DATABASE eeriepapers_db;

USE eeriepapers_db;

CREATE TABLE user (
    id              INT NOT NULL,
    username        VARCHAR(50) NOT NULL,
    first_name      VARCHAR(50),
    last_name       VARCHAR(30),
    email           VARCHAR(256),
    password        VARCHAR(100),
    PRIMARY KEY (id)
);

CREATE TABLE lore (
    id                INT NOT NULL,
    title             VARCHAR(256) NOT NULL,
    content           BLOB,
    upvote            INT,
    source            VARCHAR(500),
    created_at        DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at        DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

CREATE TABLE story (
    id                INT NOT NULL,
    title             VARCHAR(256) NOT NULL,
    content           BLOB,
    upvote            INT,
    user_id           INT,
    created_at        DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at        DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id)
    REFERENCES user(id)
    ON DELETE SET NULL
);

CREATE TABLE story_image (
    id              INT NOT NULL,
    story_id        INT NOT NULL,
    attachment_url  VARCHAR(500),
    PRIMARY KEY(ID),
    FOREIGN KEY (story_id)
    REFERENCES story(id)
    ON DELETE CASCADE
);

CREATE TABLE review (
    id                  INT,
    story_id            INT,
    user_id             INT,
    content             BLOB,
    created_at          DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at          DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(ID),
    FOREIGN KEY (story_id)
    REFERENCES story(id)
    ON DELETE CASCADE,
    FOREIGN KEY (user_id)
    REFERENCES user(id)
    ON DELETE SET NULL
);