// Function to open the project documentation modal
function openModal(projectId) {
    const modal = document.getElementById("docModal");
    const modalImg = document.getElementById("modalImg");
    const modalTitle = document.getElementById("modalTitle");
    const modalSummary = document.getElementById("modalSummary");

    // Sample data for the random project
    if(projectId === 'project1') {
        modalImg.src = "assets/project1.jpg";
        modalTitle.innerText = "E-commerce Data Pipeline";
        modalSummary.innerText = "Built an automated data flow from CSV sources to a SQL database, featuring data cleaning in Python and a final dashboard in Power BI.";
    }

    modal.style.display = "block";
}

// Function to close modal
function closeModal() {
    document.getElementById("docModal").style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    let modal = document.getElementById("docModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Contact Form Handler
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thank you, Salman will get back to you soon!");
    this.reset();
});
