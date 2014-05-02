Unordered Linked List
=====================

Plain JavaScript implementation of an unordered linked list.

------------

###Unordered List###

The list object returned when require is called on this library

	var List = require('UnorderedList');
	var list = new List();

------------

###Methods###

**`add(item)`**
Adds a new item to the list. It returns nothing.

	list.add("foo");
	list.add("bar");
	list.add("baz");
	list.add("foobar");
	list.add("foobaz");

	// list has - foobaz -> foobar -> baz -> bar -> foo

**`remove(item)`**
Removes the item from the list

	list.add("foo");
	list.add("bar");
	list.add("baz");
	list.add("foobar");
	list.add("foobaz");

	list.remove("baz");

	//> list has - foobaz -> foobar -> bar -> foo


**`search(item)`**
Searches for the item in the list

	list.add("foo");
	list.add("bar");
	list.add("baz");
	console.log(list.search("bar"));
	//> true


**`isEmpty()`**
Checks if the list is empty or not

	if (!list.isEmpty()) {
		while(list.pop());
	}
	console.log(list.isEmpty());
	//> true


**`size()`**
Returns the number of the items in the list

	list.add("foo");
	list.add("bar");
	list.add("baz");

	console.log(list.size());
	//> 3

	if (!list.isEmpty()) {
		while(list.pop());
	}

	console.log(list.size());
	//> 0


**`append(item)`**
Adds a new item to the end of the list making it the last item in the collection

	list.add("foo");
	list.add("bar");
	list.add("baz");
	//> list has - baz -> bar -> foo

	list.append("foobaz")
	//> list has - baz -> bar -> foo -> foobaz


**`indexOf(item)`**
Returns the position of item in the list

	list.add("foo");
	list.add("bar");
	list.add("baz");

	console.log(list.indexOf("baz"));
	//> 2
	console.log(list.indexOf("bar"));
	//> 1


**`insert(pos,item)`**
Adds a new item to the list at position pos.

	list.add("foo");
	list.add("bar");
	list.add("baz");
	//> list has - baz -> bar -> foo

	list.insert(1, "foobaz");
	//> list now has - baz -> foobaz -> bar -> foo


**`pop()`**
Removes and returns the last item in the list.

	list.add("foo");
	list.add("bar");
	list.add("baz");
	//> list has - baz -> bar -> foo

	console.log(list.pop());
	//> foo  //list now has - baz -> bar


**`pop(pos)`**
Removes and returns the item at position pos in the list.

	list.add("foo");
	list.add("bar");
	list.add("baz");
	//> list has - baz -> bar -> foo

	console.log(list.pop(1));
	//> bar  //list now has - baz -> foo

