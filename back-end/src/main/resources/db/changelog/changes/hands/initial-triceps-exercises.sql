--liquibase formatted sql
--changeset <litvik>:<insert-triceps-exercises>
INSERT INTO exercises (title, description, category, sub_category, image_path, gif_path)
VALUES
('Bench Dip on Floor', 'The "Bench Dip on Floor" is an exercise that primarily targets the triceps muscles, located on the back of the upper arms.',
'HANDS', 'TRICEPS', 'back-end/src/main/resources/images/hands/triceps/Bench Dip on floor.png', 'back-end/src/main/resources/gifs/hands/triceps/Bench Dip on Floor.gif'),
('Cable Triceps Pushdown (V-bar)', 'The "Cable Triceps Pushdown (V-bar)" is an exercise that specifically targets the triceps muscles, which are located on the back of the upper arms. ',
'HANDS', 'TRICEPS', 'back-end/src/main/resources/images/hands/triceps/Cable Triceps Pushdown (V-bar).png', 'back-end/src/main/resources/gifs/hands/triceps/Cable Triceps Pushdown (V-bar).gif');