--liquibase formatted sql
--changeset <litvik>:<insert-upper-back-exercises>
INSERT INTO exercises (title, description, category, sub_category, image_path, gif_path)
VALUES
('Dumbbell Incline Row', 'The "Dumbbell Incline Row" is a compound exercise that primarily targets the muscles of the upper back, including the rhomboids, trapezius, and rear deltoids. It also engages the biceps and the core muscles for stability.',
'BACK', 'UPPER_BACK', 'back-end/src/main/resources/images/back/upper/Dumbbell Incline Row.gif', 'back-end/src/main/resources/gifs/back/upper/Dumbbell Incline Row.gif'),
('Front Barbell Shrugs', 'The "Front Barbell Shrugs" exercise is a compound movement that primarily targets the trapezius muscles, particularly the upper portion. It also engages the muscles of the shoulders and upper back.',
'BACK', 'UPPER_BACK', 'back-end/src/main/resources/images/back/upper/Front Barbell Shrugs.png', 'back-end/src/main/resources/gifs/back/upper/Front Barbell Shrugs.gif');