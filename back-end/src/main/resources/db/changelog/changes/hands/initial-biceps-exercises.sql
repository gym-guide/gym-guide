--liquibase formatted sql
--changeset <litvik>:<insert-biceps-exercises>
INSERT INTO exercises (title, description, category, sub_category, image_path, gif_path)
VALUES
('Dumbbell Incline Biceps Curl', 'The "Dumbbell Incline Biceps Curl" is an exercise that specifically targets the biceps muscles.',
'HANDS', 'BICEPS', 'back-end/src/main/resources/images/hands/biceps/Dumbbell Incline Biceps Curl.png', 'back-end/src/main/resources/gifs/hands/biceps/Dumbbell Incline Biceps Curl.gif'),
('Dumbbell Standing Biceps Curl', 'The "Dumbbell Standing Biceps Curl" is a popular exercise that targets the biceps muscles, which are located in the upper arms.',
'HANDS', 'BICEPS', 'back-end/src/main/resources/images/hands/biceps/Dumbbell Standing Biceps Curl.png', 'back-end/src/main/resources/gifs/hands/biceps/Dumbbell Standing Biceps Curl.gif');