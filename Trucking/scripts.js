// Learn More Button
function learnMore() {
    alert("At ABC Trucking & Logistics, we offer the best transportation services tailored to your needs.");
}

// Form Submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    document.getElementById("formResponse").innerHTML = `<p>Thank you, ${name}! We'll respond to your message at ${email} soon.</p>`;
});
