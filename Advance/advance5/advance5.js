// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Select all images with the 'lazy-image' class
    const lazyImages = document.querySelectorAll('.lazy-image');
    
    // Create an IntersectionObserver instance
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If the image is intersecting (i.e., in the viewport)
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src; // Load the image by setting src from data-src
                img.onload = () => {
                    img.classList.add('loaded'); // Add the loaded class after the image loads
                };
                observer.unobserve(img); // Stop observing once the image has been loaded
            }
        });
    });

    // Observe each lazy image
    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
});
