Queue
============

Plain JavaScript implementation of a stack.

------------

###Objects###

**Queue**
The queue object returned when require is called on this library

	var Queue = require('Queue');
	var queue = new Queue();

------------

###Methods###

**enqueue(item)**
Adds a new item to the rear of the queue

	var item = "foo";
	queue.enqueue(item);
	console.log(queue);
	//> ['foo']


**dequeue()**
Removes the front item from the queue

	var item = "bar";
	queue.enqueue(item);
	var anotherItem = 3;
	queue.enqueue(anotherItem);
	console.log(queue.dequeue());
	//> "bar"


**size()**
Returns the number of items in the queue

	console.log(queue.size());
	//> 2


**isEmpty()**
Checks if the queue is empty or not

	if (!queue.isEmpty()) {
		while(queue.dequeue());
	}
	console.log(queue.isEmpty());
	//> true
