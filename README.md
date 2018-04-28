[![CircleCI](https://circleci.com/gh/aconfee/tinycrit-api.svg?style=svg)](https://circleci.com/gh/aconfee/tinycrit-api)

# TinyCrit
###### api.tinycrit.com

### Description
Super secret.

## Development

### Setup

Assuming you're starting from scratch, here's how to set everything up for development. 
1. Clone and download this repo. 
2. Run `npm install` to download dependencies.
3. Happy developing! 

### Stack
* Node / Express (generated from Express generator [https://expressjs.com/en/starter/generator.html])

### Environment and Workflow
* `npm start` to start running on port 8080.
* `npm test` to run all unit tests.
* .vscode/launch.json included with VS Code defaults.
* Currently there's no branching strategy and only one environment -- the production environment. Just develop on master and deploy to prod. 

### Build

Currently, no building is necessary. 

### Deploy

Simply push to, or merge a commit to the master branch. 

This repo is being watched by CircleCI [https://circleci.com/gh/aconfee/tinycrit-api]. It will be deployed to the tinycrit-prod Elastic Beanstalk environment and live on www.tinycrit.com. 

### Architecture
* Served on Elastic Beanstalk
* This repo is the API only. No view is served from here.  