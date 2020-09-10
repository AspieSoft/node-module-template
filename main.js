

module.exports = (function(){
	let exports = function(options){
		return function(req, res, next){
			req.packageName = exports;
		};
	};
	//exports.example = example;
	return exports;
})();
