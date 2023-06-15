--liquibase formatted sql
--changeset <litvik>:<insert-neck-exercises>
INSERT INTO exercises (title, description, category, sub_category, image_path, gif_path)
VALUES
('Weighted Lying Side Lifting Head', 'The Weighted Lying Side Lifting Head exercise is a neck strengthening exercise that targets the muscles on the side of the neck, particularly the sternocleidomastoid muscles.',
'OTHER', 'NECK', 'back-end/src/main/resources/images/other/neck/Weighted Lying Side Lifting Head.png', 'back-end/src/main/resources/gifs/other/neck/Weighted Lying Side Lifting Head.gif'),
('Weighted Seated Neck Extension', 'The Weighted Seated Neck Extension is an exercise that targets the muscles at the back of the neck, specifically the cervical extensor muscles.',
'OTHER', 'NECK', 'back-end/src/main/resources/images/other/neck/Weighted Seated Neck Extension.png', 'back-end/src/main/resources/gifs/other/neck/Weighted Seated Neck Extension.gif');