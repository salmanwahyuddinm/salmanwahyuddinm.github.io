// Mastery Skill Chart Logic
const skillItems = document.querySelectorAll('.skill-item');
const chartBar = document.getElementById('skill-bar');
const barWrapper = document.querySelector('.bar-wrapper');
const skillVal = document.getElementById('skill-val');
const placeholder = document.getElementById('chart-placeholder');

skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const percent = item.getAttribute('data-percent');
        const isHard = item.classList.contains('hard');
        
        placeholder.style.display = 'none';
        barWrapper.style.display = 'block';
        
        chartBar.style.width = percent + '%';
        chartBar.style.background = isHard ? 'linear-gradient(90deg, #ff9966, #ff5e62)' : 'linear-gradient(90deg, #6a11cb, #2575fc)';
        skillVal.innerText = percent + '%';
    });

    item.addEventListener('mouseleave', () => {
        // Keep it simple, or reset on leave
        // chartBar.style.width = '0';
    });
});

// Modal Logic
const modal = document.getElementById('projectModal');
const projectData = {
    proj1: { title: "E-Commerce Sales", summary: "Analyzed 10k+ rows of sales data to identify seasonal trends using Python and SQL.", img: "assets/project1.jpg" },
    proj2: { title: "Supply Chain", summary: "Optimized inventory tracking system for a local warehouse using Excel automation.", img: "assets/project2.jpg" },
    proj3: { title: "Customer Churn", summary: "Visualized customer retention rates in Tableau to reduce churn by 15%.", img: "assets/project3.jpg" }
};

function openModal(id) {
    const data = projectData[id];
    document.getElementById('modalTitle').innerText = data.title;
    document.getElementById('modalSummary').innerText = data.summary;
    document.getElementById('modalImg').src = data.img;
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target == modal) closeModal();
}

// Form Submission (Dummy)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you, Salman will get back to you soon!');
    this.reset();
});
