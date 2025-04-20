(function ($) { // Define a self-invoking function to allow the use of $ as a shorthand for jQuery
  "use strict"; // Enforce strict mode for better error checking and performance

    // PRE LOADER
    $(window).load(function(){ // When the window has fully loaded (including all content)
      $('.preloader').delay(500).slideUp('slow'); // Hide the preloader element after a 500 ms delay with a sliding up effect
    });

    // NAVBAR
    $(".navbar").headroom(); // Initialize the headroom plugin on the navbar to show or hide it based on scroll

    $('.navbar-collapse a').click(function(){ // When any link inside the navbar collapse is clicked
        $(".navbar-collapse").collapse('hide'); // Hide the collapsible navbar menu
    });

    $('.slick-slideshow').slick({ // Initialize a Slick slider for slideshow elements
      autoplay: true, // Enable automatic sliding
      infinite: true, // Enable infinite looping of slides
      arrows: false, // Disable navigation arrows
      fade: true, // Enable fade transition between slides
      dots: true, // Show navigation dots
    });

    $('.slick-testimonial').slick({ // Initialize a Slick slider for testimonial elements
      arrows: false, // Disable navigation arrows
      dots: true, // Show navigation dots
    });
    
})(window.jQuery); // Execute the function using jQuery
