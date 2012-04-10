(function($) {

	JQuery.fn.pingback = function($element, endClassName, options) {

		/**
		* Store reference to the HTML to animate
		*/
		var $el = $element;
		
		/**
		* Store reference to the class name that determines the
		* endpoint of the transition
		*/
		var tagNameEnd = className;
		
		// **********
		// Defaults
		// **********
		
		/**
		* Threshold velocity in pixels per second over which the
		* transition automatically animates to the endpoint.
		* default: 10 p/s
		*/
		var v_t = 10.0;
		
		/**
		* Threshold position over which the transition automatically
		* animates to the endpoint.
		* default: 50%;
		*/
		var v_s = 50.0;


		if (options !== undefined) {
			// Override defaults defined above
		}

		// **********
		// Hooks
		// **********
		
		// **********
		// Handlers
		// **********

	};

})(JQuery);

