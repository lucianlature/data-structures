Deque
============

Plain JavaScript implementation of a deque.

------------

###Objects###

**Deque**
The queue object returned when require is called on this library

	var Deque = require('Deque');
	var deque = new Deque();

------------

###Methods###

**addRear(item)**
Adds a new item to the rear of the deque

	deque.addRear('foo');
	deque.addRear('bar');
	console.log(deque);
	//> ['bar', 'foo']


**removeRear()**
Removes the rear item from the deque

	deqeue.addRear('foo');
	deqeue.addRear('bar');
	deqeue.addRear(3);
	deque.removeRear();
	console.log(queue.removeRear());
	//> "bar"

**addFront(item)**
Adds a new item to the front of the deque

	deque.addFront('foo');
	deque.addFront('bar');
	console.log(deque);
	//> ['foo', 'bar']


**removeFront()**
Removes the front item from the deque

	deqeue.addFront('foo');
	deqeue.addFront('bar');
	deqeue.addFront(3);
	deque.removeFront();
	console.log(deque.removeFront());
	//> "bar"


**size()**
Returns the number of items in the deque

	console.log(deque.size());
	//> 2


**isEmpty()**
Checks if the deque is empty or not

	if (!deque.isEmpty()) {
		while(deque.removeFront());
	}
	console.log(deque.isEmpty());
	//> true
