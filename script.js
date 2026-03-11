// Documentation Modal Logic
const modal = document.getElementById("projectModal");
const span = document.getElementsByClassName("close")[0];

function openModal(projectId) {
    const modalBody = document.getElementById("modal-body");
    
    // Example data for the modal
    if(projectId === 'proj1') {
        modalBody.innerHTML = `
            <h3>E-Commerce Data Analysis</h3>
            <img src="assets/project1.jpg" style="width:100%; border-radius:10px; margin: 10px 0;">
            <p>Summary: Cleaned a dataset of 10,000 sales records to identify seasonal trends and customer demographics.</p>
            <div style="margin-top: 20px; display: flex; gap: 10px;">
                <a href="#" class="btn-sm">PDF</a>
                <a href="#" class="btn-sm">Code</a>
                <a href="#" class="btn-sm">Dashboard</a>
            </div>
        `;
    }
    modal.style.display = "block";
}

// Close modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Simple Contact Form Alert
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you, Salman will get back to you soon!');
    this.reset();
});
