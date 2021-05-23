# Memory Cardio
A small game based on card concentration idea. It helps to improve memory by memorizing the several cards which are presented to the player.

Table of Contents
-----------------

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)

Prerequisites
-------------
- [Node.js 12.0+](http://nodejs.org)

Getting Started
---------------

The easiest way to get started is to clone the repository:

```bash
# Get the latest snapshot
git clone https://github.com/alirazaalvi/memory.git myproject

# Change directory
cd myproject
```

Server
---------------
# Change directory
```bash
# Change directory
cd server

# Install NPM dependencies
npm install

# Start and watch the application for development
npm start

```

Client
---------------

```bash

# Change directory
cd myproject

# Install NPM dependencies
npm install

# Start and watch the application for development
npm start

# Access the application
http://localhost:8000

# Test
npm test

# Lint
npm run lint

# Lint fix
npm run lint:fix

# Coverage
npm run coverage
```

Project Structure
-----------------

| Name                               | Description                                                  |
| ---------------------------------- | ------------------------------------------------------------ |
| **server/index.js**/             | Contains the api endpoint to return the cards           |
| **src/features/cards**/             | Contains the game modules           |
| **src/features/cards/Container.tsx**/       | The container components which contains all of the logic.
| **src/features/cards/CardItem.tsx**/             | Presentational component which will display the individual card           |
| **src/features/cards/Header.tsx**/             | Header component which will display the header of the page           |
| **src/features/cards/Message.tsx**/             | Message component to display the statuses of card fetching on the home page | **src/features/cards/reducer.ts**/             | A reducer which contains the state of the card games
| **src/features/cards/types.ts**/         | Types for card games.
| **src/shared/appTypes.ts**/         | Shared app types.
| **src/shared/helpers.ts**/         | Application helper functions.
| **src/shared/messages.ts**/         | List of the messages used by appliation.
| **src/shared/store.ts**/         | Application redux store.
| .tslintrc                          | Tslint settings(Should be moved to eslint).
| .gitignore                         | Folder and files ignored by git.
| app.tsx                           | The main application file.
| package.json                       | NPM dependencies.
| package-lock.json                  | Contains exact versions of NPM dependencies in package.json. |

Api Endpoints
-----------------
 **Get cards**
-----------------
  Return a list of cards.

* **URL**

  http://localhost:3000/cards/:pairs

* **Method:**

  `GET`

*  **URL Params**

   `:pairs` [number]

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"cards":[{"id":4,"code":"0S","image":"https://deckofcardsapi.com/static/img/0S.png","images":{"svg":"https://deckofcardsapi.com/static/img/0S.svg","png":"https://deckofcardsapi.com/static/img/0S.png"},"value":"10","suit":"SPADES"}]}`

* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal server error." }`
