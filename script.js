// Skill Interaction
const skillTags = document.querySelectorAll('.skill-tag');

skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        const skillId = `bar-${tag.getAttribute('data-skill')}`;
        const barGroup = document.getElementById(skillId);
        
        if (tag.classList.contains('hard')) {
            tag.classList.add('active-hard');
            if(barGroup) barGroup.style.transform = "scale(1.05)";
        } else {
            tag.classList.add('active-soft');
            if(barGroup) barGroup.style.transform = "scale(1.05)";
        }
    });

    tag.addEventListener('mouseleave', () => {
        const skillId = `bar-${tag.getAttribute('data-skill')}`;
        const barGroup = document.getElementById(skillId);
        
        tag.classList.remove('active-hard', 'active-soft');
        if(barGroup) barGroup.style.transform = "scale(1)";
    });
});

// Modal Logic
function openModal(projectId) {
    const modal = document.getElementById('projectModal');
    const body = document.getElementById('modalBody');
    
    // Dummy Data for Modal
    const projects = {
        'proj1': {
            title: "E-commerce Sales Analysis",
            summary: "End-to-end analysis of retail data using Python and SQL to identify growth opportunities.",
            img: "https://via.placeholder.com/400x200",
            pdf: "#",
            code: "#",
            dashboard: "#"
        }
    };

    const p = projects[projectId];
    body.innerHTML = `
        <img src="${p.img}" style="width:100%; border-radius:15px; margin-bottom:15px;">
        <h3>${p.title}</h3>
        <p style="margin: 10px 0;">${p.summary}</p>
        <div style="display:flex; gap:10px; margin-top:20px;">
            <a href="${p.pdf}" class="btn-doc" style="background:#e74c3c; text-decoration:none;">PDF</a>
            <a href="${p.code}" class="btn-doc" style="background:#27ae60; text-decoration:none;">Code</a>
            <a href="${p.dashboard}" class="btn-doc" style="background:#3498db; text-decoration:none;">Dashboard</a>
        </div>
    `;
    
    modal.style.display = "block";
}

function closeModal() {
    document.getElementById('projectModal').style.display = "none";
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
