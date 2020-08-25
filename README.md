## Personal Promo site

- Bootstrapped with [`create-react-app`](https://github.com/facebook/create-react-app), then ejected to add custom ES6 decorator and LESS support to Webpack config.
- Added [`react-router`](https://github.com/ReactTraining/react-router#readme) in case more than one route (splash page) is needed later.
- Added [`react-redux`](https://github.com/reduxjs/react-redux) for local datastore.
- Hosted on single Heroku hobby dyno using a tiny [`express`](https://github.com/expressjs/express) implementation just to serve `/build` once it's generated.
- SSL auto-managed by Heroku.

https://www.nbadag.com
