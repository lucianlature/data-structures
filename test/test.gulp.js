!function e(t,r,i){function o(u,a){if(!r[u]){if(!t[u]){var s="function"==typeof require&&require;if(!a&&s)return s(u,!0);if(n)return n(u,!0);throw new Error("Cannot find module '"+u+"'")}var f=r[u]={exports:{}};t[u][0].call(f.exports,function(e){var r=t[u][1][e];return o(r?r:e)},f,f.exports,e,t,r,i)}return r[u].exports}for(var n="function"==typeof require&&require,u=0;u<i.length;u++)o(i[u]);return o}({1:[function(e,t){"use strict";function r(){this._items=[]}r.prototype.isEmpty=function(){return 0===this._items.length},r.prototype.addRear=function(e){this._items.unshift(e)},r.prototype.removeRear=function(){return this._items.shift()},r.prototype.size=function(){return this._items.length},t.exports=r},{}],2:[function(e){"use strict";var t=e("../src/Deque"),r=chai.expect,i=null;describe("Deque test",function(){beforeEach(function(e){i=new t,e()}),afterEach(function(e){i=null,e()}),describe("Deque instantiation",function(){it("should be able to instantiate a new deque",function(){r(i).to.be.an.instanceof(t)})}),describe("Deque isEmpty",function(){it("should be true if the deque is empty",function(){var e=i.isEmpty();r(e).to.be.true}),it("should be false if the deque is not empty",function(){i.addRear("foo");var e=i.isEmpty();r(e).to.be.false})}),describe("Deque addRear",function(){it("should add new items to the rear",function(){var e=i.isEmpty();r(e).to.be.true,i.addRear("foo"),i.addRear("bar"),r(i.size()).to.equal(2)})}),describe("Deque removeRear",function(){it("should remove the front item from the queue",function(){var e,t,o=i.isEmpty();r(o).to.be.true,i.addRear("foo"),i.addRear("bar"),r(i.size()).to.equal(2),e=i.removeRear(),r(e).to.equal("bar"),t=i.removeRear(),r(t).to.equal("foo"),r(i.isEmpty()).to.be.true})})})},{"../src/Deque":1}]},{},[2]);
!function e(t,u,n){function i(r,s){if(!u[r]){if(!t[r]){var f="function"==typeof require&&require;if(!s&&f)return f(r,!0);if(o)return o(r,!0);throw new Error("Cannot find module '"+r+"'")}var c=u[r]={exports:{}};t[r][0].call(c.exports,function(e){var u=t[r][1][e];return i(u?u:e)},c,c.exports,e,t,u,n)}return u[r].exports}for(var o="function"==typeof require&&require,r=0;r<n.length;r++)i(n[r]);return i}({1:[function(e,t){"use strict";function u(){this._items=[]}u.prototype.isEmpty=function(){return 0===this._items.length},u.prototype.enqueue=function(e){this._items.push(e)},u.prototype.dequeue=function(){return this._items.pop()},u.prototype.size=function(){return this._items.length},t.exports=u},{}],2:[function(e){"use strict";var t=e("../src/Queue"),u=chai.expect,n=null;describe("Queue test",function(){beforeEach(function(e){n=new t,e()}),afterEach(function(e){n=null,e()}),describe("Queue instantiation",function(){it("should be able to instantiate a new Queue",function(){u(n).to.be.an.instanceof(t)})}),describe("Queue isEmpty",function(){it("should be true if the queue is empty",function(){var e=n.isEmpty();u(e).to.be.true}),it("should be false if the queue is not empty",function(){n.enqueue("foo");var e=n.isEmpty();u(e).to.be.false})}),describe("Queue enqueue",function(){it("should insert new items into the queue",function(){var e=n.isEmpty();u(e).to.be.true,n.enqueue("foo"),n.enqueue("bar"),n.enqueue(7),n.enqueue(!0),n.enqueue([]),n.enqueue({}),n.enqueue(function(){}),u(n.size()).to.equal(7)})}),describe("Queue dequeue",function(){it("should remove the front item from the queue",function(){var e,t=n.isEmpty();u(t).to.be.true,n.enqueue("foo"),n.enqueue("bar"),n.enqueue(4),e=n.dequeue(),u(e).to.equal(4),e=n.dequeue(),u(e).to.equal("bar"),u(n.size()).to.equal(1)})})})},{"../src/Queue":1}]},{},[2]);
!function t(e,o,i){function n(s,r){if(!o[s]){if(!e[s]){var p="function"==typeof require&&require;if(!r&&p)return p(s,!0);if(u)return u(s,!0);throw new Error("Cannot find module '"+s+"'")}var c=o[s]={exports:{}};e[s][0].call(c.exports,function(t){var o=e[s][1][t];return n(o?o:t)},c,c.exports,t,e,o,i)}return o[s].exports}for(var u="function"==typeof require&&require,s=0;s<i.length;s++)n(i[s]);return n}({1:[function(t,e){"use strict";function o(){this._items=[]}o.prototype.push=function(t){this._items.push(t)},o.prototype.pop=function(){return this._items.pop()},o.prototype.isEmpty=function(){return 0===this._items.length},o.prototype.size=function(){return this._items.length},o.prototype.peek=function(){var t=this.size();return t>=1?this._items[t-1]:null},e.exports=o},{}],2:[function(t){"use strict";var e=t("../src/Stack"),o=chai.expect,i=null;describe("Stack test",function(){beforeEach(function(t){i=new e,t()}),afterEach(function(t){i=null,t()}),describe("Stack instantiation",function(){it("should be able to instantiate a new Stack",function(){o(i).to.be.an.instanceof(e)})}),describe("Stack isEmpty",function(){it("should be true if the stack is empty",function(){var t=i.isEmpty();o(t).to.be.true}),it("should be false if the stack is not empty",function(){i.push("foo");var t=i.isEmpty();o(t).to.be.false})}),describe("Stack push",function(){it("should insert new items into the stack",function(){var t=i.isEmpty();o(t).to.be.true,i.push("foo"),i.push("bar"),i.push(7),i.push(!0),i.push([]),i.push({}),i.push(function(){}),o(i.size()).to.equal(7)})}),describe("Stack pop",function(){it("should remove the top item of the stack",function(){var t,e=i.isEmpty();o(e).to.be.true,i.push("foo"),i.push("bar"),t=i.pop(),o(t).to.equal("bar"),i.push(4),t=i.pop(),o(t).to.equal(4),o(i.size()).to.equal(1)})}),describe("Stack size",function(){it("should return the correct size of the stack",function(){var t,e=i.isEmpty();for(o(e).to.be.true,i.push("foo"),i.push("bar"),i.push(7),t=i.size();i.pop();)o(i.size()).to.equal(--t);["foo","bar",1,3].forEach(function(e){i.push(e),o(i.size()).to.equal(++t)})})}),describe("Stack peek",function(){it("should return the top item on the stack",function(){var t=i.isEmpty();o(t).to.be.true,i.push("foo"),i.push("bar"),i.push(7),o(i.peek()).to.equal(7),i.pop(),o(i.peek()).to.equal("bar"),i.pop(),o(i.peek()).to.equal("foo"),i.pop(),o(i.peek()).to.be.null}),it("doesn't modify the stack",function(){var t,e;i.push("foo"),i.push("bar"),i.push(7),e=i.size(),t=i.peek(),o(i.size()).to.equal(e)})})})},{"../src/Stack":1}]},{},[2]);