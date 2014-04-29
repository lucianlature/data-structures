var __slice = [].slice;

function extend () {
	var consumer = arguments[0],
	providers = __slice.call(arguments, 1),
	l = providers.length,
	key,
	i = 0,
	provider;

	for (; i < l; ++i) {
		provider = providers[i];
		var keys = Object.keys(provider);
		keys.forEach(function (key) {
			consumer[key] = provider[key];
		})
	};
	return consumer;
};


function partialProxy (baseObject, methods, optionalPrivateProperties) {

	var proxyObject = Object.create(null);

	if (optionalPrivateProperties) {
		optionalPrivateProperties.forEach(function (privatePropertyName) {
			proxyObject[privatePropertyName] = null;
		});
	}

	methods.forEach(function (methodName) {
		proxyObject[methodName] = function () {
			var result = baseObject[methodName].apply(baseObject, arguments);
			return (result === baseObject) ? proxyObject : result;
		}
	});

	Object.preventExtensions(proxyObject);

	return proxyObject;
}


var number = 0;

function methodsOfType (behaviour, type) {
	var methods = [],
		methodName;

	for (methodName in behaviour) {
		if (typeof(behaviour[methodName]) === type) {
			methods.push(methodName);
		}
	};
	return methods;
}

function propertyFlags (behaviour) {
	var properties = [],
		propertyName;

	for (propertyName in behaviour) {
		if (behaviour[propertyName] === null) {
			properties.push(propertyName);
		}
	}
	return properties;
}

function extendWithProxy (baseObject, behaviour) {
	var safekeepingName = "__" + ++number + "__",
		definedMethods = methodsOfType(behaviour, 'function'),
		dependencies = methodsOfType(behaviour, 'undefined'),
		properties = propertyFlags(behaviour),
		methodName;

	definedMethods.forEach(function (methodName) {

		baseObject[methodName] = function () {
			var context = this[safekeepingName],
				result;

			if (context == null) {
				context = partialProxy(this, definedMethods.concat(dependencies), properties);
				properties.forEach(function (propertyName) {
					context[propertyName] = behaviour[propertyName];
				});

				Object.defineProperty(this, safekeepingName, {
					enumerable: false,
					writable: false,
					value: context
				});
			}

			result = behaviour[methodName].apply(context, arguments);
			return (result === context) ? this : result;
		};
	});

	return baseObject;

}

function createPrototype () {
	var superPrototype = arguments[0],
		baseObject = Object.create(superPrototype),
		behaviours = __slice.call(arguments, 1);

	return behaviours.reduce(function (prototype, behaviour) {
		return extendWithProxy(prototype, behaviour);
	}, baseObject);
}


// policies for resolving methods

var policies = {
  overwrite: function overwrite (fn1, fn2) {
    return fn2;
  },
  discard: function discard (fn1, fn2) {
    return fn1;
  },
  before: function before (fn1, fn2) {
    return function () {
      fn2.apply(this, arguments);
      return fn1.apply(this, arguments);
    }
  },
  after: function after (fn1, fn2) {
    return function () {
      fn1.apply(this, arguments);
      return fn2.apply(this, arguments);
    }
  },
  around: function around (fn1, fn2) {
    return function () {
      var argArray = [fn1.bind(this)].concat(__slice.call(arguments, 0));
      return fn2.apply(this, argArray);
    }
  }
};

// helper for writing resolvable mixins

function resolve(mixin, policySpecification) {
  var result = extend(Object.create(null), mixin);

  Object.keys(policySpecification).forEach(function (policy) {
    var methodNames = policySpecification[policy];

    methodNames.forEach(function (methodName) {
      result[methodName] = {};
      result[methodName][policy] = mixin[methodName];
    });
  });

  return result;
}

// composing mixins

function composeBehaviour () {
  var mixins = __slice.call(arguments, 0),
      dummy  = function () {};

  return mixins.reduce(function (acc1, mixin) {
    return Object.keys(mixin).reduce(function (result, methodName) {
      var bDefinition = mixin[methodName],
          bType       = typeof(bDefinition),
          aDefinition,
          aType,
          bResolverKey,
          bDefinition;

      if (result.hasOwnProperty(methodName)) {
        aDefinition = result[methodName];
        aType = typeof(aDefinition);

        if (aDefinition === null && bDefinition === null) {
          throw "'" + methodName + "' cannot be private to multiple mixins."
        }
        else if (aDefinition === null || bDefinition === null) {
          throw "'" + methodName + "' cannot be a method and a property."
        }
        else if (aType ===  'undefined') {
          if (bType === 'function' || bType === 'undefined') {
            result[methodName] = bDefinition;
          }
          else if (bType === 'object') {
            bResolverKey = Object.keys(bDefinition)[0];
            bDefinition = bDefinition[bResolverKey];
            if (bResolverKey === 'around') {
              result[methodName] = function () {
                return bDefinition.apply(this, [dummy] + __slice.call(0, arguments));
              }
            }
            else result[methodName] = bDefinition;
          }
          else throw aType + " cannot be mixed in as '" + methodName + "'";
        }
        else if (bType === 'object') {
          bResolverKey = Object.keys(bDefinition)[0];
          bDefinition = bDefinition[bResolverKey];
          result[methodName] = policies[bResolverKey](aDefinition, bDefinition);
        }
        else if (bType === 'undefined') {
          // do nothing
        }
        else throw "unresolved method conflict for '" + methodName + "'";
      }
      else if (bDefinition === null) {
        result[methodName] = null;
      }
      else if (bType === 'function' || bType === 'undefined') {
        result[methodName] = bDefinition;
      }
      else if (bType === 'object') {
        bResolverKey = Object.keys(bDefinition)[0];
        bDefinition = bDefinition[bResolverKey];
        if (bResolverKey === 'around') {
          result[methodName] = function () {
            return bDefinition.apply(this, [dummy] + __slice.call(0, arguments));
          }
        }
        else result[methodName] = bDefinition;
      }
      else bType + " cannot be used for '" + methodName + "'";

      return result;
    }, acc1);
  }, {});
}

function sum (a,b) {
	return a + b;
}

function substract (a,b) {
	return a - b;
}

/**
 *
var stack = {
  array: [],
  undoStack: [],
  push: function (value) {
    this.undoStack.push(function () {
      this.array.pop();
    });
    return this.array.push(value);
  },
  pop: function () {
    var popped = this.array.pop();
    this.undoStack.push(function () {
      this.array.push(popped);
    });
    return popped;
  },
  isEmpty: function () {
    return array.length === 0;
  },
  undo: function () {
    this.undoStack.pop().call(this);
  }
};
 */

var HasSize = {
	// private property, initialized to null
	_length: 0,
	_incrementorValue: 1,
	_operate: function (operationFn) {
        var fn = operationFn.bind(this);
        return function () {
            this._length = fn.call(this, this._length, this._incrementorValue);
        }
	},
    size: function () {
        return this._length;
    }
};

HasSize.increment = HasSize._operate(sum);
HasSize.decrement = HasSize._operate(substract);


// composes compatible mixins
composeBehaviour(
  HasName,
  HasCareer
);


