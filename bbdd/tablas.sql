CREATE TABLE champions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    role VARCHAR(50) NOT NULL
);

CREATE TABLE advantages (
    id INT PRIMARY KEY AUTO_INCREMENT,
    champion_id INT,
    vs_champion_id INT,
    advantage TEXT,
    FOREIGN KEY (champion_id) REFERENCES champions(id),
    FOREIGN KEY (vs_champion_id) REFERENCES champions(id)
);

CREATE TABLE disadvantages (
    id INT PRIMARY KEY AUTO_INCREMENT,
    champion_id INT,
    vs_champion_id INT,
    disadvantage TEXT,
    FOREIGN KEY (champion_id) REFERENCES champions(id),
    FOREIGN KEY (vs_champion_id) REFERENCES champions(id)
);

CREATE TABLE notes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    champion_id INT,
    vs_champion_id INT,
    note TEXT,
    usuario VARCHAR(20)
    FOREIGN KEY (champion_id) REFERENCES champions(id),
    FOREIGN KEY (vs_champion_id) REFERENCES champions(id)
);
