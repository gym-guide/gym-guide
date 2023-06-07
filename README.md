[GYM GUIDE: Client DEMO LINK](https://gym-guide.github.io/gym-guide/)

[GYM GUIDE: Server DEMO LINK](https://gym-guide.github.io/gym-guide/)

# Get started

1. clone repository -`git clone https://github.com/gym-guide/gym-guide.git`

2. install modules for Frontend

   - `cd front-end`
   - `npm install`
   - `cd ../`

3. install modules for Backend
   - `cd back-end`
   - `npm install`
   - `cd ../`

## WORKING WITH PROJECT

1.  Switch to main and pull the latest main

    - `git checkout main`
    - `git pull origin main`

2.  Create new branch with name `<feature-name>` (ONLY CAPSLOCK NAME) to develop your feature

    - `git checkout -b <feature-name>`

3.  Write your code

4.  Add your changes

    - `git add .` - add all
    - `git add front-end/.` - add all changes in front-end/
    - `git add back-end/.` - add all changes in back-end/

5.  Commit your changes

    - `git commit -m '<description>'`

6.  Push your commit to GitHub

    - `git push origin <feature-name>`

7.  Make pull reques

8.  Wait for review and approvement

7.  Merge to main

### Solving conflicts

1. get the latest main

   - `git checkout main`
   - `git pull origin main`

2. rebase your branch in the end of main branch (`lg` - to check)

   - `git checkout <feature-name>`
   - `git rebase main`

3. push your changes

   - `git push origin <feature-name>`

# npm Scripts and Commands

You should run listed commands in project root directory

## for FRONTEND

- `npm run dev` - start dev server for Frontend;
- `npm run deploy` - deploys the project to gh-pages

- `npm run lint` - run linter test in `front-end/` dir;
- `npm run build` - compiles project in front-end/build/

## for BACKEND
//Please enter commands
- `npm run dev:api` - start dev server for Backend;

- `npm run lint:api` - run linter test in `back-end/` dir;
- `npm run fix-style:api` - autofomat with prettier and autofix some lint issues
- `npm run build:api` - compiles project in api/build/
- `npm run start:api` - compiles project in api/build/ and starts it on your PC