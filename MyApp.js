/**
* JavaScript MVC MyApp with Micro-MVC
*
* @author <a href="mailto:braungoodson@gmail.com">Braun Goodson</a>
* @version 1.0.0.0
* @namespace MyApp
*/
var MyApp = MyApp || {};
/**
* Namespace for Application Objects
* @namespace MyApp.Objects
*/
MyApp.Objects = MyApp.Objects || {};
/**
* Namespace for Application Models
* @namespace MyApp.Models
*/
MyApp.Models = MyApp.Models || {};
/**
* Namespace for Application Views
* @namespace MyApp.Views
*/
MyApp.Views = MyApp.Views || {};
/**
* Namespace for Application Controllers
* @namespace MyApp.Controllers
*/
MyApp.Controllers = MyApp.Controllers || {};
/**
* User Object : An object representing a User.
*
* @namespace MyApp.Objects
* @class User
* @constructor
* @param {Number} id The id of this user.
* @param {String} name The name of this user.
* @param {String} password The password for this user.
* @returns {void}
*/
MyApp.Objects.User = function (id,name,password,type) {
	/**
	* Id of the User.
	* @property id
	* @type Number
	*/
	this.id = id;
	/**
	* Name of the User.
	* @property id
	* @type String
	*/
	this.name = name;
	/**
	* Password for the User.
	* @property id
	* @type String
	*/
	this.password = password;
	/**
	* Type of the User.
	* @property type
	* @type String
	*/
	this.type = type;
}
// ----------------------------------------------------------------------------------
/**
* Users Model : The model for users.
*
* @namespace MyApp.Models
* @class UsersModel
* @constructor
* @see MVCSubSystem.AbstractModel
* @param {DataStructures.Stack} users The bunch of users.
* @returns {void}
*/
MyApp.Models.UsersModel = function (users) {
	this.users = users;
}
MyApp.Models.UsersModel.prototype = new MVCSubSystem.AbstractModel();
// ----------------------------------------------------------------------------------
/**
* User's Table's Controller : A controller for the User's Table's View.
*
* @namespace MyApp.Controllers
* @class UsersTableController
* @constructor
* @see MVCSubSystem.AbstractController
* @param {AbstractView} view This controller's view.
* @returns {void}
*/
MyApp.Controllers.UsersTableController = function (view) {
	this.view = view;
}
MyApp.Controllers.UsersTableController.prototype = new MVCSubSystem.AbstractController();
/**
* On Click Event Handler : This controller's method for handling click events.
*
* @returns {void}
*/
MyApp.Controllers.UsersTableController.prototype.onclick_eventHandler = function () {
	console.log("* UsersTableController.onclick_eventHandler!")
}
// ----------------------------------------------------------------------------------
/**
* User's Table View : A table view. Essentially a data grid.
*
* @namespace MyApp.Views
* @class UsersTableView
* @constructor
* @see MVCSybSystem.AbstractView
* @param {AbstractModel} model This view's model.
* @returns {void}
*/
MyApp.Views.UsersTableView = function (model) {
	this.construct(model);
	this.initialize();
	this.stage = document.createElement('div');
	this.stage.style.border = '1px solid black';
	this.stage.style.margin = "5px 5px 5px 5px";
	this.stage.style.padding = "5px 5px 5px 5px";
	this.datagrid = document.createElement('div');
	this.controls = document.createElement('div');
	this.pushNewUserButton = document.createElement('input');
	this.pushNewUserButton.type = 'submit';
	this.pushNewUserButton.value = 'pushNewUser()';
	var uguid = 0;
	this.pushNewUserButton.onclick = function () {
		myUsersModel.users.push(new MyApp.Objects.User(uguid++,'newUser'+uguid,'newPassword'+uguid,(function(){return uguid % 2 ? 'admin' : 'emp';}())));
		myUsersModel.notify();
	}
	this.popUserButton = document.createElement('input');
	this.popUserButton.type = 'submit';
	this.popUserButton.value = 'popUser()';
	this.popUserButton.onclick = function () {
		myUsersModel.users.pop();
		myUsersModel.notify();
	}
	this.controls.appendChild(this.pushNewUserButton);
	this.controls.appendChild(this.popUserButton);
	this.stage.appendChild(this.controls);
	this.stage.appendChild(this.datagrid);
	document.body.appendChild(this.stage);
}
MyApp.Views.UsersTableView.prototype = new MVCSubSystem.AbstractView();
/**
* makeController : This view's method for making it's controller.
*
* @returns {MyApp.Controllers.TableController}
*/
MyApp.Views.UsersTableView.prototype.makeController = function () {
	return new MyApp.Controllers.UsersTableController(this);
}
/**
* draw : This view's method for drawing itself based of it's model's data.
*
* @returns {void}
*/
MyApp.Views.UsersTableView.prototype.draw = function () {
	this.datagrid.innerHTML = '';
	for (var i in this.model.users)
		if (typeof this.model.users[i] === "object")
			this.datagrid.innerHTML += 
				this.model.users[i].id + " | " +
				this.model.users[i].name + " | " +
				this.model.users[i].password + " | " +
				this.model.users[i].type + 
				'<br />';
}
// ----------------------------------------------------------------------------------
/**
* User's Graph's Controller : A controller for the User's Graph's View.
*
* @namespace MyApp.Controllers
* @class UsersGraphController
* @constructor
* @see MVCSubSystem.AbstractController
* @param {AbstractView} view This controller's view.
* @returns {void}
*/
MyApp.Controllers.UsersGraphController = function (view) {
	this.view = view;
}
MyApp.Controllers.UsersGraphController.prototype = new MVCSubSystem.AbstractController();
/**
* On Click Event Handler : This controller's method for handling click events.
*
* @returns {void}
*/
MyApp.Controllers.UsersGraphController.prototype.onclick_eventHandler = function () {
	console.log("* UsersGraphController.onclick_eventHandler!")
}
// ----------------------------------------------------------------------------------
/**
* User's Graph View : A graph view of how many users there are.
*
* @namespace MyApp.Views
* @class UsersGraphView
* @constructor
* @see MVCSybSystem.AbstractView
* @param {AbstractModel} model This view's model.
* @returns {void}
*/
MyApp.Views.UsersGraphView = function (model) {
	this.construct(model);
	this.initialize();
	this.stage = document.createElement('div');
	this.stage.style.border = '1px solid black';
	this.stage.style.margin = "5px 5px 5px 5px";
	this.stage.style.padding = "5px 5px 5px 5px";
	this.graph = document.createElement('div');
	this.stage.appendChild(this.graph);
	document.body.appendChild(this.stage);
}
MyApp.Views.UsersGraphView.prototype = new MVCSubSystem.AbstractView();
/**
* makeController : This view's method for making it's controller.
*
* @returns {MyApp.Controllers.GraphController}
*/
MyApp.Views.UsersGraphView.prototype.makeController = function () {
	return new MyApp.Controllers.UsersGraphController(this);
}
/**
* draw : This view's method for drawing itself based of it's model's data.
*
* @returns {void}
*/
MyApp.Views.UsersGraphView.prototype.draw = function () {
	var numUsers = 0, color;
	this.graph.innerHTML = '';
	for (var i in this.model.users)
		if (typeof this.model.users[i] === "object") {
			numUsers++;
			this.model.users[i].type == 'admin' ? color = 'red' : color = 'green';
			this.graph.innerHTML += "<div style='height:10px;width:10px;background-color:"+color+";float:left;border:1px solid black;margin:1px 1px 1px 1px;'></div>";
		}
		this.graph.innerHTML += "<br />" + numUsers + " Users";
}
// ----------------------------------------------------------------------------------
var users, myUsersModel, usersTableView, usersTableView1; // just for debugging
/**
* Simple setup to try out the application.
*
* @namespace window
* @returns {void}
* @example
* window.onload = function () {
* 	users = new DataStructures.Stack();
* 	users.push(new MyApp.Objects.User(0,'user0','password0','admin'));
* 	users.push(new MyApp.Objects.User(1,'user1','password1','emp'));
* 	users.push(new MyApp.Objects.User(2,'user2','password2','emp'));
* 	users.push(new MyApp.Objects.User(3,'user3','password3','emp'));
* 	myUsersModel = new MyApp.Models.UsersModel(users);
* 	usersGraphView = new MyApp.Views.UsersGraphView(myUsersModel);
* 	usersTableView = new MyApp.Views.UsersTableView(myUsersModel);
* 	myUsersModel.notify();
* }
*/
window.onload = function () {
	users = new DataStructures.Stack();
	users.push(new MyApp.Objects.User(0,'user0','password0','admin'));
	users.push(new MyApp.Objects.User(1,'user1','password1','emp'));
	users.push(new MyApp.Objects.User(2,'user2','password2','emp'));
	users.push(new MyApp.Objects.User(3,'user3','password3','emp'));
	myUsersModel = new MyApp.Models.UsersModel(users);
	usersGraphView = new MyApp.Views.UsersGraphView(myUsersModel);
	usersTableView = new MyApp.Views.UsersTableView(myUsersModel);
	myUsersModel.notify();
}