DROP TABLE IF EXISTS characters CASCADE;
DROP TABLE IF EXISTS favorites CASCADE;

CREATE TABLE characters (
    character_id serial PRIMARY KEY,
    character_class varchar (40),
    character_type varchar(40),
    main_skill text,
    leveling_skill text,
    weapon text,
    chest text,
    helm text,
    boots text,
    shield text,
    favorite text
);

INSERT INTO characters ( character_class, character_type, main_skill, leveling_skill, weapon, chest, helm, boots, shield, favorite) VALUES
('Amazon', 'Javazon', 'Lightning Fury', 'Plague Javelin', 'Titans Revenge', 'Treachery', 'Griffons Eye', 'War Travelers', 'Spirit', 'No'),
('Paladin', 'Hammerdin', 'Blessed Hammer', 'Fire Resist Aura', 'Heart of the Oak', 'Enigma', 'Shako', 'War Travelers', 'Spirit', 'No'),
('Paladin', 'Smiter', 'Smite', 'Blessed Hammer', 'Grief', 'Chains of Honor', 'Guillaumes Face', 'Gobline Toes', 'Herald of Zakarum', 'No'),
('Sorceress', 'Blizz Sorc', 'Blizzard', 'Charged Bolt', 'The Oculus', 'Skin of the Vipermagi', 'Shako', 'War Travelers', 'Spirit', 'No'),
('Necromancer', 'Poison Necro', 'Poison Nova', 'Summon or Bone', 'Deaths Web', 'Enigma', 'Rare Diadem', 'War Travelers', 'Spirit', 'No'),
('Assasin', 'Trapsin', 'Lightning Sentry', 'Wake of Fire', 'Rare +3 claws', 'Enigma', 'Rare Diadem', 'Aldurs Advance', 'no shield', 'No'),
('Barbarian', 'Zerker Barb', 'Berserk', 'Double Throw', 'Grief', 'Enigma', 'Guillaumes Face', 'Gore Riders', 'Storm Shield', 'No'),
('Druid', 'Fire druid', 'Fissure', 'Summon', 'Heart of the Oak', 'Enigma', 'Ravenlore', 'War travelers', 'Phoenix', 'No'),
('Sorceress', 'Light sorc', 'Lightning', 'Charged bolt', 'Heart of the Oak', 'Enigma', 'Griffons Eye', 'War travelers', 'Spirit', 'No'),
('Paladin', 'FoHdin', 'Fist of the Heavens', 'Blessed Hammer', 'Heart of the Oak', 'Enigma', 'Griffons Eye', 'War Travelers', 'Herald of Zakarum', 'No');


CREATE TABLE favorites (
 favorite_id serial,
 character_id int,
 PRIMARY KEY (favorite_id),
 CONSTRAINT fk_characters
    FOREIGN KEY(character_id)
        REFERENCES characters(character_id)
        ON DELETE CASCADE
);