document.addEventListener("DOMContentLoaded", () => {
    const stickyNav = document.getElementById("sticky-nav");
    const header = document.getElementById("home");
    
    if (stickyNav && header) {
        window.addEventListener("scroll", () => {
            // Show sticky nav when we scroll past the main header area
            if (window.scrollY > header.offsetHeight - 60) {
                stickyNav.classList.add("visible");
            } else {
                stickyNav.classList.remove("visible");
            }
        });
    }
});
