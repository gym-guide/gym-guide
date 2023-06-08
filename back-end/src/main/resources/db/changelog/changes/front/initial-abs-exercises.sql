--liquibase formatted sql
--changeset <litvik>:<insert-abs-exercises>
INSERT INTO exercises (title, description, category, sub_category, image_path, gif_path)
VALUES
('Hulf Crunch', 'The "Half Crunch" exercise is a core strengthening exercise that targets the abdominal muscles. It is a modified version of the traditional crunch exercise, focusing on the upper portion of the abdominal muscles.',
'FRONT', 'ABS', 'back-end/src/main/resources/images/front/abs/Hulf Crunch.png', 'back-end/src/main/resources/gifs/front/abs/Hulf Crunch.gif'),
('Heel Touchers', 'The "Heel Touchers" exercise is a core exercise that targets the oblique muscles, specifically the external obliques. It involves a twisting motion that engages the sides of your abdomen. ',
'FRONT', 'ABS', 'back-end/src/main/resources/images/front/abs/Heel Touchers.png', 'back-end/src/main/resources/gifs/front/abs/Heel Touchers.gif');