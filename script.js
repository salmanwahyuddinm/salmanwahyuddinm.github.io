// Sample Project Data
const projects = {
    proj1: {
        title: "E-Commerce Data Pipeline",
        image: "https://via.placeholder.com/600x300",
        summary: "An automated end-to-end data pipeline using Python and SQL to extract daily sales data, transform it for regional reporting, and load it into a Power BI dashboard.",
        pdf: "#",
        code: "https://github.com",
        dashboard: "#"
    }
};

// Modal Logic
function openModal(id) {
    const project = projects[id];
    const modal = document.getElementById("projectModal");
    const body = document.getElementById("modal-body");

    body.innerHTML = `
        <img src="${project.image}" style="width:100%; border-radius:15px; margin-bottom:15px;">
        <h3>${project.title}</h3>
        <p style="margin: 15px 0; color: #555;">${project.summary}</p>
        <div class="modal-btns">
            <a href="${project.pdf}" class="btn-pdf">PDF Document</a>
            <a href="${project.code}" class="btn-code">View Code</a>
            <a href="${project.dashboard}" class="btn-dash">Dashboard</a>
        </div>
    `;
    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}

// Close modal when clicking outside
window.onclick = function(event) {
    let modal = document.getElementById("projectModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Simple Form Alert
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you, Salman will get back to you soon!');
    this.reset();
});

// Skills Animation on Scroll
const observerOptions = { threshold: 0.5 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.bar-fill').forEach(bar => {
                const width = bar.parentElement.parentElement.getAttribute('data-percent');
                bar.style.width = width + '%';
            });
        }
    });
}, observerOptions);

observer.observe(document.querySelector('#skills'));
