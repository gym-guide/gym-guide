--liquibase formatted sql
--changeset <litvik>:<insert-hamstrings-exercises>
INSERT INTO exercises (title, description, category, sub_category, image_path, gif_path)
VALUES
('Band Standing Leg Curl', 'The Band Standing Leg Curl is an exercise that targets the hamstrings, the muscles located at the back of your thighs.',
'LEGS', 'HAMSTRINGS', 'back-end/src/main/resources/images/legs/hamstrings/Band Standing Leg Curl.png', 'back-end/src/main/resources/gifs/legs/hamstrings/Band Standing Leg Curl.gif'),
('Lever Lying Leg Curl', 'The Lever Lying Leg Curl is an exercise that targets the hamstrings, the muscles located at the back of your thighs.',
'LEGS', 'HAMSTRINGS', 'back-end/src/main/resources/images/legs/hamstrings/Lever Lying Leg Curl.png', 'back-end/src/main/resources/gifs/legs/hamstrings/Lever Lying Leg Curl.gif');