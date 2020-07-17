# Installation

- [Installation](#installation)
  - [Pre Requisites](#pre-requisites)
    - [Short Version](#short-version)
  - [Set enviromental variables](#set-enviromental-variables)
  - [Troubleshooting](#troubleshooting)

> I assume you are using Linux or Mac, but it's similar in Windows. At the end there is a [FAQ](#troubleshooting) if you ran into known issues.

First of all you have to clone the code using git (also you can just [download the code][]).

```sh
> git clone https://github.com/Israel-Laguan/fast-shopping-backend.git
> cd fast-shopping-backend
```

## Pre Requisites

- [ ] `npm` v6.14 +
- [ ] `node` v12.18 +
- [ ] A good terminal
- [ ] A Text Editor like VSCode
- [ ] A browser like Firefox or Chrome, or a client like Postman/Insomnia for testing

### Short Version

```sh
> yarn install
# or
> npm i
```

Now you should have all the folders and files to run the server, the only problem is that we need a database working. To that end lets explore 2 different ways.

- OPTION 1: Run your own DB
  - Download and install MySQL
  - Make sure you have installed MySQL server
  - Create a database (without creating tables) and copy the credentials in `.env` file
- OPTION 2: Use an online DB (like [Heroku's ClearDB][herokus cleardb])
  - Basically just spin an instance and copy the credentials in the project's env

At this point we should have 3 sets of DBs credentials in the `.env` file. If you need more with this check [this info](#set-enviromental-variables). When you are positive that DBs are working and you can connect, let's move to migration and seed.

- `set-db:dev` to leave DB ready for seeding. Note that this will wipe all existing data if it exists. It apply all the migrations: create tables, seed them and be ready for action!

- `npm run dev` to start the local server

- Enter [localhost:8080][] in a browser to see the Swagger documentation for the server.

## Set enviromental variables

As we are professional here we need at least 3 environments: Development (for modify code at will), Test (to check if everything is working fine), and Production (The one that clients will use). Each one needs a different database (you can use the same DB for dev and test *if you know what are you doing*).

This project uses `dotenv` and `cross-env` to manage enviromental variables and avoid exposing valuable info like the credentials of your server. We can put all the secret info in the file `.env` as it is not shared in public (note in [.gitignore](.gitignore) we are not sharing this file). But it also implies that you have to take care of add the variables' values yourself.

Thats why you can see in [.env example](.env.example) that we have 4 set of variables:

- Development Database credentials, starting with `DEV_DB_`.
- Test Database credentials, starting with `TEST_DB_`.
- DProduction Database credentials, starting with `DB_`.
- Other Variables

Each DB's credential have 6 kind of variables:

```sh
DB_HOST= # If you are in local this is `localhost`, otherwise its the IP or domain adress
DB_DATABASE= # This is the name of the database, for example `test`
DB_USER= # The name for the user accesing mysql, for example `test`
DB_PORT= # Usually is `5432`
DB_PASSWORD= # This is the password you setup when created the user used, for example `test`
DATABASE_URL= # This space is for heroku DBs
```

The last one is special. If you fill it, it contains all the info needed so the other variables won't be used. You can think of it as use `*_DB_URL` OR use the other variables. That style for DB credentials are used in Heroku as when provisioning an Heroku App with a [Heroku's Postgres Add on][herokus postgres], it automagically generates the URL and provision your app with such variable; that way you don't have to meddle with variables. For any other case use the other variables.

Notice that you have to fill for 3 DBs, one for each environment (DEV, TEST and PROD). Don't forget to fill these variables before starting the code or test it.

For the other variable:

```sh
PRODUCTION_URL= # Add a link to whitelist, expected https://fast-shopping.herokuapp.com
```

> Don't put anything in the file [.env-example](.env-example), it is only for copy=>paste=>change-name to `.env`. If you add variables to this file and commit you are exposing your secret to the world, including to some hackers hungry for free DBs!

---

> You usually don't need to add quotes to any variable, so for example if your password is "Sup3erS3cr3+" you can setup the variable `DB_PASSWORD=Sup3erS3cr3+`. Just try not to use hash symbol (#) in your pass or any variable! (in such case use quotes). Some characters also needs scaping symbol (for example `\'` to get a quote `)

## Troubleshooting

If you ran in another issue, don't hesitate to reach to the [Issues Section][issues-url] and help me debug the code commenting your problem.

- While migrating `NODE_TLS_REJECT_UNAUTHORIZED is not a program... etc` in Windows, i.e. not recognizing env variables.

> Decomment the line in `.npmrc` file provided. Check [this issue][npmrc issue] for more info.

- \<Add your question here>

[npmrc issue]: https://github.com/kentcdodds/cross-env/issues/192#issuecomment-513341729
[download the code]: https://github.com/Israel-Laguan/fast-shopping-backend/archive/master.zip
[herokus cleardb]: https://elements.heroku.com/addons/cleardb
[issues-url]: https://github.com/Israel-Laguan/fast-shopping-backend/issues
[localhost:8080]: http://localhost:8080/
