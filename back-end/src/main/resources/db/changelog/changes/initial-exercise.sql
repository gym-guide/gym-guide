--liquibase formatted sql
--changeset <litvik>:<insert-initial-exercise>
INSERT INTO exercises (title, description, category, sub_category, image_path, gif_path) VALUES
('Bench Press', 'Bench Press Basic Exercise', 'FRONT', 'CHEST',
 'back-end/src/main/resources/images/BenchPress.png', 'back-end/src/main/resources/gifs/BenchPress.gif'),
('Decline Bench Press', 'Decline Bench Press for lower chest', 'FRONT', 'CHEST',
 'back-end/src/main/resources/images/DeclineBenchPress.png', 'back-end/src/main/resources/gifs/DeclineBenchPress.gif'),
('Incline Bench Press', 'Incline Bench Press for upper chest', 'FRONT', 'CHEST',
 'back-end/src/main/resources/images/InclineBenchPress.png', 'back-end/src/main/resources/gifs/InclineBenchPress.gif');
