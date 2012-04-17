(function($) {

	$.fn.extend({

		pingback: function($element, endClassName, options) {

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
			var defaults = {
				/**
				* Threshold velocity in pixels per second over which the
				* transition automatically animates to the endpoint.
				* default: 10 p/s
				*/
				v_t: 10.0,
			
				/**
				* Threshold position over which the transition automatically
				* animates to the endpoint.
				* default: 50%;
				*/
				v_s = 50.0,

				from: $el.position()
			}

			var options =  $.extend(defaults, options);

			/**
			* Find out where we're transitioning to
			*/
			var toStyles = window.getComputedStyle($el, endClassName);
			
			options.to = {
				top: toStyles.getPropertyValue('top'),
				left: toStyles.getPropertyValue('left')
			};


			// **********
			// Hooks
			// **********
			
			// **********
			// Handlers
			// **********


		};
		
	});

})(JQuery);

