[![tests](https://github.com/quaelin/node_api_exercise/actions/workflows/tests.yml/badge.svg)](https://github.com/quaelin/node_api_exercise/actions/workflows/tests.yml)
![Static Badge](https://img.shields.io/badge/lines%20coverage-87.5-green?color=%2334D058)

# Node.js API Exercise

This repo provides a basic framework for a Node.js restful API for our live
coding exercise. Be sure to have this code checked out locally and have Node/npm
set up prior to the interview.

## Running locally

The app was built using Node.js 20.12.2

```sh
$ npm ci
$ npm run db:create
$ npm run db:populate
$ npm start
```

The app will then be available at http://127.0.0.1:3000/

## Working with tests

```sh
$ npm ci
$ npm run db:create:tests
$ npm test
```
