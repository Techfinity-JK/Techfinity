/* ==========================================================================
   Mobile Navigation Handler
   ========================================================================== */
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById("hamburger");
    const drawer = document.getElementById("mobile-drawer");

    if (!hamburger || !drawer) return;

    hamburger.addEventListener("click", function(e) {
        e.stopPropagation();
        drawer.classList.toggle("open");
    });

    document.addEventListener("click", function(e) {
        if (!drawer.contains(e.target) && !hamburger.contains(e.target)) {
            drawer.classList.remove("open");
        }
    });

    drawer.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
            drawer.classList.remove("open");
        });
    });
});
