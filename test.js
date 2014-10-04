var seconds = require('./seconds')

function foo(cb) {
	setTimeout(function() {
		cb(null, 'oi')
	}, 500)
}

function callback() {
	console.log(arguments)
}

foo(callback)

seconds(foo)(callback)