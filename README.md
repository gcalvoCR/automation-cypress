# cypress-base

cypress base project
Last update : 07/11/2023

=======

This project uses Typescript and Cypress version `12.7`.

## Set up

- `npm install`               to install the dependencies
- `npx cypress open`          to open the app

## Useful commands
- `npm init -y`               to start a npm package
- `npm install cypress@10.6.0`to install cypress specific version 10.6.0 
- `export KEY_NAME=VALUE`     set up an env variable in MAC
- `set KEY_NAME=VALUE`        to set up an env variable in Windows
=======

## Running in Docker
- `docker run -it -v $PWD:/e2e -w /e2e cypress/included:10.6.0`
- `docker run -it -v ${PWD}:/e2e -w /e2e cypress/included:10.6.0`

  - `it`                      = interactive terminal
  - `-v ${PWD}:/e2e`          = map current folder to /e2e in the container
  - `-w /e2e`                 = set working directory to e2e
  - `-e CYPRESS_baseUrl=...`  = pass environment variable CYPRESS_baseUrl
  - `cypress/included:9.2.0`  = name of the Docker image with tag

## Allure:

- `npm install -g allure-commandline --save-dev` to install globally.
- `npm install allure-commandline --save-dev` to install locally.
- `allure generate` to generate the html report.
- `allure serve` to generate and serve the html report.
- `allure open` to serve the html report.

## Useful links
- [cypress documentation](https://docs.cypress.io/guides/overview/why-cypress)
- [Allure documentation](https://www.npmjs.com/package/allure-commandline)


Blogs
- [Stop using Page Objects](https://www.cypress.io/blog/2019/01/03/stop-using-page-objects-and-start-using-app-actions/)
- [Cypress recipes](https://github.com/cypress-io/cypress-example-recipes#application-actions)

### Random notes (reminders):

- _Mocha_ is the testrunner for Cypress.
- Node.js 12 or 14 and above is required.
---

### By: Gabriel Calvo Vargas

=======
¿Do you want to get in touch? Let's talk [here](https://www.linkedin.com/in/gcalvoCR/).
