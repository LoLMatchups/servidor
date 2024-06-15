-- Insertar champions
INSERT INTO champions (name, role) VALUES ('Ahri', 'Mid'), ('Garen', 'Top'), ('Jinx', 'ADC');

-- Buscar por rol
SELECT * FROM champions WHERE role = 'Mid';

-- Escoger Campeón VS
SELECT * FROM champions;

-- Mostrar Ventajas y Desventajas del Enfrentamiento
SELECT a.advantage, d.disadvantage
FROM champions c1
JOIN advantages a ON c1.id = a.champion_id
JOIN disadvantages d ON c1.id = d.champion_id
WHERE c1.name = 'Ahri' AND a.vs_champion_id = (SELECT id FROM champions WHERE name = 'Zed');

-- Añadir Notas
INSERT INTO notes (champion_id, vs_champion_id, note) VALUES (
    (SELECT id FROM champions WHERE name = 'Ahri'),
    (SELECT id FROM champions WHERE name = 'Zed'),
    'Play safe until level 6.'
);

-- Mostrar Notas
SELECT note FROM notes 
WHERE champion_id = (SELECT id FROM champions WHERE name = 'Ahri') 
AND vs_champion_id = (SELECT id FROM champions WHERE name = 'Zed');
