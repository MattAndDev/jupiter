
# jupiter

> beat matching and mixing for the masses

## Tech specs

### Structure

#### Backend
The application setup is done in the main `./index.js` file.
All the logic resides in the `./inc/` folder separated in concerns by 1 level of subfolders: `api`, `db` and `socket`.
All of the subfolder **should** contain **one** `index.js` file with a class of the same name handling all methods, utils or helpers regarding the its scope.
> Handling of static content is achieved by Express.static('./public') in main `index.js` for now

#### Frontend
Not much there yet, but a Vue.js setup is present and buildable within the `./public/src` folder.
> Frontend will be shut down anyway in first release, this is just to prepare for the cms

`npm run watch-frontend`
to launch webpack dev server to do pure frontend dev (localhost:8080 with hot-reload and moduel replacement)

`npm run build-frontend` to just build frontend once.
