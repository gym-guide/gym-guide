--liquibase formatted sql
--changeset <litvik>:<insert-quadriceps-exercises>
INSERT INTO exercises (title, description, category, sub_category, image_path, gif_path)
VALUES
('Barbell Pin Squat', 'The Barbell Pin Squat is an exercise that targets the lower body, primarily the quadriceps, glutes, and hamstrings. It is a variation of the traditional squat that involves using safety pins to set the range of motion.',
'LEGS', 'QUADRICEPS', 'back-end/src/main/resources/images/legs/quadriceps/Barbell Pin Squat.png', 'back-end/src/main/resources/gifs/legs/quadriceps/Barbell Pin Squat.gif'),
('Lever Leg Extension', 'The Lever Leg Extension is an exercise that primarily targets the quadriceps muscles in the front of the thighs. It is performed using a lever machine specifically designed for leg extensions.',
'LEGS', 'QUADRICEPS', 'back-end/src/main/resources/images/legs/quadriceps/Lever Leg Extension.png', 'back-end/src/main/resources/gifs/legs/quadriceps/Lever Leg Extension.gif');