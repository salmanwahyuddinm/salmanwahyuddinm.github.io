// Initialize Chart
let ctx = document.getElementById('skillChart').getContext('2d');
let skillChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Mastery %',
            data: [],
            backgroundColor: []
        }]
    },
    options: {
        indexAxis: 'y',
        scales: { x: { min: 0, max: 100 } },
        plugins: { legend: { display: false } }
    }
});

// Interactive Skill Chart Logic
const skillTags = document.querySelectorAll('.skill-tag');
const chartContainer = document.querySelector('.image-side');

// Initially hide the canvas
document.getElementById('skillChart').style.opacity = '0';

skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        const percent = tag.getAttribute('data-percent');
        const name = tag.innerText;
        const type = tag.parentElement.getAttribute('data-type');
        const color = type === 'hard' ? '#ff9f43' : '#a29bfe';

        updateChart(name, percent, color);
        document.getElementById('skillChart').style.opacity = '1';
    });
});

function updateChart(label, value, color) {
    skillChart.data.labels = [label];
    skillChart.data.datasets[0].data = [value];
    skillChart.data.datasets[0].backgroundColor = [color];
    skillChart.update();
}

// Modal Logic
function openModal(projectId) {
    const modal = document.getElementById('projectModal');
    const title = document.getElementById('modal-title');
    const desc = document.getElementById('modal-desc');
    const img = document.getElementById('modal-img');

    // Dummy data for example
    title.innerText = "Data Pipeline Project";
    desc.innerText = "A summary of the end-to-end data pipeline using Python and SQL to automate sales reporting.";
    img.src = "https://via.placeholder.com/400x200";

    modal.style.display = "block";
}

function closeModal() {
    document.getElementById('projectModal').style.display = "none";
}

// Form Submission (Simulated)
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent to Salman.");
});
