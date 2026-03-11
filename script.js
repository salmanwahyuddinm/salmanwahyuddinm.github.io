// Modal Functionality
function openModal(projectId) {
    const modal = document.getElementById("projectModal");
    modal.style.display = "block";
    
    // You can customize content based on projectId here
    if(projectId === 'proj1') {
        document.getElementById('modal-title').innerText = "E-Commerce Data Pipeline";
        document.getElementById('modal-desc').innerText = "A project focusing on cleaning messy CSV data and building a SQL-based warehouse for sales reporting.";
    }
}

function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}

// Close modal if user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById("projectModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Form Submission handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thank you, Salman! Your message has been simulated as sent. (Connect to a backend to receive real emails)");
    this.reset();
});

// Simple Scroll Animation (Reveal cards on scroll)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = 0;
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.6s ease-out";
    observer.observe(card);
});
