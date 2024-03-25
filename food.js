document.addEventListener('DOMContentLoaded', function() {
    var dropdowns = document.querySelectorAll('.dropdown-btn');
    dropdowns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            this.classList.toggle("active");
            var dropdownContent = this.nextElementSibling;
            var displayStatus = dropdownContent.style.display;
            
            // Close all dropdowns first
            document.querySelectorAll('.dropdown-content').forEach(function(el) {
                el.style.display = 'none';
                el.previousElementSibling.classList.remove("active");
                el.previousElementSibling.querySelector('.caret').textContent = '\u25BC'; // Reset caret
            });

            // Open the clicked dropdown if it was previously closed
            if (displayStatus === 'block') {
                dropdownContent.style.display = 'none';
                this.querySelector('.caret').textContent = '\u25BC'; // Downward caret
            } else {
                dropdownContent.style.display = 'block';
                this.querySelector('.caret').textContent = '\u25B2'; // Upward caret
            }
        });
    });
});

// Optional: Add an event listener to close dropdowns when clicking outside
window.addEventListener('click', function(e) {
    if (!e.target.matches('.dropdown-btn')) {
        document.querySelectorAll('.dropdown-content').forEach(function(item) {
            item.style.display = 'none';
            if (item.previousElementSibling.querySelector('.caret')) {
                item.previousElementSibling.querySelector('.caret').textContent = '\u25BC'; // Reset caret
                item.previousElementSibling.classList.remove("active");
            }
        });
    }
});
