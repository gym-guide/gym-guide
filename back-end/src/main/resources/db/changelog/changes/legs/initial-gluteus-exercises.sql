--liquibase formatted sql
--changeset <litvik>:<insert-gluteus-exercises>
INSERT INTO exercises (title, description, category, sub_category, image_path, gif_path)
VALUES
('Barbell Rack Pull', 'The Barbell Good Morning is an exercise that primarily targets the muscles of the lower back, hamstrings, and glutes.',
'LEGS', 'GLUTEUS', 'back-end/src/main/resources/images/legs/gluteus/Barbell Good Morning.png', 'back-end/src/main/resources/gifs/legs/gluteus/Barbell Good Morning.gif'),
('Cable Donkey Kickback', 'The Cable Donkey Kickback is an exercise that primarily targets the gluteus maximus, which is the largest muscle in the buttocks',
'LEGS', 'GLUTEUS', 'back-end/src/main/resources/images/legs/gluteus/Cable Donkey Kickback.png', 'back-end/src/main/resources/gifs/legs/gluteus/Cable Donkey Kickback.gif');