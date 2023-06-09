--liquibase formatted sql
--changeset <litvik>:<insert-middle-back-exercises>
INSERT INTO exercises (title, description, category, sub_category, image_path, gif_path)
VALUES
('Bent-over Reverse Grip Barbell Row', 'The "Bent-over Reverse Grip Barbell Row" is a compound exercise that primarily targets the muscles of the upper back, including the rhomboids, middle trapezius, and rear deltoids. It also engages the biceps and forearms to a lesser extent.',
'BACK', 'MIDDLE_BACK', 'back-end/src/main/resources/images/back/middle/Bent-over Reverse Grip Barbell Row.png', 'back-end/src/main/resources/gifs/back/middle/Bent-over Reverse Grip Barbell Row.gif'),
('Front Barbell Shrugs', 'The "Front Barbell Shrugs" is an exercise that primarily targets the upper trapezius muscles, which are responsible for elevating and retracting the shoulders.',
'BACK', 'MIDDLE_BACK', 'back-end/src/main/resources/images/back/middle/Wide Grip Lat Pulldown.png', 'back-end/src/main/resources/gifs/back/middle/Wide Grip Lat Pulldown.gif');