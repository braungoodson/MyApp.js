/**
* JavaScript MVC Sub-System for Micro-MVC
*
* @author <a href="mailto:braungoodson@gmail.com">Braun Goodson</a>
* @version 1.0.0.0 beta
* @namespace MVCSubSystem
*/
var MVCSubSystem = MVCSubSystem || {};
// ----------------------------------------------------------------------------------
/**
* iObserver Class : Acts as an interface for subscribers.
*
* @namespace MVCSubSystem
* @class iObserver
* @constructor
*/
MVCSubSystem.iObserver = function () {
	/**
	* Id of the observer.
	* @property id
	* @type String
	*/
	this.id = "iObserver";
}
/**
* iObserver Update Method : Is an interface meant to be defined by an implementing
*  class. Gets called by MVCSubSystem.Model.notify
*
* @function update
* @returns {void} Doesn't return anything.
*/
MVCSubSystem.iObserver.prototype.update = function () {
	console.log("* iObserver update!");
}
// ----------------------------------------------------------------------------------
/**
* AbstractModel Class
*
* @namespace MVCSubSystem
* @class AbstractModel
* @constructor
*/
MVCSubSystem.AbstractModel = function () {
	/**
	* Registry of observables.
	* @property registry
	* @type DataStructures.LinkedList
	*/
	this.registry = new DataStructures.LinkedList();
}
/**
* AbstractModel Attach Method : Attaches an observable.
*
* @param {Object} observable adds an iObservable to the model's registry.
* @returns {void}
*/
MVCSubSystem.AbstractModel.prototype.attach = function (o) {
	this.registry.add(o);
}
/**
* AbstractModel Detach Method : Detaches an observable.
*
* @param {Object} observable removes an iObservable from the model's registry
* @returns {void}
*/
MVCSubSystem.AbstractModel.prototype.detach = function (o) {
	this.registry.remove(o);
}
/**
* AbstractModel Notify Method : Iterates over the registry, and calls
*  update on each observable.
*
* @returns {void}
*/
MVCSubSystem.AbstractModel.prototype.notify = function () {
	var l = this.registry.length;
	while (l--) {
		this.registry[l].update();
	}
}
// ----------------------------------------------------------------------------------
/**
* AbstractController Class
*
* @namespace MVCSubSystem
* @class AbstractController
* @constructor
*/
MVCSubSystem.AbstractController = function () {
	/**
	* This controller's view.
	* @property view
	* @type Object
	*/
	this.view = null;
	/**
	* This controller's model.
	* @property model
	* @type Object
	*/
	this.model = null;
}
/**
* AbstractController Class iObservable Inheritance
*/
MVCSubSystem.AbstractController.prototype = new MVCSubSystem.iObserver ();
/**
* AbstractController Construct Method : Sets this controller's view, and model. Also
*  attaches this controller to this controller's model.
*
* @param {Object} view The view for this controller's view.
* @returns {void}
*/
MVCSubSystem.AbstractController.prototype.construct = function (view) {
	this.view = view;
	this.model = this.view.getModel();
	this.model.attach(this);
}
/**
* AbstractController Destruction Method : Detaches this controller from this
*  controller's model.
*/
MVCSubSystem.AbstractController.prototype.destruct = function () {
	this.model.detach(this);
}
// ----------------------------------------------------------------------------------
/**
* AbstractView Class
*
* @namespace MVCSubSystem
* @class AbstractView
* @constructor
*/
MVCSubSystem.AbstractView = function () {
	/**
	* This view's model.
	* @property model
	* @type Object
	*/
	this.model = null;
	/**
	* This view's controller.
	* @property controller
	* @type Object
	*/
	this.controller = null;
}
MVCSubSystem.AbstractView.prototype = new MVCSubSystem.iObserver ();
/**
* AbstractView Construct Method : Sets this views's model, and controll. Also
*  attaches this view to this model.
*
* @param {Object} model The model for this views's model.
* @returns {void}
*/
MVCSubSystem.AbstractView.prototype.construct = function (model) {
	this.model = model;
	this.controller = new MVCSubSystem.AbstractController();
	this.model.attach(this);
}
/**
* AbstractView Destruct Method : Detaches this view from this view's model.
*
* @returns {void}
*/
MVCSubSystem.AbstractView.prototype.destruct = function () {
	this.model.detach(this);
}
/**
* AbstractView Update Method : Calls this view's draw method.
*
* @returns {void}
*/
MVCSubSystem.AbstractView.prototype.update = function () {
	this.draw();
}
/**
* AbstractView Initialize Method : Calls this view's controller making method.
*
* @returns {void}
* @see MVCSubSystem.AbstractView.makeController()
*/
MVCSubSystem.AbstractView.prototype.initialize = function () {
	this.controller = this.makeController();
}
/**
* AbstractView makeController Method : Calls this view's controller making method.
*
* @returns {Object} controller A controller for this view.
* @see MVCSubSystem.AbstractController()
*/
MVCSubSystem.AbstractView.prototype.makeController = function () {
	return new MVCSubSystem.AbstractController();
}
/**
* AbstractView Draw Method : Will redraw the view.
*
* @returns {void}
*/
MVCSubSystem.AbstractView.prototype.draw = function () {
	console.log("* AbstractView drawing!");
}
/**
* AbstractView getModel Method : Returns this view's model.
*
* @returns {Object} model This view's model.
* @see MVCSubSystem.AbstractModel()
*/
MVCSubSystem.AbstractView.prototype.getModel = function () {
	return this.model;
}
/**
* AbstractView getController Method : Returns this view's controller.
*
* @returns {Object} controller This view's controller.
* @see MVCSubSystem.AbstractController()
*/
MVCSubSystem.AbstractView.prototype.getController = function () {
	return this.controller;
}