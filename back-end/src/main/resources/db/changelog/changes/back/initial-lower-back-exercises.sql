--liquibase formatted sql
--changeset <litvik>:<insert-lower-back-exercises>
INSERT INTO exercises (title, description, category, sub_category, image_path, gif_path)
VALUES
('Barbell Rack Pull', 'The "Barbell Rack Pull" is an exercise that targets the muscles of the posterior chain, including the hamstrings, glutes, and lower back.',
'BACK', 'LOWER_BACK', 'back-end/src/main/resources/images/back/lower/Barbell Rack Pull.png', 'back-end/src/main/resources/gifs/back/lower/Barbell Rack Pull.gif'),
('Hyperextension', 'The "Hyperextension" exercise, also known as back extensions or back raises, is a core-strengthening exercise that primarily targets the muscles of the lower back, glutes, and hamstrings.',
'BACK', 'LOWER_BACK', 'back-end/src/main/resources/images/back/lower/Hyperextension.png', 'back-end/src/main/resources/gifs/back/lower/Hyperextension.gif');