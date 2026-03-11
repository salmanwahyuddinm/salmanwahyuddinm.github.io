// Skill Mastery Interaction
const skillTags = document.querySelectorAll('.skill-tag');
const chartBar = document.getElementById('chart-bar');
const chartLabel = document.getElementById('chart-label');

skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        const percent = tag.getAttribute('data-percent');
        const isHard = tag.classList.contains('hard');
        
        chartBar.style.width = percent + '%';
        chartBar.style.background = isHard ? 'linear-gradient(90deg, #ff8c00, #ffa502)' : 'linear-gradient(90deg, #6c5ce7, #a29bfe)';
        chartLabel.innerHTML = `${tag.innerText}: <strong>${percent}%</strong>`;
        tag.style.transform = "scale(1.05)";
    });

    tag.addEventListener('mouseleave', () => {
        tag.style.transform = "scale(1)";
    });
});

// Modal Logic
function openModal(title, summary, pdf, code, dash) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalSummary').innerText = summary;
    document.getElementById('linkPDF').href = pdf;
    document.getElementById('linkCode').href = code;
    document.getElementById('linkDash').href = dash;
    document.getElementById('projectModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target == document.getElementById('projectModal')) {
        closeModal();
    }
}

// Simple Form Feedback
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thanks for reaching out, Salman! This is a demo; integrate with Formspree for real emails.");
});
