(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/**
 * @constructor
 * @description A deque (double-endende queue) is an ordered collection of items
 * where adding and removing of items process is unrestrictive, new items can be
 * added at either the front or the rear.
 */
function Deque () {
	this._items = [];
}

/**
 * @description Checks if the deque is empty or not
 * @return {Boolean} True if the deque is empty, false otherwise
 */
Deque.prototype.isEmpty = function () {
	return this._items.length === 0;
};

/**
 * @description Adds a new item to the rear of the deque
 * @this {Deque}
 * @param  {Any} item Any type of items can be added
 */
Deque.prototype.addRear = function (item) {
	this._items.unshift(item);
};

/**
 * @description Removes the rear items and returns it
 * @this {Deque}
 */
Deque.prototype.removeRear = function () {
	return this._items.shift();
};


/**
 * @description Adds a new item to the front of the deque
 * @this {Deque}
 * @param  {Any} item Any type of items can be added
 */
Deque.prototype.addFront = function (item) {
	this._items.push(item);
};

/**
 * @description Removes the front item from the deque and returns it
 * @this {Deque}
 */
Deque.prototype.removeFront = function () {
	return this._items.pop();
};

/**
 * @description  Returns the number of items in the deque
 * @return {Number} Number of items
 */
Deque.prototype.size = function () {
	return this._items.length;
};


module.exports = Deque;

},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
'use strict';

/**
 * @constructor
 * @description A queue is structured as an ordered collection of items
 * where items are added at the "rear" and removed from the end called the "top".
 * Queues are ordered FIFO.
 */
function Queue() {
	this._items = [];
}

/**
 * @description Checks if the queue is empty or not
 * @return {Boolean} True if the queue is empty, false otherwise
 */
Queue.prototype.isEmpty = function () {
	return this._items.length === 0;
};

/**
 * @description Adds a new item to the rear of the queue
 * @this {Queue}
 * @param  {Any} item Any type of items can be added
 */
Queue.prototype.enqueue = function (item) {
	this._items.push(item);
};

/** @description  Removes the front item from the queue.
 * @param  {Any} item
 * @return {Any} The removed item
 */
Queue.prototype.dequeue = function () {
	return this._items.pop();
};

/**
 * @description  Returns the number of items in the queue
 * @return {Number} Number of items
 */
Queue.prototype.size = function () {
	return this._items.length;
};

module.exports = Queue;

},{}],4:[function(require,module,exports){
'use strict';

/**
 * @constructor
 * @description A stack is structured as an ordered collection of items
 * where items are added to and removed from the end called the "top".
 * Stacks are ordered LIFO.
 */
function Stack() {
	this._items = [];
}

/**
 * @description Adds a new item to the top of the stack
 * @this {Stack}
 * @param  {Any} item Any type of items can be added
 */
Stack.prototype.push = function (item) {
	this._items.push(item);
};

/**
 * @description  Removes the top item from the stack.
 * @param  {Any} item
 * @return {Any} The removed item
 */
Stack.prototype.pop = function () {
	return this._items.pop();
};

/**
 * @description Checks if the stack is empty or not
 * @return {Boolean} True if the stack is empty, false otherwise
 */
Stack.prototype.isEmpty = function () {
	return this._items.length === 0;
};

/**
 * @description  Returns the number of items in the stack
 * @return {Number} Number of items
 */
Stack.prototype.size = function () {
	return this._items.length;
};

/**
 * @description Returns the value of the top item from the stack but does not remove it
 * @return {Any|null} The top item
 */
Stack.prototype.peek = function () {
	var size = this.size();
	if (size >= 1) {
		return this._items[size - 1];
	}
	return null;
};

module.exports = Stack;

},{}],5:[function(require,module,exports){
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

},{"./Node":2}],6:[function(require,module,exports){
'use strict';

var Deque = require('../src/Deque'),
	expect = chai.expect,
	instance = null;

describe('Deque test', function () {

	beforeEach(function (done) {
		instance = new Deque();
		done();
	});

	afterEach(function (done) {
		instance = null;
		done();
	});

	describe('Deque instantiation', function () {
		it('should be able to instantiate a new deque', function () {
			expect(instance).to.be.an.instanceof(Deque);
		});
	});

	describe('Deque isEmpty', function () {
		it('should be true if the deque is empty', function () {
			var isEmpty = instance.isEmpty();
			expect(isEmpty).to.be.true;
		});
		it('should be false if the deque is not empty', function () {
			instance.addRear('foo');
			var isEmpty = instance.isEmpty();
			expect(isEmpty).to.be.false;
		});
	});

	describe('Deque addRear', function () {
		it('should add new items to the rear', function () {
			var isEmpty = instance.isEmpty();

			expect(isEmpty).to.be.true;
			instance.addRear('foo');
			instance.addRear('bar');
			expect(instance.size()).to.equal(2);
		});
	});

	describe('Deque removeRear', function () {
		it('should remove the front item from the deque', function () {
			var isEmpty = instance.isEmpty(),
				rear1, rear2;

			expect(isEmpty).to.be.true;

			instance.addRear('foo');
			instance.addRear('bar');
			expect(instance.size()).to.equal(2);
			rear1 = instance.removeRear();
			expect(rear1).to.equal('bar');
			rear2 = instance.removeRear();
			expect(rear2).to.equal('foo');
			expect(instance.isEmpty()).to.be.true;

		});
	});

	describe('Deque addFront', function () {
		it('should add new items to the front', function () {
			var isEmpty = instance.isEmpty();

			expect(isEmpty).to.be.true;
			instance.addFront('foo');
			instance.addFront('bar');
			expect(instance.size()).to.equal(2);
		});
	});

	describe('Deque removeRear', function () {
		it('should remove the front item from the deque', function () {
			var isEmpty = instance.isEmpty(),
				front1, front2;

			expect(isEmpty).to.be.true;

			instance.addRear('foo');
			instance.addFront('bar');
			instance.addRear(3);
			instance.addFront(4);
			expect(instance.size()).to.equal(4);
			front1 = instance.removeFront();
			expect(front1).to.equal(4);
			front2 = instance.removeFront();
			expect(front2).to.equal('bar');
			expect(instance.isEmpty()).to.be.false;
		});
	});

});

},{"../src/Deque":1}],7:[function(require,module,exports){
'use strict';

var Node = require('../src/Node'),
	expect = chai.expect,
	instance = null;

describe('Node test', function () {

	beforeEach(function (done) {
		instance = new Node('foo');
		done();
	});

	afterEach(function (done) {
		instance = null;
		done();
	});

	describe('Node instantiation', function () {
		it('should be able to instantiate a new node', function () {
			expect(instance).to.be.an.instanceof(Node);
		});
	});

	describe('Node getData', function () {
		it('should get the data on the node', function () {
			expect(instance.getData()).to.equal('foo');
		});
	});

	describe('Node setData', function () {
		it('should set new data on the node', function () {
			instance.setData('bar');
			expect(instance.getData()).to.equal('bar');
		});
	});

	describe('Node setNext', function () {
		it('should set new data on the node', function () {
			var newNode = new Node('bar');
			instance.setNext(newNode);
			expect(instance.getNext().getData()).to.equal('bar');
		});
	});

	describe('Node getNext', function () {
		it('should return a null reference by default', function () {
			expect(instance.getNext()).to.be.null;
		});
		it('should return the referenced node', function () {
			var newNode = new Node('bar');
			instance.setNext(newNode);
			expect(instance.getNext()).to.be.newNode;
		});
	});

});

},{"../src/Node":2}],8:[function(require,module,exports){
'use strict';

var Queue = require('../src/Queue'),
	expect = chai.expect,
	instance = null;

describe('Queue test', function () {

	beforeEach(function (done) {
		instance = new Queue();
		done();
	});

	afterEach(function (done) {
		instance = null;
		done();
	});

	describe('Queue instantiation', function () {
		it('should be able to instantiate a new Queue', function () {
			expect(instance).to.be.an.instanceof(Queue);
		});
	});

	describe('Queue isEmpty', function () {
		it('should be true if the queue is empty', function () {
			var isEmpty = instance.isEmpty();
			expect(isEmpty).to.be.true;
		});
		it('should be false if the queue is not empty', function () {
			instance.enqueue('foo');
			var isEmpty = instance.isEmpty();
			expect(isEmpty).to.be.false;
		});
	});

	describe('Queue enqueue', function () {
		it('should insert new items into the queue', function () {

			var isEmpty = instance.isEmpty();
			expect(isEmpty).to.be.true;

			instance.enqueue('foo');
			instance.enqueue('bar');
			instance.enqueue(7);
			instance.enqueue(true);
			instance.enqueue([]);
			instance.enqueue({});
			instance.enqueue(function(){});
			expect(instance.size()).to.equal(7);

		});
	});

	describe('Queue dequeue', function () {
		it('should remove the front item from the queue', function () {

			var isEmpty = instance.isEmpty(),
				removedItem;

			expect(isEmpty).to.be.true;

			instance.enqueue('foo');
			instance.enqueue('bar');
			instance.enqueue(4);
			removedItem = instance.dequeue();
			expect(removedItem).to.equal(4);
			removedItem = instance.dequeue();
			expect(removedItem).to.equal('bar');

			expect(instance.size()).to.equal(1);

		});
	});

});

},{"../src/Queue":3}],9:[function(require,module,exports){
'use strict';

var Stack = require('../src/Stack'),
	expect = chai.expect,
	instance = null;

describe('Stack test', function () {

	beforeEach(function (done) {
		instance = new Stack();
		done();
	});

	afterEach(function (done) {
		instance = null;
		done();
	});

	describe('Stack instantiation', function () {
		it('should be able to instantiate a new Stack', function () {
			expect(instance).to.be.an.instanceof(Stack);
		});
	});

	describe('Stack isEmpty', function () {
		it('should be true if the stack is empty', function () {
			var isEmpty = instance.isEmpty();
			expect(isEmpty).to.be.true;
		});

		it('should be false if the stack is not empty', function () {
			instance.push('foo');
			var isEmpty = instance.isEmpty();
			expect(isEmpty).to.be.false;
		});

	});

	describe('Stack push', function () {
		it('should insert new items into the stack', function () {

			var isEmpty = instance.isEmpty();
			expect(isEmpty).to.be.true;

			instance.push('foo');
			instance.push('bar');
			instance.push(7);
			instance.push(true);
			instance.push([]);
			instance.push({});
			instance.push(function(){});
			expect(instance.size()).to.equal(7);

		});
	});

	describe('Stack pop', function () {
		it('should remove the top item of the stack', function () {

			var isEmpty = instance.isEmpty(),
				removedItem;

			expect(isEmpty).to.be.true;

			instance.push('foo');
			instance.push('bar');
			removedItem = instance.pop();
			expect(removedItem).to.equal('bar');

			instance.push(4);
			removedItem = instance.pop();
			expect(removedItem).to.equal(4);

			expect(instance.size()).to.equal(1);

		});
	});

	describe('Stack size', function () {
		it('should return the correct size of the stack', function () {
			var isEmpty = instance.isEmpty(),
				size;

			expect(isEmpty).to.be.true;

			instance.push('foo');
			instance.push('bar');
			instance.push(7);

			size = instance.size();
			while (instance.pop()) {
				expect(instance.size()).to.equal(--size);
			}

			['foo', 'bar', 1, 3].forEach(function (item) {
				instance.push(item);
				expect(instance.size()).to.equal(++size);
			});

		});
	});

	describe('Stack peek', function() {
		it('should return the top item on the stack', function () {

			var isEmpty = instance.isEmpty();
			expect(isEmpty).to.be.true;

			instance.push('foo');
			instance.push('bar');
			instance.push(7);

			expect(instance.peek()).to.equal(7);
			instance.pop();
			expect(instance.peek()).to.equal('bar');
			instance.pop();
			expect(instance.peek()).to.equal('foo');
			instance.pop(); // the stack should be empty by now
			expect(instance.peek()).to.be.null;
		});

		it('doesn\'t modify the stack', function() {
			var peek, size;
			instance.push('foo');
			instance.push('bar');
			instance.push(7);

			size = instance.size();
			peek = instance.peek();
			expect(instance.size()).to.equal(size);
		});
	});


});

},{"../src/Stack":4}],10:[function(require,module,exports){
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

},{"../src/UnorderedList":5}]},{},[6,7,8,9,10])