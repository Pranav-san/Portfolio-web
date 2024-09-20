document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const responseMessage = document.getElementById('responseMessage');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Here you can add code to send the form data to a server or API
        // For now, we'll just simulate a successful submission
        responseMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
        responseMessage.style.color = '#b74b4b';

        // Clear the form fields
        form.reset();
    });
});