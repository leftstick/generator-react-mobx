generator-react-mobx
==================
[![NPM version][npm-image]][npm-url]
![][david-url]
![][dt-url]
![][license-url]

Yeoman generator for react, with mobx as state machine

> You can view the online demo at: [http://leftstick.github.io/generator-react-mobx](http://leftstick.github.io/generator-react-mobx)

## Prerequisites ##

1. Install [yeoman](http://yeoman.io/): `npm install -g yo`
2. Install __this__: `npm install -g generator-react-mobx`

> prepend with `sudo` if you are running on `*nix` OS.

## Use `generator-react-mobx` ##

`yo react-mobx`

> Answer questions as following demonstrated

![](https://raw.githubusercontent.com/leftstick/generator-react-mobx/master/docs/img/questions.png)

And then, project generated.

## Debug your app ##

The full featured `dev/dist` tools are provided, it's easy to start debugging your app.

Just move into the created directory with the given `project name`.

Run `npm start` to start a debug web server for the project.

Open [http://localhost:8080/](http://localhost:8080/) to see the playable skeleton, and have fun.


## Release your app ##

> Release means, generate output bundles by using `webpack`. It's good using the released resources as your production code.

Move the root of the created project.

Run `npm run dist` to compile all the source code into webpack bundles. And all required resources are generated into `{root}/dist/`.

You can copy the `dist` folder to anywhere you like, it's the released app.


## References ##

1. [es6-class](http://facebook.github.io/react/docs/reusable-components.html#es6-classes)
2. [decorator](https://github.com/wycats/javascript-decorators)
3. [react](http://facebook.github.io/react/)
4. [mobx](https://mobx.js.org/)
5. [webpack](https://webpack.js.org/)
6. [yeoman](http://yeoman.io/)


## LICENSE ##

[MIT License](https://raw.githubusercontent.com/leftstick/generator-react-mobx/master/LICENSE)


[npm-url]: https://npmjs.org/package/generator-react-mobx
[npm-image]: https://badge.fury.io/js/generator-react-mobx.png
[david-url]: https://david-dm.org/leftstick/generator-react-mobx.png
[dt-url]:https://img.shields.io/npm/dt/generator-react-mobx.svg
[license-url]:https://img.shields.io/npm/l/generator-react-mobx.svg
