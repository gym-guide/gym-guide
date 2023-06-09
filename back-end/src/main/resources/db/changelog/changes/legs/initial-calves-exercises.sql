--liquibase formatted sql
--changeset <litvik>:<insert-calves-exercises>
INSERT INTO exercises (title, description, category, sub_category, image_path, gif_path)
VALUES
('Barbell Seated Calf Raise', 'The Barbell Seated Calf Raise is an exercise that primarily targets the calf muscles, specifically the gastrocnemius and soleus muscles.',
'LEGS', 'CALVES', 'back-end/src/main/resources/images/legs/calves/Barbell Seated Calf Raise.png', 'back-end/src/main/resources/gifs/legs/calves/Barbell Seated Calf Raise.gif'),
('Barbell Standing Calf Raise', 'The Barbell Standing Calf Raise is an exercise that targets the calf muscles, primarily the gastrocnemius and soleus muscles.',
'LEGS', 'CALVES', 'back-end/src/main/resources/images/legs/calves/Barbell Standing Calf Raise.png', 'back-end/src/main/resources/gifs/legs/calves/Barbell Standing Calf Raise.gif');
