(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
        publicKey: "xxKS0v3FAYc4MwLgb",
    });
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_gsitdn9', 'template_p1vimcp', this)
            .then(() => {
                console.log('SUCCESS!');
                window.location.href = "../form-sent.html";
            }, (error) => {
                console.log('FAILED...', error);
                document.getElementById("status").innerText = "❌ Failed to send message. Try again.";
            });
    });
}