# generator-material-react
==================
[![NPM version][npm-image]][npm-url]
![][david-url]
![][dt-url]
![][license-url]

Yeoman generator for React Material-UI with webpack

> You can view the online demo at: [http://leftstick.github.io/generator-material-react](http://leftstick.github.io/generator-material-react)

## Prerequisites ##

1. Install [yeoman](http://yeoman.io/): `npm install -g yo`
2. Install __this__: `npm install -g generator-material-react`

> prepend with `sudo` if you are running on `*nix` OS.

## Use `generator-material-react` ##

`yo material-react`

> Answer questions as following demonstrated

![](https://raw.githubusercontent.com/leftstick/generator-material-react/master/docs/img/questions.png)

And then, project generated.

> More read: [es6-class](http://facebook.github.io/react/docs/reusable-components.html#es6-classes)

## Debug your app ##

The full featured `dev/dist` tools are provided, it's easy to start debugging your app.

Just move into the created directory with the given `project name`.

Run `npm start` to start a debug web server for the project.

Open [http://localhost:8080/](http://localhost:8080/) to see the playable skeleton, and have fun.


## Release your app ##

> Release means, generate output bundles by using `webpack`. It's good using the released resources as your production code.

Move the root of the created project.

Run `npm run dist` to compile all the source code into webpack bundles. And all required resources are generated into `{root}/build/`.

You can copy the `build` folder to anywhere you like, it's the released app.

### Like have a try with the released app? ###

Install [sero-cli](https://github.com/leftstick/Sero-cli): `npm install -g sero-cli`

Move into `{root}/build/`

Run `sero server -p 8080 -h`, a static web server launched at port 8080.

Open [http://localhost:8080](http://localhost:8080) to watch the released version


## References ##

1. [yeoman](http://yeoman.io/)
2. [webpack](http://webpack.github.io/)
3. [es6-features](https://github.com/lukehoban/es6features)
4. [react](http://facebook.github.io/react/)
5. [material-ui](http://material-ui.com)


## LICENSE ##

[MIT License](https://raw.githubusercontent.com/leftstick/generator-material-react/master/LICENSE)


[npm-url]: https://npmjs.org/package/generator-material-react
[npm-image]: https://badge.fury.io/js/generator-material-react.png
[david-url]: https://david-dm.org/leftstick/generator-material-react.png
[dt-url]:https://img.shields.io/npm/dt/generator-material-react.svg
[license-url]:https://img.shields.io/npm/l/generator-material-react.svg
