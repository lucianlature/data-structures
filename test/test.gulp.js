(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

},{"../src/Stack":1}]},{},[2])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvY29kZWxpbmtzL1Byb2plY3RzL2RhdGEtc3RydWN0dXJlcy9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL2NvZGVsaW5rcy9Qcm9qZWN0cy9kYXRhLXN0cnVjdHVyZXMvc3JjL1N0YWNrLmpzIiwiL1VzZXJzL2NvZGVsaW5rcy9Qcm9qZWN0cy9kYXRhLXN0cnVjdHVyZXMvdGVzdC9TdGFjay5zcGVjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBkZXNjcmlwdGlvbiBBIHN0YWNrIGlzIHN0cnVjdHVyZWQgYXMgYW4gb3JkZXJlZCBjb2xsZWN0aW9uIG9mIGl0ZW1zXG4gKiB3aGVyZSBpdGVtcyBhcmUgYWRkZWQgdG8gYW5kIHJlbW92ZWQgZnJvbSB0aGUgZW5kIGNhbGxlZCB0aGUgXCJ0b3BcIi5cbiAqIFN0YWNrcyBhcmUgb3JkZXJlZCBMSUZPLlxuICovXG5mdW5jdGlvbiBTdGFjaygpIHtcblx0dGhpcy5faXRlbXMgPSBbXTtcbn1cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gQWRkcyBhIG5ldyBpdGVtIHRvIHRoZSB0b3Agb2YgdGhlIHN0YWNrXG4gKiBAdGhpcyB7U3RhY2t9XG4gKiBAcGFyYW0gIHtBbnl9IGl0ZW0gQW55IHR5cGUgb2YgaXRlbXMgY2FuIGJlIGFkZGVkXG4gKi9cblN0YWNrLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gKGl0ZW0pIHtcblx0dGhpcy5faXRlbXMucHVzaChpdGVtKTtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uICBSZW1vdmVzIHRoZSB0b3AgaXRlbSBmcm9tIHRoZSBzdGFjay5cbiAqIEBwYXJhbSAge0FueX0gaXRlbVxuICogQHJldHVybiB7QW55fSBUaGUgcmVtb3ZlZCBpdGVtXG4gKi9cblN0YWNrLnByb3RvdHlwZS5wb3AgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0aGlzLl9pdGVtcy5wb3AoKTtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIENoZWNrcyBpZiB0aGUgc3RhY2sgaXMgZW1wdHkgb3Igbm90XG4gKiBAcmV0dXJuIHtCb29sZWFufSBUcnVlIGlmIHRoZSBzdGFjayBpcyBlbXB0eSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cblN0YWNrLnByb3RvdHlwZS5pc0VtcHR5ID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5faXRlbXMubGVuZ3RoID09PSAwO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gIFJldHVybnMgdGhlIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgc3RhY2tcbiAqIEByZXR1cm4ge051bWJlcn0gTnVtYmVyIG9mIGl0ZW1zXG4gKi9cblN0YWNrLnByb3RvdHlwZS5zaXplID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5faXRlbXMubGVuZ3RoO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIHRvcCBpdGVtIGZyb20gdGhlIHN0YWNrIGJ1dCBkb2VzIG5vdCByZW1vdmUgaXRcbiAqIEByZXR1cm4ge0FueXxudWxsfSBUaGUgdG9wIGl0ZW1cbiAqL1xuU3RhY2sucHJvdG90eXBlLnBlZWsgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBzaXplID0gdGhpcy5zaXplKCk7XG5cdGlmIChzaXplID49IDEpIHtcblx0XHRyZXR1cm4gdGhpcy5faXRlbXNbc2l6ZSAtIDFdO1xuXHR9XG5cdHJldHVybiBudWxsO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTdGFjaztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIFN0YWNrID0gcmVxdWlyZSgnLi4vc3JjL1N0YWNrJyksXG5cdGV4cGVjdCA9IGNoYWkuZXhwZWN0LFxuXHRpbnN0YW5jZSA9IG51bGw7XG5cbmRlc2NyaWJlKCdTdGFjayB0ZXN0JywgZnVuY3Rpb24gKCkge1xuXG5cdGJlZm9yZUVhY2goZnVuY3Rpb24gKGRvbmUpIHtcblx0XHRpbnN0YW5jZSA9IG5ldyBTdGFjaygpO1xuXHRcdGRvbmUoKTtcblx0fSk7XG5cblx0YWZ0ZXJFYWNoKGZ1bmN0aW9uIChkb25lKSB7XG5cdFx0aW5zdGFuY2UgPSBudWxsO1xuXHRcdGRvbmUoKTtcblx0fSk7XG5cblx0ZGVzY3JpYmUoJ1N0YWNrIGluc3RhbnRpYXRpb24nLCBmdW5jdGlvbiAoKSB7XG5cdFx0aXQoJ3Nob3VsZCBiZSBhYmxlIHRvIGluc3RhbnRpYXRlIGEgbmV3IFN0YWNrJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0ZXhwZWN0KGluc3RhbmNlKS50by5iZS5hbi5pbnN0YW5jZW9mKFN0YWNrKTtcblx0XHR9KTtcblx0fSk7XG5cblx0ZGVzY3JpYmUoJ1N0YWNrIGlzRW1wdHknLCBmdW5jdGlvbiAoKSB7XG5cdFx0aXQoJ3Nob3VsZCBiZSB0cnVlIGlmIHRoZSBzdGFjayBpcyBlbXB0eScsIGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBpc0VtcHR5ID0gaW5zdGFuY2UuaXNFbXB0eSgpO1xuXHRcdFx0ZXhwZWN0KGlzRW1wdHkpLnRvLmJlLnRydWU7XG5cdFx0fSk7XG5cblx0XHRpdCgnc2hvdWxkIGJlIGZhbHNlIGlmIHRoZSBzdGFjayBpcyBub3QgZW1wdHknLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpbnN0YW5jZS5wdXNoKCdmb28nKTtcblx0XHRcdHZhciBpc0VtcHR5ID0gaW5zdGFuY2UuaXNFbXB0eSgpO1xuXHRcdFx0ZXhwZWN0KGlzRW1wdHkpLnRvLmJlLmZhbHNlO1xuXHRcdH0pO1xuXG5cdH0pO1xuXG5cdGRlc2NyaWJlKCdTdGFjayBwdXNoJywgZnVuY3Rpb24gKCkge1xuXHRcdGl0KCdzaG91bGQgaW5zZXJ0IG5ldyBpdGVtcyBpbnRvIHRoZSBzdGFjaycsIGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0dmFyIGlzRW1wdHkgPSBpbnN0YW5jZS5pc0VtcHR5KCk7XG5cdFx0XHRleHBlY3QoaXNFbXB0eSkudG8uYmUudHJ1ZTtcblxuXHRcdFx0aW5zdGFuY2UucHVzaCgnZm9vJyk7XG5cdFx0XHRpbnN0YW5jZS5wdXNoKCdiYXInKTtcblx0XHRcdGluc3RhbmNlLnB1c2goNyk7XG5cdFx0XHRpbnN0YW5jZS5wdXNoKHRydWUpO1xuXHRcdFx0aW5zdGFuY2UucHVzaChbXSk7XG5cdFx0XHRpbnN0YW5jZS5wdXNoKHt9KTtcblx0XHRcdGluc3RhbmNlLnB1c2goZnVuY3Rpb24oKXt9KTtcblx0XHRcdGV4cGVjdChpbnN0YW5jZS5zaXplKCkpLnRvLmVxdWFsKDcpO1xuXG5cdFx0fSk7XG5cdH0pO1xuXG5cdGRlc2NyaWJlKCdTdGFjayBwb3AnLCBmdW5jdGlvbiAoKSB7XG5cdFx0aXQoJ3Nob3VsZCByZW1vdmUgdGhlIHRvcCBpdGVtIG9mIHRoZSBzdGFjaycsIGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0dmFyIGlzRW1wdHkgPSBpbnN0YW5jZS5pc0VtcHR5KCksXG5cdFx0XHRcdHJlbW92ZWRJdGVtO1xuXG5cdFx0XHRleHBlY3QoaXNFbXB0eSkudG8uYmUudHJ1ZTtcblxuXHRcdFx0aW5zdGFuY2UucHVzaCgnZm9vJyk7XG5cdFx0XHRpbnN0YW5jZS5wdXNoKCdiYXInKTtcblx0XHRcdHJlbW92ZWRJdGVtID0gaW5zdGFuY2UucG9wKCk7XG5cblx0XHRcdGV4cGVjdChyZW1vdmVkSXRlbSkudG8uZXF1YWwoJ2JhcicpO1xuXHRcdFx0ZXhwZWN0KGluc3RhbmNlLnNpemUoKSkudG8uZXF1YWwoMSk7XG5cblx0XHR9KTtcblx0fSk7XG5cblx0ZGVzY3JpYmUoJ1N0YWNrIHNpemUnLCBmdW5jdGlvbiAoKSB7XG5cdFx0aXQoJ3Nob3VsZCByZXR1cm4gdGhlIGNvcnJlY3Qgc2l6ZSBvZiB0aGUgc3RhY2snLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgaXNFbXB0eSA9IGluc3RhbmNlLmlzRW1wdHkoKSxcblx0XHRcdFx0c2l6ZTtcblxuXHRcdFx0ZXhwZWN0KGlzRW1wdHkpLnRvLmJlLnRydWU7XG5cblx0XHRcdGluc3RhbmNlLnB1c2goJ2ZvbycpO1xuXHRcdFx0aW5zdGFuY2UucHVzaCgnYmFyJyk7XG5cdFx0XHRpbnN0YW5jZS5wdXNoKDcpO1xuXG5cdFx0XHRzaXplID0gaW5zdGFuY2Uuc2l6ZSgpO1xuXHRcdFx0d2hpbGUgKGluc3RhbmNlLnBvcCgpKSB7XG5cdFx0XHRcdGV4cGVjdChpbnN0YW5jZS5zaXplKCkpLnRvLmVxdWFsKC0tc2l6ZSk7XG5cdFx0XHR9XG5cblx0XHRcdFsnZm9vJywgJ2JhcicsIDEsIDNdLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdFx0aW5zdGFuY2UucHVzaChpdGVtKTtcblx0XHRcdFx0ZXhwZWN0KGluc3RhbmNlLnNpemUoKSkudG8uZXF1YWwoKytzaXplKTtcblx0XHRcdH0pO1xuXG5cdFx0fSk7XG5cdH0pO1xuXG5cdGRlc2NyaWJlKCdTdGFjayBwZWVrJywgZnVuY3Rpb24oKSB7XG5cdFx0aXQoJ3Nob3VsZCByZXR1cm4gdGhlIHRvcCBpdGVtIG9uIHRoZSBzdGFjaycsIGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0dmFyIGlzRW1wdHkgPSBpbnN0YW5jZS5pc0VtcHR5KCk7XG5cdFx0XHRleHBlY3QoaXNFbXB0eSkudG8uYmUudHJ1ZTtcblxuXHRcdFx0aW5zdGFuY2UucHVzaCgnZm9vJyk7XG5cdFx0XHRpbnN0YW5jZS5wdXNoKCdiYXInKTtcblx0XHRcdGluc3RhbmNlLnB1c2goNyk7XG5cblx0XHRcdGV4cGVjdChpbnN0YW5jZS5wZWVrKCkpLnRvLmVxdWFsKDcpO1xuXHRcdFx0aW5zdGFuY2UucG9wKCk7XG5cdFx0XHRleHBlY3QoaW5zdGFuY2UucGVlaygpKS50by5lcXVhbCgnYmFyJyk7XG5cdFx0XHRpbnN0YW5jZS5wb3AoKTtcblx0XHRcdGV4cGVjdChpbnN0YW5jZS5wZWVrKCkpLnRvLmVxdWFsKCdmb28nKTtcblx0XHRcdGluc3RhbmNlLnBvcCgpOyAvLyB0aGUgc3RhY2sgc2hvdWxkIGJlIGVtcHR5IGJ5IG5vd1xuXHRcdFx0ZXhwZWN0KGluc3RhbmNlLnBlZWsoKSkudG8uYmUubnVsbDtcblx0XHR9KTtcblxuXHRcdGl0KCdkb2VzblxcJ3QgbW9kaWZ5IHRoZSBzdGFjaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHBlZWssIHNpemU7XG5cdFx0XHRpbnN0YW5jZS5wdXNoKCdmb28nKTtcblx0XHRcdGluc3RhbmNlLnB1c2goJ2JhcicpO1xuXHRcdFx0aW5zdGFuY2UucHVzaCg3KTtcblxuXHRcdFx0c2l6ZSA9IGluc3RhbmNlLnNpemUoKTtcblx0XHRcdHBlZWsgPSBpbnN0YW5jZS5wZWVrKCk7XG5cdFx0XHRleHBlY3QoaW5zdGFuY2Uuc2l6ZSgpKS50by5lcXVhbChzaXplKTtcblx0XHR9KTtcblx0fSk7XG5cblxufSk7XG4iXX0=
