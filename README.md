MyApp.js
=========

MyApp.js is an example front-end application using an object-oriented MVC architecture with an observable pattern. Both the framework and example application are written in JavaScript adhering to ECMAScript 5. The MVC sub-system utilizes prototype chaining for fast inheritance. The framework is very extensible.

* To give this thing a test run, just open the `MyApp.html` page in a browser.
* To view the docs, just open `jsdoc/index.html` in a browser.

`DataStructures.js` contains simple data structure faceds that inehrit from the `Array()` object. They are meant for a semantic.
`MVCSubSystem.js` relies on the data structure semantics, and contains its own set of "abstract classes" that can be inherited to create your own MVC application.
`MyApp.js` contains an example application of the framework. This is a good place to start..

--
2013-01-10

The sub-system is complete, I think. We'll release in beta.

--
2013-01-07

The architecture is still in design, while the framework reflects only what is designed.
