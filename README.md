# nodejs-express-hw

Simple Express _Hello World!_ Node.js application prepared for Heroku deployment.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Invoke REST end-point on Heroku

```sh
curl https://[Heroku App Name].herokuapp.com/hello
```

## Run locally

Node needs to be installed locally. Make sure the [Heroku CLI](https://cli.heroku.com/) is installed.

```sh
git clone https://github.com/htutman/nodejs-express-hw.git
cd nodejs-express-hw
npm i
heroku local:start
```

### Invoke REST end-point locally

```sh
curl localhost:5000/hello
```
