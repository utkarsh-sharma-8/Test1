// script.js
document.getElementById('meditation-button').addEventListener('click', function() {
    const meditationText = document.getElementById('meditation-text');
    meditationText.textContent = "Your 5-minute meditation session has started. Relax and focus on your breathing.";

    setTimeout(() => {
        meditationText.textContent = "Your meditation session is complete. Feel free to start again.";
    }, 300000); // 5 minutes = 300000 milliseconds
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message. We will get back to you shortly.');
    this.reset();
});
