(function($) { // Define a self-invoking function to allow the use of $ as a shorthand for jQuery or Zepto
  if(!$) { // Check if $ is not defined (neither jQuery nor Zepto)
    return; // Exit the function if $ is not available
  }

  ////////////
  // Plugin //
  ////////////

  $.fn.headroom = function(option) { // Define a jQuery plugin called "headroom"
    return this.each(function() { // Iterate over each element in the jQuery object
      var $this   = $(this), // Create a jQuery object for the current element
        data      = $this.data('headroom'), // Retrieve any existing data associated with the 'headroom' key
        options   = typeof option === 'object' && option; // Check if the provided option is an object

      options = $.extend(true, {}, Headroom.options, options); // Merge default options with provided options

      if (!data) { // If there is no existing headroom data for the element
        data = new Headroom(this, options); // Create a new Headroom instance for the current element
        data.init(); // Initialize the headroom functionality
        $this.data('headroom', data); // Store the headroom instance in the element’s data
      }
      if (typeof option === 'string') { // If the option is a string (indicating a method to call)
        data[option](); // Call the specified method on the headroom instance

        if(option === 'destroy'){ // If the method is 'destroy'
          $this.removeData('headroom'); // Remove the headroom data from the element
        }
      }
    });
  };

  //////////////
  // Data API //
  //////////////

  $('[data-headroom]').each(function() { // Select all elements with the data-headroom attribute
    var $this = $(this); // Create a jQuery object for the current element
    $this.headroom($this.data()); // Initialize the headroom plugin using the element's data attributes
  });

}(window.Zepto || window.jQuery)); // Execute the function using Zepto if available, otherwise jQuery
