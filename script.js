// Skills Chart logic
const ctx = document.getElementById('skillsChart').getContext('2d');

const hardGradient = ctx.createLinearGradient(0, 0, 400, 0);
hardGradient.addColorStop(0, '#ff8c00');
hardGradient.addColorStop(1, '#ffa500');

const softGradient = ctx.createLinearGradient(0, 0, 400, 0);
softGradient.addColorStop(0, '#6a11cb');
softGradient.addColorStop(1, '#2575fc');

const skillsChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Excel', 'SQL', 'Python', 'Power BI', 'Problem-Solving', 'Communication', 'Attention to Detail', 'Adaptability'],
        datasets: [{
            label: 'Mastery %',
            data: [90, 85, 80, 85, 95, 90, 95, 90],
            backgroundColor: [
                hardGradient, hardGradient, hardGradient, hardGradient,
                softGradient, softGradient, softGradient, softGradient
            ],
            borderRadius: 5
        }]
    },
    options: {
        indexAxis: 'y',
        plugins: { legend: { display: false } },
        scales: { x: { max: 100 } }
    }
});

// Modal Logic for Projects
function openModal(projectId) {
    const modal = document.getElementById('projectModal');
    const body = document.getElementById('modal-body');
    
    // Dummy Content
    body.innerHTML = `
        <img src="https://via.placeholder.com/500x250" style="width:100%; border-radius:10px;">
        <h2 style="margin-top:15px;">Project Documentation</h2>
        <p>This project focused on building an automated data pipeline using Python and SQL to clean messy sales data and visualize it in Power BI.</p>
        <div style="margin-top:20px; display:flex; gap:10px;">
            <a href="#" class="doc-btn" style="background:#DB4437; text-decoration:none;">PDF File</a>
            <a href="#" class="doc-btn" style="background:#333; text-decoration:none;">View Code</a>
        </div>
    `;
    modal.style.display = "block";
}

function closeModal() {
    document.getElementById('projectModal').style.display = "none";
}

// Close modal when clicking outside
window.onclick = function(event) {
    let modal = document.getElementById('projectModal');
    if (event.target == modal) modal.style.display = "none";
}

// Form Submission handling (Prevent refresh)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you, Salman will get back to you soon!');
    this.reset();
});
