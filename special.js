document.addEventListener("DOMContentLoaded", function () {
    // Get all the ".daily__specials" elements
    var dailySpecials = document.querySelectorAll(".daily__specials");

    // Set up Intersection Observer options
    var options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5 // Adjust as needed
    };

    // Create a callback function to handle the intersection
    var handleIntersection = function (entries) {
        entries.forEach(function (entry) {
            // Get the corresponding ".special__descrip" element
            var specialDescrip = entry.target.querySelector(".special__descrip");

            // Check if the ".daily__specials" section is in view
            if (entry.isIntersecting) {
                // If in view, make ".special__descrip" visible
                specialDescrip.style.display = "block";

                // Add the fade-in class for the transition effect
                specialDescrip.classList.add("fade-in");
            } else {
                // If not in view, hide ".special__descrip"
                specialDescrip.style.display = "none";

                // Remove the fade-in class to reset the opacity
                specialDescrip.classList.remove("fade-in");
            }
        });
    };

    // Create an Intersection Observer instance
    var observer = new IntersectionObserver(handleIntersection, options);

    // Observe each ".daily__specials" element
    dailySpecials.forEach(function (dailySpecial) {
        observer.observe(dailySpecial);
    });
});
