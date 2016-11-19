# Angular Material Test App

Testing Angular Material UI framework and npm/gulp app builds

### Prerequisites

Make sure you have `npm` and `gulp` installed on your system:

```
npm -v
gulp -v
```

### Installing

Build css and js vendor files by running just `gulp` or with:

```
npm run build-vendor
```

Next, build js application by running:

```
npm run build-app
```

This will create `public/css/build.css` and `public/js/build.js` files, which are already included in the `public/index.html`.

### Workflow

Each time you change something under `app/` folder, application needs to be built again. There is  a command which builds application automatically when you save any working file:

```
npm run watch-app
```


## Application structure

Entry point for angular application is located in `app/main.js`. From there on, custom built modules are included, so feel free to structure application for your own needs.


## Deployment

Point your domain root to public/index.html, which is the main enty point for the application.

### Built With

* [AngularMaterial](https://material.angularjs.org/latest/) - UI framework
* [AngularJS](https://angularjs.org/) - Js framework (Angular 1 is used)
* [npm](https://www.npmjs.com/) - Package manager
* [gulp](http://gulpjs.com/) - Build and automation tool

### Authors

* **Vicko Franić** - *Initial app* - [GitHub](https://github.com/vickofranic)