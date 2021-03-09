 ![Players connect banner](https://github.com/MichaelChorak/projectTech/blob/main/public/images/banner.png)

_Players connection_ is een applicatie waar mensen hen ideale partner kunnen vinden om een bordspel mee te spelen.
Ik bouw hier voor een filtersysteem waardoor mensen gemakkelijker de perfecte match zullen vinden.

---

### Table of contents

* Core of concept
* How to install
* Features
* Sources
* License

---

## Core of concept
The core concept of *Players Connection* exists out of a certain UX design made in HTML/CSS/JS where u can add information about you to let other uses fill out the search forms and find specific users. 

So basically it's a filter system.

---

## How to install

With Github it's very to install these files to your computer. I will show you the ways how to install this project.

* Download the files from my github:  [Download here](https://github.com/MichaelChorak/projectTech)
* Use the git clone command in any CLI to clone the files to your folders: git clone https://github.com/MichaelChorak/projectTech.git

---

## How to make it work?
> Since it's a application which makes use of a database. You need to setup your own database & database connection

There are different databases which could work, but this project is based on NodeJS __plus__ Mongoose.
So i strongly advice you to read this document:  [Mongoose ~ Getting started](https://mongoosejs.com/docs/)

I can also strongly recommend to use MongoDBCompas to easily check out what's happening behind the scenes and have a quick view at your Database, Schemes & more.

My code already includes a connection with the database, but my credentials has to be replaced with yours. My password is stored in a .env file so it's not visible for outsiders. To make a connection, just create your own .env file with your credentials and you should be ready to go.

---

## Features

- [x] Add your information to a database to be found for other users
- [x] Use the filter system to find certain users

## Used sources

* [Mongoose](https://mongoosejs.com/docs/)
* [CRUD operations Mongoose](https://docs.mongodb.com/manual/crud/)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [Express Handlebars](https://www.npmjs.com/package/express-handlebars)
* [Handlebars template engine](https://handlebarsjs.com/)
* [Bodyparser](https://www.npmjs.com/package/body-parser)

## Licenses

This project is licensed under MIT License.
