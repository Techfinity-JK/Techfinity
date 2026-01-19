/* ==========================================================================
   EmailJS Handler - Unified for all pages
   ========================================================================== */
(function() {
    emailjs.init({
        publicKey: "xxKS0v3FAYc4MwLgb",
    });
})();

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const submitBtn = form.querySelector('.contact-submit');
        const originalContent = submitBtn.innerHTML;
        submitBtn.innerHTML = '<p>Sending...</p>';
        submitBtn.disabled = true;

        emailjs.sendForm('service_gsitdn9', 'template_p1vimcp', this)
            .then(() => {
                console.log('SUCCESS!');
                const isSubpage = window.location.pathname.includes('/products/');
                window.location.href = isSubpage ? "../form-sent.html" : "form-sent.html";
            }, (error) => {
                console.log('FAILED...', error);
                submitBtn.innerHTML = originalContent;
                submitBtn.disabled = false;
                const status = document.getElementById("status");
                if (status) {
                    status.innerText = "Failed to send message. Please try again.";
                    status.style.color = "#d32f2f";
                }
            });
    });
});
