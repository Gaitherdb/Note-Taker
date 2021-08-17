
# Note Taker
  ## ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

  ## Description

  An application that allows a user to write, save, delete, and view notes. The application is hosted by Heroku and is therefore always running. The note texts are saved to a database which lives on Heroku's server. This means that anyone who accesses the deployed application will be able to edit the same database and interact with the same notes.
  
  Here is the deployed URL: [Note Taker](https://arcane-inlet-18974.herokuapp.com/). The base url takes you to the default paramater, which is the homepage to get started. Click on the button and you will be redirected to the `https://arcane-inlet-18974.herokuapp.com/notes`. To view the API from the database, enter `https://arcane-inlet-18974.herokuapp.com/api/notes`. Any additional parameters will redirect you to the homepage. 

  While creating this app, I used Node.js and Express.js to host a local server, which allowed my front-end to work with my back-end database. The front-end javascript fetches a GET, POST, or DELETE from my back-end files, which interacts with the database. 

  Installation and Usage sections pertain to running the local server. If you want to use a deployed version of the app, use the heroku url. 
  
  

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  To install Node.js, follow the documentation [Node.js](https://coding-boot-camp.github.io/full-stack/nodejs/how-to-install-nodejs)

  To install necessary dependencies for your local server, run the following command: 
  ```
  npm i
  ```
  
  ## Usage
  Set the path to the Note-Taker folder in the terminal, run the server.js file by typing `node server.js`. Access the local url at `http://localhost:3001` and try adding, saving, or deleting a note. Notice these changes appear in the db.json file. 

![NoteTakerExample](https://user-images.githubusercontent.com/83731627/129653973-8a02a6c9-7c13-4463-8fdd-14adedd24dc3.png)

  ## License  
  This project is licensed under the terms of the [MIT License](https://opensource.org/licenses/MIT).

  ## Contributing
  I am the sole author of this repo and I am not currently looking for contributors.


  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at Gaitherdb@gmail.com. You can find more of my work at [Gaitherdb](https://github.com/Gaitherdb).
