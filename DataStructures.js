/**
* JavaScript Data Structures for Micro-MVC
*
* @author <a href="mailto:braungoodson@gmail.com">Braun Goodson</a>
* @version 1.0.0.0
* @namespace DataStructures
*/
var DataStructures = DataStructures || {};
/**
* Common Functions
*
* @namespace DataStructures
* @class common
*/
DataStructures.Common = DataStructures.Common || {};
/**
* Common Dump Function : A simple debugging method that dumps the contents of 
*  an array into the console.
*
* @method dump
* @returns {void} Doesn't return anything.
*/
DataStructures.Common.dump = function () {
	var out = '';
	var l = this.length;
	console.log("* Dumping " + this.id + " of length: " + l);
	while (l--){
		out += this[l].toString() + ';';
	}
	console.log("* Dump: " + out);
}
// --------------------------------------------------------------------------
/**
* Stack Data Structure Constructor : Inherits from Array.
*
* @namespace DataStructures
* @class Stacks
* @constructor
*/
DataStructures.Stack = function () {
	/**
	* Id of the stack.
	* @property id
	* @type String
	*/
	this.id = "Stack";
};
DataStructures.Stack.prototype = new Array();
/**
* A simple debugging method that dumps the contents of an array
*  into the console.
*
* @method dump
* @function dump
* @see DataStructures.Common.dump
* @returns {void} Doesn't return anything.
*/
DataStructures.Stack.prototype.dump = DataStructures.Common.dump;
// --------------------------------------------------------------------------
/**
* LinkedList Data Structure : Contains basic Stack and LinkedList.
*
* @namespace DataStructures
* @class LinkedList
* @constructor
*/
DataStructures.LinkedList = function () {
	/**
	* Id of the list.
	* @property id
	* @type String
	*/
	this.id = "LinkedList";
};
DataStructures.LinkedList.prototype = new Array();
/**
* A simple debugging method that dumps the contents of an array
*  into the console.
*
* @method dump
* @function dump
* @see DataStructures.Common.dump
* @returns {void} Doesn't return anything.
*/
DataStructures.LinkedList.prototype.dump = DataStructures.Common.dump;
/**
* Add an item to the list. Calls parent push method.
*
* @function add
* @param {Object} item The item to add to the list.
* @returns {void} Doesn't return anything.
*/
DataStructures.LinkedList.prototype.add = function (item) {
	this.push(item);
}
/**
* Remove an item from the list. Calls parent splice method.
*
* @function remove
* @param {Object} item The item to remove from the list.
* @returns {void} Doesn't return anything.
*/
DataStructures.LinkedList.prototype.remove = function (item) {
	this.splice(this.indexOf(item),1);
}
// --------------------------------------------------------------------------
/*console.log("* DataStructures.Stack.prototype.dump = " + DataStructures.Stack.prototype.dump);console.log("* Function equivalency is: " + (new DataStructures.Stack().dump == new DataStructures.LinkedList().dump));*/
/*var s = new DataStructures.Stack();s.push(0);s.push(1);s.push(2);s.dump();*/
/*var l = new DataStructures.LinkedList();l.add(0);l.add(1);l.add(2);l.add(3);l.remove(1);l.dump();*/
