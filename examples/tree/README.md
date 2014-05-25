Tree
=====================

Plain JavaScript implementation of a tree.

------------

###Tree###

The tree object returned when require is called on this library

var Tree = require('Tree');
var tree = new Tree();

------------

###Methods###

---------------------------------------

<a name="setRoot" />
### `setRoot()`

Set the root value of the tree.

__Example__

```js
tree.setRoot('foo');
});
```

---------------------------------------

<a name="getRoot" />
### `getRoot()`

Returns the root value of the tree.

__Example__

```js
tree.setRoot(new TreeNode('foo'));

console.log(tree.getRoot().getData());
//> foo
});
```
---------------------------------------

<a name="getNumberOfNodes" />
### `getNumberOfNodes()`

Returns the root value of the tree.

__Example__

```js
var root = new TreeNode('root'),
    childFoo = new TreeNode('foo'),
    childBar = new TreeNode('bar'),
    childFooBar = new TreeNode('foobar');

childBar.addChild(childFooBar);
root.addChild(childFoo);
root.addChild(childBar);
tree.setRoot(root);

console.log(tree.getNumberOfNodes());
//> 4
});
```
---------------------------------------

<a name="isEmpty" />
### `getNumberOfNodes()`

Returns the root value of the tree.

__Example__

```js
var root = new TreeNode('root'),
    childFoo = new TreeNode('foo');

console.log(tree.isEmpty());
//> true

root.addChild(childFoo);
tree.setRoot(root);

console.log(tree.isEmpty());
//> false
});
```
---------------------------------------

<a name="search" />
### `search()`

Search for a given value inside tree.

__Example__

```js
var root = new TreeNode('root'),
    childFoo = new TreeNode('foo'),
    childBar = new TreeNode('bar'),
    childFooBar = new TreeNode('foobar');

childBar.addChild(childFooBar);
root.addChild(childFoo);
root.addChild(childBar);
tree.setRoot(root);

console.log(tree.search('foobar'));
//> true

console.log(tree.search('baz'));
//> false
});
```
---------------------------------------

<a name="dfsPreOrder" />
### `dfsPreOrder()`

Pre-Order traversal algorithm.

__Example__

```js
var root = new TreeNode('root'),
    childFoo = new TreeNode('foo'),
    childBar = new TreeNode('bar'),
    childFooBar = new TreeNode('foobar'),
    childBaz = new TreeNode('baz'),
    childFooBaz = new TreeNode('foobaz'),
    cb = function (node) {
        console.log(node.getData());
    };

childBar.addChild(childFooBar);
childFoo.addChild(childBaz);
childBaz.addChild(childFooBaz);
root.addChild(childFoo);
root.addChild(childBar);
tree.setRoot(root);

tree.dfsPreOrder(root, cb);

//> root
//> foo
//> baz
//> foobaz
//> bar
//> foobar
});
```

---------------------------------------

<a name="dfsPostOrder" />
### `dfsPostOrder()`

Post-Order traversal algorithm.

__Example__

```js
var root = new TreeNode('root'),
    childFoo = new TreeNode('foo'),
    childBar = new TreeNode('bar'),
    childFooBar = new TreeNode('foobar'),
    childBaz = new TreeNode('baz'),
    childFooBaz = new TreeNode('foobaz'),
    cb = function (node) {
        console.log(node.getData());
    };

childBar.addChild(childFooBar);
childFoo.addChild(childBaz);
childBaz.addChild(childFooBaz);
root.addChild(childFoo);
root.addChild(childBar);
tree.setRoot(root);

tree.dfsPostOrder(root, cb);

//> foobaz
//> baz
//> foo
//> foobar
//> bar
//> root
});
```
---------------------------------------

<a name="bfs" />
### `bfs()`

BFS traversal.

__Example__

```js
var root = new TreeNode('root'),
    childFoo = new TreeNode('foo'),
    childBar = new TreeNode('bar'),
    childFooBar = new TreeNode('foobar'),
    childBaz = new TreeNode('baz'),
    childFooBaz = new TreeNode('foobaz'),
    cb = function (node) {
        console.log(node.getData());
    };

childBar.addChild(childFooBar);
childFoo.addChild(childBaz);
childBaz.addChild(childFooBaz);
root.addChild(childFoo);
root.addChild(childBar);
tree.setRoot(root);

tree.bfs(root, cb);

//> root
//> foo
//> bar
//> baz
//> foobar
//> foobaz
});
```
