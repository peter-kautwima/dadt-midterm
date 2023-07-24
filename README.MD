# Exploratory Data Analysis and Web Application

This repository contains code for both an Exploratory Data Analysis (EDA) as well as a web application.

## Dataset

The dataset being used for this project is the cars.csv dataset from https://corgis-edu.github.io/corgis/csv/cars/. This is a dataset about cars and how much fuel they use.

## Exploratory Data Anaylsis

The EDA is done using a Jupyter Notebook. It explores the data, cleans it and prepares it for loading into a MySQL database. The main library used for this is Pandas.

## Web Application

The web application is written using Express, Mustache & Sequelize. It interfaces with the database to provide insights and answers to the questions that were posed on this dataset.

### Folder Structure

The web application code is structured in the webapp directory with a public folder for static files which include CSS files in the css subdirectory and JavaScript files in the js subdirectory. The src directory contains all the source code which is broken down below.

- config
  The config directory contains the Sequelize config file that is used to connect to the MySQL database.
- controllers
  The controllers directory contains files that are responsible for the direct interfacing with the database. There is a controller for each MySQL table as well as a controller that runs commands pertaining to the questions intended to be answered.
- models
  The models directory contains Sequelize models which describe the data formats of the MySQL tables. Sequelize uses these to run commands on the database tables.
- routes
  The routes directory contains all the endpoints that can be accessed from the web application. It is also responsible to fetching any data those routes need.
- utils
  The utils directory contains helper variables used across the app.
- views
  The views directory contains all the Mustache templates that are then rendered in the front-end.

- root
  The root directory contains the entry point of the Express app which sets up the Express web server.

## Setup

### Exploratory Data Analysis

In order to setup EDA, you'll need to have Python and pip installed on your machine. From there run the following commands to setup a virtual environment, activate the virtual environment and install requirements respectively.

```
python -m venv venv
source venv/Scripts/activate (Windows) or source venv/bin/active (Unix)
pip install -r Requirements.txt

```

From there you can run eda.ipynb in VS Code or in a Jupyter Notebook server.

### Web Application

In order to setup the web application, you'll need to have Node.js and NPM installed on your machine. From there you can run `npm install` to install the dependencies. Then you can run `npm run dev` to start the server and the application will be avaialable at http://localhost:5001 by default, unless you change the configuration of the port.

#### Configuration

The web application also requires a .env file to be added which contains a variable called MYSQL_PASSWORD which will contain the password of the MySQL user used to access the MySQL instance. By default, the root user is used.

Should you want to change the port the web application runs on, you can optionally add a PORT variable in the .env file.

## References

Sources used:

- https://highlightjs.org/
- https://plotly.com/javascript/
- https://github.com/janl/mustache.js
- https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
- https://www.geeksforgeeks.org/how-to-structure-my-application-in-express-js/
