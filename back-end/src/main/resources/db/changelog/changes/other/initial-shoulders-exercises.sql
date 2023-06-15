--liquibase formatted sql
--changeset <litvik>:<insert-shoulders-exercises>
INSERT INTO exercises (title, description, category, sub_category, image_path, gif_path)
VALUES
('Cable Leaning Lateral Raise', 'The Cable Leaning Lateral Raise is an exercise that targets the lateral deltoids, which are the muscles on the sides of the shoulders.',
'OTHER', 'SHOULDERS', 'back-end/src/main/resources/images/other/shoulders/Cable Leaning Lateral Raise.png', 'back-end/src/main/resources/gifs/other/shoulders/Cable Leaning Lateral Raise.gif'),
('Dumbbell Front Raise', 'The Dumbbell Front Raise is an exercise that primarily targets the front deltoids, which are the muscles at the front of the shoulders',
'OTHER', 'SHOULDERS', 'back-end/src/main/resources/images/other/shoulders/Dumbbell Front Raise.png', 'back-end/src/main/resources/gifs/other/shoulders/Dumbbell Front Raise.gif');