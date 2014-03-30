Stack
============

Plain JavaScript implementation of a stack.

------------

###Objects###

**Stack**
The stack object returned when require is called on this library

	var Stack = require('Stack');
	var stack = new Stack();

------------

###Methods###

**push(item)**
Adds a new item to the top of the stack

	var item = "foo";
	stack.push(item);
	console.log(stack.peek());
	//> foo


**pop()**
Removes the top item from the stac

	var item = "bar";
	stack.push(item);
	var anotherItem = 3;
	stack.push(anotherItem);
	console.log(stack.pop());
	//> 3


**peek()**
Returns the value of the top item from the stack but does not remove it

	var foo = "foo";
	stack.push(foo);
	var bar = "bar";
	stack.push(bar);
	console.log(stack.peek());
	//> bar
	console.log(stack.pop());
	//> bar


**size()**
Returns the number of items in the stack

	console.log(stack.size());
	//> 2


**isEmpty()**
Checks if the stack is empty or not

	if (!stack.isEmpty()) {
		while(stack.pop());
	}
	console.log(stack.isEmpty());
	//> true
