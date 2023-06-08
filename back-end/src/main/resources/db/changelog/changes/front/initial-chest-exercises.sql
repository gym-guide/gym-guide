--liquibase formatted sql
--changeset <litvik>:<insert-chest-exercises>
INSERT INTO exercises (title, description, category, sub_category, image_path, gif_path)
VALUES
('Bench Press', 'The "Bench Press" exercise is a compound movement that primarily targets the muscles of the chest, specifically the pectoralis major and minor. It also engages the shoulders, triceps, and upper back muscles.',
'FRONT', 'CHEST', 'back-end/src/main/resources/images/front/chest/BenchPress.png', 'back-end/src/main/resources/gifs/front/chest/BenchPress.gif'),
('Decline Bench Press', 'The "Decline Bench Press" is a variation of the traditional Bench Press exercise that primarily targets the lower chest muscles, specifically the lower portion of the pectoralis major. It also engages the shoulders, triceps, and upper back muscles to a lesser extent.',
'FRONT', 'CHEST', 'back-end/src/main/resources/images/front/chest/DeclineBenchPress.png', 'back-end/src/main/resources/gifs/front/chest/DeclineBenchPress.gif'),
('Incline Bench Press', 'The "Incline Bench Press" is a variation of the traditional Bench Press exercise that targets the upper chest muscles, specifically the upper portion of the pectoralis major. It also engages the shoulders, triceps, and upper back muscles to a lesser extent.',
'FRONT', 'CHEST', 'back-end/src/main/resources/images/front/chest/InclineBenchPress.png', 'back-end/src/main/resources/gifs/front/chest/InclineBenchPress.gif');
