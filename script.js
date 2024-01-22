
document.addEventListener('DOMContentLoaded', function () {
    var dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function (dropdown) {
        var link = dropdown.querySelector('a');
        var dropdownContent = dropdown.querySelector('.dropdown-content');

        link.onclick = function (event) {
            event.preventDefault();

            // Toggle the display of the dropdown content
            dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';

            // Hide other dropdowns when one is clicked
            dropdowns.forEach(function (otherDropdown) {
                if (otherDropdown !== dropdown) {
                    otherDropdown.querySelector('.dropdown-content').style.display = 'none';
                }
            });
        };
    });
});




document.addEventListener('DOMContentLoaded', function () {
    var options = {
        threshold: 0.5 // Adjust the threshold based on your needs
    };

    var observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                startCounting(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, options);

    var elements = document.querySelectorAll('.count');
    elements.forEach(function (element) {
        observer.observe(element);
    });
});

function startCounting(element) {
    var countValue = parseInt(element.getAttribute('data-count'), 10);
    var interval = 20; // milliseconds
    var duration = 2000; // milliseconds
    var steps = duration / interval;
    var currentStep = 0;
    var stepValue = countValue / steps;

    var counter = setInterval(function () {
        currentStep++;
        element.textContent = Math.floor(stepValue * currentStep);

        if (currentStep >= steps) {
            clearInterval(counter);
            element.textContent = countValue;
        }
    }, interval);
}