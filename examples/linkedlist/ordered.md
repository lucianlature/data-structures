Ordered Linked List
=====================

Plain JavaScript implementation of an ordered linked list.

------------

###Ordered List###

The list object returned when require is called on this library

	var List = require('OrderedList');
	var list = new List();

------------

###Methods###

**add(item)**
Adds a new item to the list. It returns nothing.

	list.add(3);
	list.add(13);
	list.add(8);
	list.add(5);
	list.add(21);

	// list has - 3 -> 5 -> 8 -> 13 -> 21

**remove(item)**
Removes the item from the list

	list.add(3);
	list.add(13);
	list.add(8);
	list.add(5);
	list.add(21);

	list.remove(8);

	//> list has - 3 -> 5 -> 13 -> 21


**search(item)**
Searches for the item in the list

	list.add(3);
	list.add(13);
	list.add(8);
	list.add(5);
	list.add(21);

	console.log(list.search(3));
	//> true
	console.log(list.search(4));
	//> false


**isEmpty()**
Checks if the list is empty or not

	if (!list.isEmpty()) {
		while(list.pop());
	}
	console.log(list.isEmpty());
	//> true


**size()**
Returns the number of the items in the list

	list.add(3);
	list.add(13);
	list.add(8);
	list.add(5);
	list.add(21);

	console.log(list.size());
	//> 5

	if (!list.isEmpty()) {
		while(list.pop());
	}

	console.log(list.size());
	//> 0

**indexOf(item)**
Returns the position of item in the list

	list.add(3);
	list.add(13);
	list.add(8);
	list.add(5);
	list.add(21);

	console.log(list.indexOf(8));
	//> 2
	console.log(list.indexOf(5));
	//> 1

**pop()**
Removes and returns the last item in the list.

	list.add(3);
	list.add(13);
	list.add(8);
	list.add(5);
	list.add(21);

	//> list has - 3 -> 5 -> 8 -> 13 -> 21

	console.log(list.pop());
	//> 21  //list now has - 3 -> 5 -> 8 -> 13


**pop(pos)**
Removes and returns the item at position pos in the list.

	list.add(3);
	list.add(13);
	list.add(8);
	list.add(5);
	list.add(21);

	//> list has - 3 -> 5 -> 8 -> 13 -> 21

	console.log(list.pop(1));
	//> 5  //list now has - 3 -> 8 -> 13 -> 21

