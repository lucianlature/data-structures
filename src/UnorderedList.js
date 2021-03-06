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
    this._length = 0;
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
    this._length += 1;
};

/**
 * @description  Returns the number of items in the list
 * @return {Number} Number of items
 */
UnorderedList.prototype.size = function () {
    return this._length;
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

    // check if item is in the list
    if (this.indexOf(item) === -1) {
        return;
    }

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

    this._length -= 1;

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
    this._length += 1;
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
            this._length += 1;
        }

        current = current.getNext();
        index += 1;
    }
};

/**
 * @description Removes and return the last item in the list.
 * @param {Number} position If present, removes and returns the item at position pos.
 * @return {*}
 */
UnorderedList.prototype.pop = function (position) {
    var current = this._head,
        previous = null,
        foundPos = false,
        position = (typeof position === 'undefined') ? this.size() - 1 : position,
        index = 0;

    while (!foundPos) {
        if (index === position) {
            foundPos = true;
        } else {
            previous = current;
            current = current.getNext();
            index += 1;
        }
    }

    if (previous === null) {
        this._head = current.getNext();
    } else {
        previous.setNext(current.getNext());
    }

    this._length -= 1;

    return current;
};

/**
 * @description Return a copy of the list starting at the start position
 * and going up to but not including the stop position.
 * @param  {Number} startPosition
 * @param  {Number} stopPosition
 * @return {UnorderedList} The sliced list
 */
UnorderedList.prototype.slice = function (startPosition, stopPosition) {
    var slice = new UnorderedList(),
        current = this._head,
        foundPos = false,
        index = 0;

    while (!foundPos) {
        if (index === startPosition) {
            foundPos = true;
        } else {
            current = current.getNext();
            index += 1;
        }
    }

    while (index < stopPosition) {
        slice.append(current.getData());
        current = current.getNext();
        index += 1;
    }

    return slice;
};

module.exports = UnorderedList;
