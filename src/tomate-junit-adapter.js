(function(){

	var el;
	/**
	 * creates an hidden field to store xml contents
	 */
	jasmine.JUnitXmlReporter.prototype.writeFile = function(filename, text) {
		el.value = text;
		el.setAttribute('data-filename', filename);
	};

	jasmine.JUnitXmlReporter.prototype.setOutput = function(outputEl){
		el = outputEl;
	};
	
})();