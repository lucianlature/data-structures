(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/**
 * @constructor
 * @description The basic building block for the linked list implementation.
 * Each node object must hold at least two pieces of information:
 * the data field of the node (the node itself)
 * a reference to the next node.
 */
function Node (initData) {
	this.data = initData;
	this.next = null;
}

/**
 * @description Returns associated data
 * @this {List}
 */
Node.prototype.getData = function () {
	return this.data;
};

/**
 * @description Returns the next node
 * @this {List}
 */
Node.prototype.getNext = function () {
	return this.next;
};

/**
 * @description Sets associated data
 * @this {List}
 * @param {Any} newData Any type of items can be added
 */
Node.prototype.setData = function (newData) {
	this.data = newData;
};

/**
 * @description Sets the next node
 * @this {List}
 * @param {Node} newNext A Node instance
 */
Node.prototype.setNext = function (newNext) {
	this.next = newNext;
};

module.exports = Node;

},{}],2:[function(require,module,exports){
'use strict';

var Node = require('./Node');

/**
 * @constructor
 * @description A list is a collection of items where each item holds a
 * relative position with respect to the others.
 */
function UnorderedList () {
	this._head = null;
	this._tail = null;
}

/**
 * @description Checks if the list is empty or not
 * @return {Boolean} True if the list is empty, false otherwise
 */
UnorderedList.prototype.isEmpty = function () {
	return this._head === null;
};

/**
 * @description Adds a new item to the list
 * @this {UnorderedList}
 * @param  {Any} item Any type of items can be added
 */
UnorderedList.prototype.add = function (item) {
    var temp = new Node (item);
    temp.setNext(this._head);
    this._head = temp;
    this._tail = temp.getNext();
};

/**
 * @description  Returns the number of items in the list
 * @return {Number} Number of items
 */
UnorderedList.prototype.size = function () {
	var current = this._head,
		size = 0;

	while (current !== null) {
		size += 1;
		current = current.getNext();
	}

	return size;
};

/**
 * @description Searches for the item in the list
 * @param  {Any} item
 * @return {boolean} Returns true if item is found
 */
UnorderedList.prototype.search = function (item) {
	var current = this._head,
		found = false;

	while (current !== null && !found) {
		if (current.getData() === item) {
			found = true;
		} else {
			current = current.getNext();
		}
	}

	return found;
};

/**
 * @description Removes the item from the list. It needs the item and modifies the list.
 * @param  {Any} item
 */
UnorderedList.prototype.remove = function (item) {
	var current = this._head,
		previous = null,
		found = false;

	while (!found) {
		if (current.getData() === item) {
			found = true;
		} else {
			previous = current;
			current = current.getNext();
		}
	}

	if (previous === null) {
		this._head = current.getNext();
	} else {
		previous.setNext(current.getNext());
	}

};

/**
 * @description Adds a new item to the end of the list making it the last item in the collection.
 * @param  {Any} item
 */
UnorderedList.prototype.append = function (item) {
	var temp = new Node (item);
	if (this._tail === null) {
		this._head = temp;
		this._tail = temp;
	} else {
		this._tail.setNext(temp);
		this._tail = temp;
	}
};

/**
 * @description Returns the position of the item in the list
 * @param  {Any} item
 * @return {Number} Index or -1 if this list does not contain the element.
 */
UnorderedList.prototype.indexOf = function (item) {
	var current = this._head,
		index = 0;

	while (current !== null) {
		if (current.getData() === item) {
			return index;
		} else {
			current = current.getNext();
		}
		index += 1;
	}

	return -1;
};

/**
 * @description Adds a new item to the list at a certain specified position
 * @param  {Number} Position index
 * @param  {Any} item
 */
UnorderedList.prototype.insert = function (position, item) {
	var current = this._head,
		temp = new Node (item),
		index = 0;

	while (current !== null) {

		if (index === position - 1) {
			var next = current.getNext();
			current.setNext(temp);
			temp.setNext(next);
		}

		current = current.getNext();
		index += 1;
	}
};

/**
 * @description Removes and return the last item in the list.
 * @return {Any} Last item
 */
UnorderedList.prototype.pop = function () {
	var current = this._head,
		previous = null;

	while (current !== null) {

		if (current.getNext() === null) {
			if (previous !== null) {
				this._tail = previous;
				previous.setNext(null);
			} else {
				this._head = null;
			}
			return current;
		}
		previous = current;
		current = current.getNext();
	}
};

module.exports = UnorderedList;

},{"./Node":1}],3:[function(require,module,exports){
'use strict';

var List = require('../src/UnorderedList'),
	expect = chai.expect,
	instance = null;

describe('UnorederedList test', function () {

	beforeEach(function (done) {
		instance = new List();
		done();
	});

	afterEach(function (done) {
		instance = null;
		done();
	});

	describe('UnorderedList instantiation', function () {
		it('should be able to instantiate a new unordered list', function () {
			expect(instance).to.be.an.instanceof(List);
		});
	});

	describe('UnorderedList isEmpty', function () {
		it('should return true when it does not have a head', function () {
			expect(instance.isEmpty()).to.be.true;
		});
	});

	describe('UnorderedList size', function () {
		it('should return 0 when first instantiated', function () {
			expect(instance.size()).to.equal(0);
		});
		it('should return the correct size when items are being added', function () {
			instance.add('foo');
			expect(instance.size()).to.equal(1);
			instance.add('bar');
			expect(instance.size()).to.equal(2);
		});
	});

	describe('UnorderedList add', function () {
		it('should add new items to the list', function () {
			[3, 5, 8, 13, 21].forEach(function (item, index) {
				instance.add(item);
				expect(instance.size()).to.equal(index + 1);
			});
		});
	});

	describe('UnorderedList search', function () {
		it('should add new items to the list', function () {
			[3, 5, 8, 13, 21].forEach(function (item) {
				instance.add(item);
			});
			expect(instance.search(3)).to.be.true;
			expect(instance.search(5)).to.be.true;
			expect(instance.search(8)).to.be.true;
			expect(instance.search(13)).to.be.true;
			expect(instance.search(21)).to.be.true;
			expect(instance.search(0)).to.be.false;
		});
	});

	describe('UnorderedList remove', function () {
		it('should add new items to the list', function () {
			[3, 5, 8, 13, 21].forEach(function (item) {
				instance.add(item);
			});
			instance.remove(3);
			expect(instance.size()).to.equal(4);
			expect(instance.search(3)).to.be.false;
			instance.remove(21);
			expect(instance.size()).to.equal(3);
			expect(instance.search(21)).to.be.false;
			instance.remove(8);
			expect(instance.size()).to.equal(2);
			expect(instance.search(8)).to.be.false;
			expect(instance.search(5)).to.be.true;
			expect(instance.search(13)).to.be.true;
		});
	});

	describe('UnorderedList append', function () {
		it('should add new items to the list', function () {
			[3, 5, 8, 13, 21].forEach(function (item, index) {
				instance.append(item);
				expect(instance.size()).to.equal(index + 1);
			});
		});
	});

	describe('UnorderedList indexOf', function () {
		it('should return the correct position of the item in the list', function () {
			[3, 5, 8, 13, 21].forEach(function (item) {
				instance.add(item);
			});
			expect(instance.indexOf(3)).to.equal(4);
			expect(instance.indexOf(5)).to.equal(3);
			expect(instance.indexOf(8)).to.equal(2);
			expect(instance.indexOf(13)).to.equal(1);
			expect(instance.indexOf(21)).to.equal(0);
			expect(instance.indexOf(1)).to.equal(-1);
		});
	});

	describe('UnorderedList insert', function () {
		it('should insert the item at the correct position in the list', function () {
			[3, 5, 8, 13, 21].forEach(function (item) {
				instance.add(item);
			});
			instance.insert(2, 7);
			expect(instance.indexOf(7)).to.equal(2);
			expect(instance.indexOf(8)).to.equal(3);
		});
	});

	describe('UnorderedList pop', function () {
		it('should remove the last item of the list', function () {
			var item;
			instance.add(3);
			instance.add(5);
			instance.add(8);
			item = instance.pop();
			expect(item.getData()).to.equal(3);
			item = instance.pop();
			expect(item.getData()).to.equal(5);
			item = instance.pop();
			expect(item.getData()).to.equal(8);
			expect(instance.isEmpty()).to.be.true;
		});
	});

});

},{"../src/UnorderedList":2}]},{},[3])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvY29kZWxpbmtzL1Byb2plY3RzL2RhdGEtc3RydWN0dXJlcy9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvY29kZWxpbmtzL1Byb2plY3RzL2RhdGEtc3RydWN0dXJlcy9zcmMvTm9kZS5qcyIsIi9Vc2Vycy9jb2RlbGlua3MvUHJvamVjdHMvZGF0YS1zdHJ1Y3R1cmVzL3NyYy9Vbm9yZGVyZWRMaXN0LmpzIiwiL1VzZXJzL2NvZGVsaW5rcy9Qcm9qZWN0cy9kYXRhLXN0cnVjdHVyZXMvdGVzdC9Vbm9yZGVyZWRMaXN0LnNwZWMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBkZXNjcmlwdGlvbiBUaGUgYmFzaWMgYnVpbGRpbmcgYmxvY2sgZm9yIHRoZSBsaW5rZWQgbGlzdCBpbXBsZW1lbnRhdGlvbi5cbiAqIEVhY2ggbm9kZSBvYmplY3QgbXVzdCBob2xkIGF0IGxlYXN0IHR3byBwaWVjZXMgb2YgaW5mb3JtYXRpb246XG4gKiB0aGUgZGF0YSBmaWVsZCBvZiB0aGUgbm9kZSAodGhlIG5vZGUgaXRzZWxmKVxuICogYSByZWZlcmVuY2UgdG8gdGhlIG5leHQgbm9kZS5cbiAqL1xuZnVuY3Rpb24gTm9kZSAoaW5pdERhdGEpIHtcblx0dGhpcy5kYXRhID0gaW5pdERhdGE7XG5cdHRoaXMubmV4dCA9IG51bGw7XG59XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgYXNzb2NpYXRlZCBkYXRhXG4gKiBAdGhpcyB7TGlzdH1cbiAqL1xuTm9kZS5wcm90b3R5cGUuZ2V0RGF0YSA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRoaXMuZGF0YTtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIG5leHQgbm9kZVxuICogQHRoaXMge0xpc3R9XG4gKi9cbk5vZGUucHJvdG90eXBlLmdldE5leHQgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0aGlzLm5leHQ7XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBTZXRzIGFzc29jaWF0ZWQgZGF0YVxuICogQHRoaXMge0xpc3R9XG4gKiBAcGFyYW0ge0FueX0gbmV3RGF0YSBBbnkgdHlwZSBvZiBpdGVtcyBjYW4gYmUgYWRkZWRcbiAqL1xuTm9kZS5wcm90b3R5cGUuc2V0RGF0YSA9IGZ1bmN0aW9uIChuZXdEYXRhKSB7XG5cdHRoaXMuZGF0YSA9IG5ld0RhdGE7XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBuZXh0IG5vZGVcbiAqIEB0aGlzIHtMaXN0fVxuICogQHBhcmFtIHtOb2RlfSBuZXdOZXh0IEEgTm9kZSBpbnN0YW5jZVxuICovXG5Ob2RlLnByb3RvdHlwZS5zZXROZXh0ID0gZnVuY3Rpb24gKG5ld05leHQpIHtcblx0dGhpcy5uZXh0ID0gbmV3TmV4dDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTm9kZTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIE5vZGUgPSByZXF1aXJlKCcuL05vZGUnKTtcblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBkZXNjcmlwdGlvbiBBIGxpc3QgaXMgYSBjb2xsZWN0aW9uIG9mIGl0ZW1zIHdoZXJlIGVhY2ggaXRlbSBob2xkcyBhXG4gKiByZWxhdGl2ZSBwb3NpdGlvbiB3aXRoIHJlc3BlY3QgdG8gdGhlIG90aGVycy5cbiAqL1xuZnVuY3Rpb24gVW5vcmRlcmVkTGlzdCAoKSB7XG5cdHRoaXMuX2hlYWQgPSBudWxsO1xuXHR0aGlzLl90YWlsID0gbnVsbDtcbn1cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2tzIGlmIHRoZSBsaXN0IGlzIGVtcHR5IG9yIG5vdFxuICogQHJldHVybiB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgbGlzdCBpcyBlbXB0eSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cblVub3JkZXJlZExpc3QucHJvdG90eXBlLmlzRW1wdHkgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0aGlzLl9oZWFkID09PSBudWxsO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gQWRkcyBhIG5ldyBpdGVtIHRvIHRoZSBsaXN0XG4gKiBAdGhpcyB7VW5vcmRlcmVkTGlzdH1cbiAqIEBwYXJhbSAge0FueX0gaXRlbSBBbnkgdHlwZSBvZiBpdGVtcyBjYW4gYmUgYWRkZWRcbiAqL1xuVW5vcmRlcmVkTGlzdC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICB2YXIgdGVtcCA9IG5ldyBOb2RlIChpdGVtKTtcbiAgICB0ZW1wLnNldE5leHQodGhpcy5faGVhZCk7XG4gICAgdGhpcy5faGVhZCA9IHRlbXA7XG4gICAgdGhpcy5fdGFpbCA9IHRlbXAuZ2V0TmV4dCgpO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gIFJldHVybnMgdGhlIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgbGlzdFxuICogQHJldHVybiB7TnVtYmVyfSBOdW1iZXIgb2YgaXRlbXNcbiAqL1xuVW5vcmRlcmVkTGlzdC5wcm90b3R5cGUuc2l6ZSA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIGN1cnJlbnQgPSB0aGlzLl9oZWFkLFxuXHRcdHNpemUgPSAwO1xuXG5cdHdoaWxlIChjdXJyZW50ICE9PSBudWxsKSB7XG5cdFx0c2l6ZSArPSAxO1xuXHRcdGN1cnJlbnQgPSBjdXJyZW50LmdldE5leHQoKTtcblx0fVxuXG5cdHJldHVybiBzaXplO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gU2VhcmNoZXMgZm9yIHRoZSBpdGVtIGluIHRoZSBsaXN0XG4gKiBAcGFyYW0gIHtBbnl9IGl0ZW1cbiAqIEByZXR1cm4ge2Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiBpdGVtIGlzIGZvdW5kXG4gKi9cblVub3JkZXJlZExpc3QucHJvdG90eXBlLnNlYXJjaCA9IGZ1bmN0aW9uIChpdGVtKSB7XG5cdHZhciBjdXJyZW50ID0gdGhpcy5faGVhZCxcblx0XHRmb3VuZCA9IGZhbHNlO1xuXG5cdHdoaWxlIChjdXJyZW50ICE9PSBudWxsICYmICFmb3VuZCkge1xuXHRcdGlmIChjdXJyZW50LmdldERhdGEoKSA9PT0gaXRlbSkge1xuXHRcdFx0Zm91bmQgPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjdXJyZW50ID0gY3VycmVudC5nZXROZXh0KCk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGZvdW5kO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gUmVtb3ZlcyB0aGUgaXRlbSBmcm9tIHRoZSBsaXN0LiBJdCBuZWVkcyB0aGUgaXRlbSBhbmQgbW9kaWZpZXMgdGhlIGxpc3QuXG4gKiBAcGFyYW0gIHtBbnl9IGl0ZW1cbiAqL1xuVW5vcmRlcmVkTGlzdC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKGl0ZW0pIHtcblx0dmFyIGN1cnJlbnQgPSB0aGlzLl9oZWFkLFxuXHRcdHByZXZpb3VzID0gbnVsbCxcblx0XHRmb3VuZCA9IGZhbHNlO1xuXG5cdHdoaWxlICghZm91bmQpIHtcblx0XHRpZiAoY3VycmVudC5nZXREYXRhKCkgPT09IGl0ZW0pIHtcblx0XHRcdGZvdW5kID0gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cHJldmlvdXMgPSBjdXJyZW50O1xuXHRcdFx0Y3VycmVudCA9IGN1cnJlbnQuZ2V0TmV4dCgpO1xuXHRcdH1cblx0fVxuXG5cdGlmIChwcmV2aW91cyA9PT0gbnVsbCkge1xuXHRcdHRoaXMuX2hlYWQgPSBjdXJyZW50LmdldE5leHQoKTtcblx0fSBlbHNlIHtcblx0XHRwcmV2aW91cy5zZXROZXh0KGN1cnJlbnQuZ2V0TmV4dCgpKTtcblx0fVxuXG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBBZGRzIGEgbmV3IGl0ZW0gdG8gdGhlIGVuZCBvZiB0aGUgbGlzdCBtYWtpbmcgaXQgdGhlIGxhc3QgaXRlbSBpbiB0aGUgY29sbGVjdGlvbi5cbiAqIEBwYXJhbSAge0FueX0gaXRlbVxuICovXG5Vbm9yZGVyZWRMaXN0LnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbiAoaXRlbSkge1xuXHR2YXIgdGVtcCA9IG5ldyBOb2RlIChpdGVtKTtcblx0aWYgKHRoaXMuX3RhaWwgPT09IG51bGwpIHtcblx0XHR0aGlzLl9oZWFkID0gdGVtcDtcblx0XHR0aGlzLl90YWlsID0gdGVtcDtcblx0fSBlbHNlIHtcblx0XHR0aGlzLl90YWlsLnNldE5leHQodGVtcCk7XG5cdFx0dGhpcy5fdGFpbCA9IHRlbXA7XG5cdH1cbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIHBvc2l0aW9uIG9mIHRoZSBpdGVtIGluIHRoZSBsaXN0XG4gKiBAcGFyYW0gIHtBbnl9IGl0ZW1cbiAqIEByZXR1cm4ge051bWJlcn0gSW5kZXggb3IgLTEgaWYgdGhpcyBsaXN0IGRvZXMgbm90IGNvbnRhaW4gdGhlIGVsZW1lbnQuXG4gKi9cblVub3JkZXJlZExpc3QucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbiAoaXRlbSkge1xuXHR2YXIgY3VycmVudCA9IHRoaXMuX2hlYWQsXG5cdFx0aW5kZXggPSAwO1xuXG5cdHdoaWxlIChjdXJyZW50ICE9PSBudWxsKSB7XG5cdFx0aWYgKGN1cnJlbnQuZ2V0RGF0YSgpID09PSBpdGVtKSB7XG5cdFx0XHRyZXR1cm4gaW5kZXg7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGN1cnJlbnQgPSBjdXJyZW50LmdldE5leHQoKTtcblx0XHR9XG5cdFx0aW5kZXggKz0gMTtcblx0fVxuXG5cdHJldHVybiAtMTtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIEFkZHMgYSBuZXcgaXRlbSB0byB0aGUgbGlzdCBhdCBhIGNlcnRhaW4gc3BlY2lmaWVkIHBvc2l0aW9uXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IFBvc2l0aW9uIGluZGV4XG4gKiBAcGFyYW0gIHtBbnl9IGl0ZW1cbiAqL1xuVW5vcmRlcmVkTGlzdC5wcm90b3R5cGUuaW5zZXJ0ID0gZnVuY3Rpb24gKHBvc2l0aW9uLCBpdGVtKSB7XG5cdHZhciBjdXJyZW50ID0gdGhpcy5faGVhZCxcblx0XHR0ZW1wID0gbmV3IE5vZGUgKGl0ZW0pLFxuXHRcdGluZGV4ID0gMDtcblxuXHR3aGlsZSAoY3VycmVudCAhPT0gbnVsbCkge1xuXG5cdFx0aWYgKGluZGV4ID09PSBwb3NpdGlvbiAtIDEpIHtcblx0XHRcdHZhciBuZXh0ID0gY3VycmVudC5nZXROZXh0KCk7XG5cdFx0XHRjdXJyZW50LnNldE5leHQodGVtcCk7XG5cdFx0XHR0ZW1wLnNldE5leHQobmV4dCk7XG5cdFx0fVxuXG5cdFx0Y3VycmVudCA9IGN1cnJlbnQuZ2V0TmV4dCgpO1xuXHRcdGluZGV4ICs9IDE7XG5cdH1cbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIFJlbW92ZXMgYW5kIHJldHVybiB0aGUgbGFzdCBpdGVtIGluIHRoZSBsaXN0LlxuICogQHJldHVybiB7QW55fSBMYXN0IGl0ZW1cbiAqL1xuVW5vcmRlcmVkTGlzdC5wcm90b3R5cGUucG9wID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgY3VycmVudCA9IHRoaXMuX2hlYWQsXG5cdFx0cHJldmlvdXMgPSBudWxsO1xuXG5cdHdoaWxlIChjdXJyZW50ICE9PSBudWxsKSB7XG5cblx0XHRpZiAoY3VycmVudC5nZXROZXh0KCkgPT09IG51bGwpIHtcblx0XHRcdGlmIChwcmV2aW91cyAhPT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLl90YWlsID0gcHJldmlvdXM7XG5cdFx0XHRcdHByZXZpb3VzLnNldE5leHQobnVsbCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLl9oZWFkID0gbnVsbDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBjdXJyZW50O1xuXHRcdH1cblx0XHRwcmV2aW91cyA9IGN1cnJlbnQ7XG5cdFx0Y3VycmVudCA9IGN1cnJlbnQuZ2V0TmV4dCgpO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVub3JkZXJlZExpc3Q7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBMaXN0ID0gcmVxdWlyZSgnLi4vc3JjL1Vub3JkZXJlZExpc3QnKSxcblx0ZXhwZWN0ID0gY2hhaS5leHBlY3QsXG5cdGluc3RhbmNlID0gbnVsbDtcblxuZGVzY3JpYmUoJ1Vub3JlZGVyZWRMaXN0IHRlc3QnLCBmdW5jdGlvbiAoKSB7XG5cblx0YmVmb3JlRWFjaChmdW5jdGlvbiAoZG9uZSkge1xuXHRcdGluc3RhbmNlID0gbmV3IExpc3QoKTtcblx0XHRkb25lKCk7XG5cdH0pO1xuXG5cdGFmdGVyRWFjaChmdW5jdGlvbiAoZG9uZSkge1xuXHRcdGluc3RhbmNlID0gbnVsbDtcblx0XHRkb25lKCk7XG5cdH0pO1xuXG5cdGRlc2NyaWJlKCdVbm9yZGVyZWRMaXN0IGluc3RhbnRpYXRpb24nLCBmdW5jdGlvbiAoKSB7XG5cdFx0aXQoJ3Nob3VsZCBiZSBhYmxlIHRvIGluc3RhbnRpYXRlIGEgbmV3IHVub3JkZXJlZCBsaXN0JywgZnVuY3Rpb24gKCkge1xuXHRcdFx0ZXhwZWN0KGluc3RhbmNlKS50by5iZS5hbi5pbnN0YW5jZW9mKExpc3QpO1xuXHRcdH0pO1xuXHR9KTtcblxuXHRkZXNjcmliZSgnVW5vcmRlcmVkTGlzdCBpc0VtcHR5JywgZnVuY3Rpb24gKCkge1xuXHRcdGl0KCdzaG91bGQgcmV0dXJuIHRydWUgd2hlbiBpdCBkb2VzIG5vdCBoYXZlIGEgaGVhZCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdGV4cGVjdChpbnN0YW5jZS5pc0VtcHR5KCkpLnRvLmJlLnRydWU7XG5cdFx0fSk7XG5cdH0pO1xuXG5cdGRlc2NyaWJlKCdVbm9yZGVyZWRMaXN0IHNpemUnLCBmdW5jdGlvbiAoKSB7XG5cdFx0aXQoJ3Nob3VsZCByZXR1cm4gMCB3aGVuIGZpcnN0IGluc3RhbnRpYXRlZCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdGV4cGVjdChpbnN0YW5jZS5zaXplKCkpLnRvLmVxdWFsKDApO1xuXHRcdH0pO1xuXHRcdGl0KCdzaG91bGQgcmV0dXJuIHRoZSBjb3JyZWN0IHNpemUgd2hlbiBpdGVtcyBhcmUgYmVpbmcgYWRkZWQnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpbnN0YW5jZS5hZGQoJ2ZvbycpO1xuXHRcdFx0ZXhwZWN0KGluc3RhbmNlLnNpemUoKSkudG8uZXF1YWwoMSk7XG5cdFx0XHRpbnN0YW5jZS5hZGQoJ2JhcicpO1xuXHRcdFx0ZXhwZWN0KGluc3RhbmNlLnNpemUoKSkudG8uZXF1YWwoMik7XG5cdFx0fSk7XG5cdH0pO1xuXG5cdGRlc2NyaWJlKCdVbm9yZGVyZWRMaXN0IGFkZCcsIGZ1bmN0aW9uICgpIHtcblx0XHRpdCgnc2hvdWxkIGFkZCBuZXcgaXRlbXMgdG8gdGhlIGxpc3QnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRbMywgNSwgOCwgMTMsIDIxXS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuXHRcdFx0XHRpbnN0YW5jZS5hZGQoaXRlbSk7XG5cdFx0XHRcdGV4cGVjdChpbnN0YW5jZS5zaXplKCkpLnRvLmVxdWFsKGluZGV4ICsgMSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fSk7XG5cblx0ZGVzY3JpYmUoJ1Vub3JkZXJlZExpc3Qgc2VhcmNoJywgZnVuY3Rpb24gKCkge1xuXHRcdGl0KCdzaG91bGQgYWRkIG5ldyBpdGVtcyB0byB0aGUgbGlzdCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFszLCA1LCA4LCAxMywgMjFdLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdFx0aW5zdGFuY2UuYWRkKGl0ZW0pO1xuXHRcdFx0fSk7XG5cdFx0XHRleHBlY3QoaW5zdGFuY2Uuc2VhcmNoKDMpKS50by5iZS50cnVlO1xuXHRcdFx0ZXhwZWN0KGluc3RhbmNlLnNlYXJjaCg1KSkudG8uYmUudHJ1ZTtcblx0XHRcdGV4cGVjdChpbnN0YW5jZS5zZWFyY2goOCkpLnRvLmJlLnRydWU7XG5cdFx0XHRleHBlY3QoaW5zdGFuY2Uuc2VhcmNoKDEzKSkudG8uYmUudHJ1ZTtcblx0XHRcdGV4cGVjdChpbnN0YW5jZS5zZWFyY2goMjEpKS50by5iZS50cnVlO1xuXHRcdFx0ZXhwZWN0KGluc3RhbmNlLnNlYXJjaCgwKSkudG8uYmUuZmFsc2U7XG5cdFx0fSk7XG5cdH0pO1xuXG5cdGRlc2NyaWJlKCdVbm9yZGVyZWRMaXN0IHJlbW92ZScsIGZ1bmN0aW9uICgpIHtcblx0XHRpdCgnc2hvdWxkIGFkZCBuZXcgaXRlbXMgdG8gdGhlIGxpc3QnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRbMywgNSwgOCwgMTMsIDIxXS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHRcdGluc3RhbmNlLmFkZChpdGVtKTtcblx0XHRcdH0pO1xuXHRcdFx0aW5zdGFuY2UucmVtb3ZlKDMpO1xuXHRcdFx0ZXhwZWN0KGluc3RhbmNlLnNpemUoKSkudG8uZXF1YWwoNCk7XG5cdFx0XHRleHBlY3QoaW5zdGFuY2Uuc2VhcmNoKDMpKS50by5iZS5mYWxzZTtcblx0XHRcdGluc3RhbmNlLnJlbW92ZSgyMSk7XG5cdFx0XHRleHBlY3QoaW5zdGFuY2Uuc2l6ZSgpKS50by5lcXVhbCgzKTtcblx0XHRcdGV4cGVjdChpbnN0YW5jZS5zZWFyY2goMjEpKS50by5iZS5mYWxzZTtcblx0XHRcdGluc3RhbmNlLnJlbW92ZSg4KTtcblx0XHRcdGV4cGVjdChpbnN0YW5jZS5zaXplKCkpLnRvLmVxdWFsKDIpO1xuXHRcdFx0ZXhwZWN0KGluc3RhbmNlLnNlYXJjaCg4KSkudG8uYmUuZmFsc2U7XG5cdFx0XHRleHBlY3QoaW5zdGFuY2Uuc2VhcmNoKDUpKS50by5iZS50cnVlO1xuXHRcdFx0ZXhwZWN0KGluc3RhbmNlLnNlYXJjaCgxMykpLnRvLmJlLnRydWU7XG5cdFx0fSk7XG5cdH0pO1xuXG5cdGRlc2NyaWJlKCdVbm9yZGVyZWRMaXN0IGFwcGVuZCcsIGZ1bmN0aW9uICgpIHtcblx0XHRpdCgnc2hvdWxkIGFkZCBuZXcgaXRlbXMgdG8gdGhlIGxpc3QnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRbMywgNSwgOCwgMTMsIDIxXS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuXHRcdFx0XHRpbnN0YW5jZS5hcHBlbmQoaXRlbSk7XG5cdFx0XHRcdGV4cGVjdChpbnN0YW5jZS5zaXplKCkpLnRvLmVxdWFsKGluZGV4ICsgMSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fSk7XG5cblx0ZGVzY3JpYmUoJ1Vub3JkZXJlZExpc3QgaW5kZXhPZicsIGZ1bmN0aW9uICgpIHtcblx0XHRpdCgnc2hvdWxkIHJldHVybiB0aGUgY29ycmVjdCBwb3NpdGlvbiBvZiB0aGUgaXRlbSBpbiB0aGUgbGlzdCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFszLCA1LCA4LCAxMywgMjFdLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdFx0aW5zdGFuY2UuYWRkKGl0ZW0pO1xuXHRcdFx0fSk7XG5cdFx0XHRleHBlY3QoaW5zdGFuY2UuaW5kZXhPZigzKSkudG8uZXF1YWwoNCk7XG5cdFx0XHRleHBlY3QoaW5zdGFuY2UuaW5kZXhPZig1KSkudG8uZXF1YWwoMyk7XG5cdFx0XHRleHBlY3QoaW5zdGFuY2UuaW5kZXhPZig4KSkudG8uZXF1YWwoMik7XG5cdFx0XHRleHBlY3QoaW5zdGFuY2UuaW5kZXhPZigxMykpLnRvLmVxdWFsKDEpO1xuXHRcdFx0ZXhwZWN0KGluc3RhbmNlLmluZGV4T2YoMjEpKS50by5lcXVhbCgwKTtcblx0XHRcdGV4cGVjdChpbnN0YW5jZS5pbmRleE9mKDEpKS50by5lcXVhbCgtMSk7XG5cdFx0fSk7XG5cdH0pO1xuXG5cdGRlc2NyaWJlKCdVbm9yZGVyZWRMaXN0IGluc2VydCcsIGZ1bmN0aW9uICgpIHtcblx0XHRpdCgnc2hvdWxkIGluc2VydCB0aGUgaXRlbSBhdCB0aGUgY29ycmVjdCBwb3NpdGlvbiBpbiB0aGUgbGlzdCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFszLCA1LCA4LCAxMywgMjFdLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdFx0aW5zdGFuY2UuYWRkKGl0ZW0pO1xuXHRcdFx0fSk7XG5cdFx0XHRpbnN0YW5jZS5pbnNlcnQoMiwgNyk7XG5cdFx0XHRleHBlY3QoaW5zdGFuY2UuaW5kZXhPZig3KSkudG8uZXF1YWwoMik7XG5cdFx0XHRleHBlY3QoaW5zdGFuY2UuaW5kZXhPZig4KSkudG8uZXF1YWwoMyk7XG5cdFx0fSk7XG5cdH0pO1xuXG5cdGRlc2NyaWJlKCdVbm9yZGVyZWRMaXN0IHBvcCcsIGZ1bmN0aW9uICgpIHtcblx0XHRpdCgnc2hvdWxkIHJlbW92ZSB0aGUgbGFzdCBpdGVtIG9mIHRoZSBsaXN0JywgZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIGl0ZW07XG5cdFx0XHRpbnN0YW5jZS5hZGQoMyk7XG5cdFx0XHRpbnN0YW5jZS5hZGQoNSk7XG5cdFx0XHRpbnN0YW5jZS5hZGQoOCk7XG5cdFx0XHRpdGVtID0gaW5zdGFuY2UucG9wKCk7XG5cdFx0XHRleHBlY3QoaXRlbS5nZXREYXRhKCkpLnRvLmVxdWFsKDMpO1xuXHRcdFx0aXRlbSA9IGluc3RhbmNlLnBvcCgpO1xuXHRcdFx0ZXhwZWN0KGl0ZW0uZ2V0RGF0YSgpKS50by5lcXVhbCg1KTtcblx0XHRcdGl0ZW0gPSBpbnN0YW5jZS5wb3AoKTtcblx0XHRcdGV4cGVjdChpdGVtLmdldERhdGEoKSkudG8uZXF1YWwoOCk7XG5cdFx0XHRleHBlY3QoaW5zdGFuY2UuaXNFbXB0eSgpKS50by5iZS50cnVlO1xuXHRcdH0pO1xuXHR9KTtcblxufSk7XG4iXX0=
