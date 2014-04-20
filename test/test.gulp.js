!function e(t,o,r){function n(u,a){if(!o[u]){if(!t[u]){var s="function"==typeof require&&require;if(!a&&s)return s(u,!0);if(i)return i(u,!0);throw new Error("Cannot find module '"+u+"'")}var f=o[u]={exports:{}};t[u][0].call(f.exports,function(e){var o=t[u][1][e];return n(o?o:e)},f,f.exports,e,t,o,r)}return o[u].exports}for(var i="function"==typeof require&&require,u=0;u<r.length;u++)n(r[u]);return n}({1:[function(e,t){"use strict";function o(){this._items=[]}o.prototype.isEmpty=function(){return 0===this._items.length},o.prototype.addRear=function(e){this._items.unshift(e)},o.prototype.removeRear=function(){return this._items.shift()},o.prototype.addFront=function(e){this._items.push(e)},o.prototype.removeFront=function(){return this._items.pop()},o.prototype.size=function(){return this._items.length},t.exports=o},{}],2:[function(e){"use strict";var t=e("../src/Deque"),o=chai.expect,r=null;describe("Deque test",function(){beforeEach(function(e){r=new t,e()}),afterEach(function(e){r=null,e()}),describe("Deque instantiation",function(){it("should be able to instantiate a new deque",function(){o(r).to.be.an.instanceof(t)})}),describe("Deque isEmpty",function(){it("should be true if the deque is empty",function(){var e=r.isEmpty();o(e).to.be.true}),it("should be false if the deque is not empty",function(){r.addRear("foo");var e=r.isEmpty();o(e).to.be.false})}),describe("Deque addRear",function(){it("should add new items to the rear",function(){var e=r.isEmpty();o(e).to.be.true,r.addRear("foo"),r.addRear("bar"),o(r.size()).to.equal(2)})}),describe("Deque removeRear",function(){it("should remove the front item from the deque",function(){var e,t,n=r.isEmpty();o(n).to.be.true,r.addRear("foo"),r.addRear("bar"),o(r.size()).to.equal(2),e=r.removeRear(),o(e).to.equal("bar"),t=r.removeRear(),o(t).to.equal("foo"),o(r.isEmpty()).to.be.true})}),describe("Deque addFront",function(){it("should add new items to the front",function(){var e=r.isEmpty();o(e).to.be.true,r.addFront("foo"),r.addFront("bar"),o(r.size()).to.equal(2)})}),describe("Deque removeRear",function(){it("should remove the front item from the deque",function(){var e,t,n=r.isEmpty();o(n).to.be.true,r.addRear("foo"),r.addFront("bar"),r.addRear(3),r.addFront(4),o(r.size()).to.equal(4),e=r.removeFront(),o(e).to.equal(4),t=r.removeFront(),o(t).to.equal("bar"),o(r.isEmpty()).to.be.false})})})},{"../src/Deque":1}]},{},[2]);
!function t(e,n,o){function r(a,u){if(!n[a]){if(!e[a]){var c="function"==typeof require&&require;if(!u&&c)return c(a,!0);if(i)return i(a,!0);throw new Error("Cannot find module '"+a+"'")}var f=n[a]={exports:{}};e[a][0].call(f.exports,function(t){var n=e[a][1][t];return r(n?n:t)},f,f.exports,t,e,n,o)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<o.length;a++)r(o[a]);return r}({1:[function(t,e){"use strict";function n(t){this.data=t,this.next=null}n.prototype.getData=function(){return this.data},n.prototype.getNext=function(){return this.next},n.prototype.setData=function(t){this.data=t},n.prototype.setNext=function(t){this.next=t},e.exports=n},{}],2:[function(t){"use strict";var e=t("../src/Node"),n=chai.expect,o=null;describe("Node test",function(){beforeEach(function(t){o=new e("foo"),t()}),afterEach(function(t){o=null,t()}),describe("Node instantiation",function(){it("should be able to instantiate a new node",function(){n(o).to.be.an.instanceof(e)})}),describe("Node getData",function(){it("should get the data on the node",function(){n(o.getData()).to.equal("foo")})}),describe("Node setData",function(){it("should set new data on the node",function(){o.setData("bar"),n(o.getData()).to.equal("bar")})}),describe("Node setNext",function(){it("should set new data on the node",function(){var t=new e("bar");o.setNext(t),n(o.getNext().getData()).to.equal("bar")})}),describe("Node getNext",function(){it("should return a null reference by default",function(){n(o.getNext()).to.be.null}),it("should return the referenced node",function(){var t=new e("bar");o.setNext(t),n(o.getNext()).to.be.newNode})})})},{"../src/Node":1}]},{},[2]);
!function e(t,u,n){function i(r,s){if(!u[r]){if(!t[r]){var f="function"==typeof require&&require;if(!s&&f)return f(r,!0);if(o)return o(r,!0);throw new Error("Cannot find module '"+r+"'")}var c=u[r]={exports:{}};t[r][0].call(c.exports,function(e){var u=t[r][1][e];return i(u?u:e)},c,c.exports,e,t,u,n)}return u[r].exports}for(var o="function"==typeof require&&require,r=0;r<n.length;r++)i(n[r]);return i}({1:[function(e,t){"use strict";function u(){this._items=[]}u.prototype.isEmpty=function(){return 0===this._items.length},u.prototype.enqueue=function(e){this._items.push(e)},u.prototype.dequeue=function(){return this._items.pop()},u.prototype.size=function(){return this._items.length},t.exports=u},{}],2:[function(e){"use strict";var t=e("../src/Queue"),u=chai.expect,n=null;describe("Queue test",function(){beforeEach(function(e){n=new t,e()}),afterEach(function(e){n=null,e()}),describe("Queue instantiation",function(){it("should be able to instantiate a new Queue",function(){u(n).to.be.an.instanceof(t)})}),describe("Queue isEmpty",function(){it("should be true if the queue is empty",function(){var e=n.isEmpty();u(e).to.be.true}),it("should be false if the queue is not empty",function(){n.enqueue("foo");var e=n.isEmpty();u(e).to.be.false})}),describe("Queue enqueue",function(){it("should insert new items into the queue",function(){var e=n.isEmpty();u(e).to.be.true,n.enqueue("foo"),n.enqueue("bar"),n.enqueue(7),n.enqueue(!0),n.enqueue([]),n.enqueue({}),n.enqueue(function(){}),u(n.size()).to.equal(7)})}),describe("Queue dequeue",function(){it("should remove the front item from the queue",function(){var e,t=n.isEmpty();u(t).to.be.true,n.enqueue("foo"),n.enqueue("bar"),n.enqueue(4),e=n.dequeue(),u(e).to.equal(4),e=n.dequeue(),u(e).to.equal("bar"),u(n.size()).to.equal(1)})})})},{"../src/Queue":1}]},{},[2]);
!function t(e,o,i){function n(s,r){if(!o[s]){if(!e[s]){var p="function"==typeof require&&require;if(!r&&p)return p(s,!0);if(u)return u(s,!0);throw new Error("Cannot find module '"+s+"'")}var c=o[s]={exports:{}};e[s][0].call(c.exports,function(t){var o=e[s][1][t];return n(o?o:t)},c,c.exports,t,e,o,i)}return o[s].exports}for(var u="function"==typeof require&&require,s=0;s<i.length;s++)n(i[s]);return n}({1:[function(t,e){"use strict";function o(){this._items=[]}o.prototype.push=function(t){this._items.push(t)},o.prototype.pop=function(){return this._items.pop()},o.prototype.isEmpty=function(){return 0===this._items.length},o.prototype.size=function(){return this._items.length},o.prototype.peek=function(){var t=this.size();return t>=1?this._items[t-1]:null},e.exports=o},{}],2:[function(t){"use strict";var e=t("../src/Stack"),o=chai.expect,i=null;describe("Stack test",function(){beforeEach(function(t){i=new e,t()}),afterEach(function(t){i=null,t()}),describe("Stack instantiation",function(){it("should be able to instantiate a new Stack",function(){o(i).to.be.an.instanceof(e)})}),describe("Stack isEmpty",function(){it("should be true if the stack is empty",function(){var t=i.isEmpty();o(t).to.be.true}),it("should be false if the stack is not empty",function(){i.push("foo");var t=i.isEmpty();o(t).to.be.false})}),describe("Stack push",function(){it("should insert new items into the stack",function(){var t=i.isEmpty();o(t).to.be.true,i.push("foo"),i.push("bar"),i.push(7),i.push(!0),i.push([]),i.push({}),i.push(function(){}),o(i.size()).to.equal(7)})}),describe("Stack pop",function(){it("should remove the top item of the stack",function(){var t,e=i.isEmpty();o(e).to.be.true,i.push("foo"),i.push("bar"),t=i.pop(),o(t).to.equal("bar"),i.push(4),t=i.pop(),o(t).to.equal(4),o(i.size()).to.equal(1)})}),describe("Stack size",function(){it("should return the correct size of the stack",function(){var t,e=i.isEmpty();for(o(e).to.be.true,i.push("foo"),i.push("bar"),i.push(7),t=i.size();i.pop();)o(i.size()).to.equal(--t);["foo","bar",1,3].forEach(function(e){i.push(e),o(i.size()).to.equal(++t)})})}),describe("Stack peek",function(){it("should return the top item on the stack",function(){var t=i.isEmpty();o(t).to.be.true,i.push("foo"),i.push("bar"),i.push(7),o(i.peek()).to.equal(7),i.pop(),o(i.peek()).to.equal("bar"),i.pop(),o(i.peek()).to.equal("foo"),i.pop(),o(i.peek()).to.be.null}),it("doesn't modify the stack",function(){var t,e;i.push("foo"),i.push("bar"),i.push(7),e=i.size(),t=i.peek(),o(i.size()).to.equal(e)})})})},{"../src/Stack":1}]},{},[2]);
!function t(e,n,i){function o(s,a){if(!n[s]){if(!e[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(r)return r(s,!0);throw new Error("Cannot find module '"+s+"'")}var d=n[s]={exports:{}};e[s][0].call(d.exports,function(t){var n=e[s][1][t];return o(n?n:t)},d,d.exports,t,e,n,i)}return n[s].exports}for(var r="function"==typeof require&&require,s=0;s<i.length;s++)o(i[s]);return o}({1:[function(t,e){"use strict";function n(t){this.data=t,this.next=null}n.prototype.getData=function(){return this.data},n.prototype.getNext=function(){return this.next},n.prototype.setData=function(t){this.data=t},n.prototype.setNext=function(t){this.next=t},e.exports=n},{}],2:[function(t,e){"use strict";function n(){this._head=null,this._tail=null}var i=t("./Node");n.prototype.isEmpty=function(){return null===this._head},n.prototype.add=function(t){var e=new i(t);e.setNext(this._head),this._head=e,this._tail=e.getNext()},n.prototype.size=function(){for(var t=this._head,e=0;null!==t;)e+=1,t=t.getNext();return e},n.prototype.search=function(t){for(var e=this._head,n=!1;null!==e&&!n;)e.getData()===t?n=!0:e=e.getNext();return n},n.prototype.remove=function(t){for(var e=this._head,n=null,i=!1;!i;)e.getData()===t?i=!0:(n=e,e=e.getNext());null===n?this._head=e.getNext():n.setNext(e.getNext())},n.prototype.append=function(t){var e=new i(t);null===this._tail?(this._head=e,this._tail=e):(this._tail.setNext(e),this._tail=e)},n.prototype.indexOf=function(t){for(var e=this._head,n=0;null!==e;){if(e.getData()===t)return n;e=e.getNext(),n+=1}return-1},n.prototype.insert=function(t,e){for(var n=this._head,o=new i(e),r=0;null!==n;){if(r===t-1){var s=n.getNext();n.setNext(o),o.setNext(s)}n=n.getNext(),r+=1}},e.exports=n},{"./Node":1}],3:[function(t){"use strict";var e=t("../src/UnorderedList"),n=chai.expect,i=null;describe("UnorederedList test",function(){beforeEach(function(t){i=new e,t()}),afterEach(function(t){i=null,t()}),describe("UnorderedList instantiation",function(){it("should be able to instantiate a new unordered list",function(){n(i).to.be.an.instanceof(e)})}),describe("UnorderedList isEmpty",function(){it("should return true when it does not have a head",function(){n(i.isEmpty()).to.be.true})}),describe("UnorderedList size",function(){it("should return 0 when first instantiated",function(){n(i.size()).to.equal(0)}),it("should return the correct size when items are being added",function(){i.add("foo"),n(i.size()).to.equal(1),i.add("bar"),n(i.size()).to.equal(2)})}),describe("UnorderedList add",function(){it("should add new items to the list",function(){[3,5,8,13,21].forEach(function(t,e){i.add(t),n(i.size()).to.equal(e+1)})})}),describe("UnorderedList search",function(){it("should add new items to the list",function(){[3,5,8,13,21].forEach(function(t){i.add(t)}),n(i.search(3)).to.be.true,n(i.search(5)).to.be.true,n(i.search(8)).to.be.true,n(i.search(13)).to.be.true,n(i.search(21)).to.be.true,n(i.search(0)).to.be.false})}),describe("UnorderedList remove",function(){it("should add new items to the list",function(){[3,5,8,13,21].forEach(function(t){i.add(t)}),i.remove(3),n(i.size()).to.equal(4),n(i.search(3)).to.be.false,i.remove(21),n(i.size()).to.equal(3),n(i.search(21)).to.be.false,i.remove(8),n(i.size()).to.equal(2),n(i.search(8)).to.be.false,n(i.search(5)).to.be.true,n(i.search(13)).to.be.true})}),describe("UnorderedList append",function(){it("should add new items to the list",function(){[3,5,8,13,21].forEach(function(t,e){i.append(t),n(i.size()).to.equal(e+1)})})}),describe("UnorderedList indexOf",function(){it("should return the correct position of the item in the list",function(){[3,5,8,13,21].forEach(function(t){i.add(t)}),n(i.indexOf(3)).to.equal(4),n(i.indexOf(5)).to.equal(3),n(i.indexOf(8)).to.equal(2),n(i.indexOf(13)).to.equal(1),n(i.indexOf(21)).to.equal(0),n(i.indexOf(1)).to.equal(-1)})}),describe("UnorderedList insert",function(){it("should insert the item at the correct position in the list",function(){[3,5,8,13,21].forEach(function(t){i.add(t)}),i.insert(2,7),n(i.indexOf(7)).to.equal(2),n(i.indexOf(8)).to.equal(3)})})})},{"../src/UnorderedList":2}]},{},[3]);