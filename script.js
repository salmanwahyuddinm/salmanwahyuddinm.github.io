// Skill Hover Highlight Logic
const skillTags = document.querySelectorAll('.skill-tag');

skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        const targetId = tag.getAttribute('data-target');
        const targetBar = document.getElementById(targetId);
        
        if (tag.classList.contains('hard-tag')) {
            targetBar.classList.add('highlight-hard');
        } else {
            targetBar.classList.add('highlight-soft');
        }
    });

    tag.addEventListener('mouseleave', () => {
        const targetId = tag.getAttribute('data-target');
        const targetBar = document.getElementById(targetId);
        targetBar.classList.remove('highlight-hard', 'highlight-soft');
    });
});

// Modal Logic
function openModal(id) {
    const modal = document.getElementById("projectModal");
    modal.style.display = "block";
    document.getElementById('modal-desc').innerText = "This project focuses on building automated pipelines for retail data using Python and SQL.";
}

function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}

// Close modal on outside click
window.onclick = function(e) {
    if (e.target.className === "modal") closeModal();
}

// Contact Form Simulation
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Message sent! I will get back to you soon.");
});
