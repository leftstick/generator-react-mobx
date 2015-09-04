# generator-material-react
==================
[![NPM version][npm-image]][npm-url]
![][david-url]

Yeoman generator for React Material-UI with webpack

> You can view the online demo at: [http://leftstick.github.io/generator-material-react](http://leftstick.github.io/generator-material-react)

## Prerequisites ##

1. Install [yeoman](http://yeoman.io/): `npm install -g yo`
2. Install [gulp](http://gulpjs.com/): `npm install -g gulp`
3. Install __this__: `npm install -g generator-material-react`

## Use `generator-material-react` ##

`yo material-react`

> Answer questions as following demonstrated

![](https://raw.githubusercontent.com/leftstick/generator-material-react/master/docs/img/questions.png)

And then, project generated.

> More read: [es6-class](http://facebook.github.io/react/docs/reusable-components.html#es6-classes)

## Debug your app ##

The full featured `gulp` and `webpack` are embedded, it's easy to start debugging your app.

Just move into the root folder of created project.

Run `gulp dev` to start a debug web server.

Open [http://localhost:8080/webpack-dev-server/index.html](http://localhost:8080/webpack-dev-server/index.html), and have fun.


## Release your app ##

> Release means, generate output bundles by using `webpack`. It's good using the released resources as your production code.

Move the root of the created project.

Run `gulp release` to compile all the source code into webpack bundles. And all required resources are generated into `{root}/build/`.

You can copy the `build` folder to anywhere you like, it's the released app.

### Like have a try with the released app? ###

Install [sero-cli](https://github.com/leftstick/Sero-cli): `npm install -g sero-cli`

Move into `{root}/build/`

Run `sero server -r . -p 8080` to start a static server.

Open [http://localhost:8080](http://localhost:8080) to watch the released version


## References ##

1. [yeoman](http://yeoman.io/)
2. [gulp](http://gulpjs.com/)
3. [webpack](http://webpack.github.io/)
4. [es6-features](https://github.com/lukehoban/es6features)
5. [react](http://facebook.github.io/react/)
6. [material-ui](http://material-ui.com)
7. [fontawesome](http://fontawesome.io/)


## LICENSE ##

[MIT License](https://raw.githubusercontent.com/leftstick/generator-material-react/master/LICENSE)


[npm-url]: https://npmjs.org/package/generator-material-react
[npm-image]: https://badge.fury.io/js/generator-material-react.png
[david-url]: https://david-dm.org/leftstick/generator-material-react.png
