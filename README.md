## Fantasy API

Node JS & Express API project.

### Routes

- `http://localhost:3000/api/v1/movies/harry-potter/` -> Get All Harry Potter Movies
- `http://localhost:3000/api/v1/movies/harry-potter/:id` -> Get Harry Potter Movie by Id
- `http://localhost:3000/api/v1/movies/harry-potter?q=<search_term>` -> Search for a Harry Potter Movie by title

- `http://localhost:3000/api/v1/characters/harry-potter/` -> Get All Harry Potter Characters
- `http://localhost:3000/api/v1/characters/harry-potter/:id` -> Get Harry Potter Character by Id
- `http://localhost:3000/api/v1/characters/harry-potter?q=<search_term>` -> Search for a Harry Potter Character by name

- `http://localhost:3000/api/v1/movies/star-wars/` -> Get All Star Wars Movies
- `http://localhost:3000/api/v1/movies/star-wars/:id` -> Get Star Wars Movie by Id
- `http://localhost:3000/api/v1/movies/star-wars?q=<search_term>` -> Search for a Star Wars Movie by title

- `http://localhost:3000/api/v1/characters/star-wars/` -> Get All Star Wars Characters
- `http://localhost:3000/api/v1/characters/star-wars/:id` -> Get Star Wars Character by Id
- `http://localhost:3000/api/v1/characters/star-wars?q=<search_term>` -> Search for a Star Wars Character by name

### Scripts

- `npm start` -> Run development server with hot reloading (using nodemon)
- `npm test` -> Runs tests (currently 6/6 passing)

### Tech stack

- Node.js
- Express
- Morgan (logger middleware)
- JSON (for data)
- Testing with Mocha, Chai and Chai-http

To Do:

- Lord of the rings!
- Improved filtering & Searching

### Credits

Harry Potter Data - [Gulsah Demiryurek](https://www.kaggle.com/gulsahdemiryurek/harry-potter-dataset)
Star Wars Data - [Joe Young](https://www.kaggle.com/jsphyg/star-wars)
Lord of The Rings Data - [Paul Mooney](https://www.kaggle.com/paultimothymooney/lord-of-the-rings-data)
