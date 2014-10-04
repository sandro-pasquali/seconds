seconds
=======

Wrapper that times wrapped function execution time in seconds and returns result

Usage
=====

Given some function:

```
function foo(callback) {
	setTimeout(function() {
		callback(null, 'oi')
	}, 500)
}
```

Normally:

```
foo(function() {
	console.log(arguments)
})
// { '0': null, '1': 'oi' }
```

If you would like to know how long the function takes to run, in seconds:

```
seconds(foo)(function() {
	console.log(arguments)
})
// { '0': null,
//   '1': 'oi',
//   '2': { start: 1412464904109, end: 1412464904623, total: 514 } }
```

Timing data is passed as a final argument to the callback.

The function your are measuring should follow the standard Node practice of accepting a callback function as its final argument 