//	Pass a method through #seconds returning a funcition. Call that 
//	as you would the original function, and your callback will
//	receive some timing data as its final argument.
//
//	@see	test.js
//
//	spasquali@gmail.com
//
module.exports = function(meth) {

	var ass = Array.prototype.slice;
	
	return function() {
	
		var _this	= this
		var args 	= ass.call(arguments)
		var cb 		= args.pop()
		var start 	= new Date().getTime()
		
		args.push(function() {
		
			var args = ass.call(arguments)
			var end = new Date().getTime()
			
			args.push({
				start: start,
				end : end,
				total: end - start
			});
			cb.apply(_this, args)
		})
		meth.apply(_this, args)
	}
}


