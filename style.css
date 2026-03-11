// Skill Bar Logic
const skillLabels = document.querySelectorAll('.skill-label');
const activeBar = document.getElementById('active-bar');

skillLabels.forEach(label => {
    label.addEventListener('mouseenter', () => {
        const percent = label.getAttribute('data-percent');
        const type = label.parentElement.getAttribute('data-type');
        
        activeBar.style.width = percent + '%';
        activeBar.innerText = percent + '%';
        
        if(type === 'hard') {
            activeBar.style.background = 'linear-gradient(90deg, #f59e0b, #ea580c)';
            label.style.color = '#ea580c';
        } else {
            activeBar.style.background = 'linear-gradient(90deg, #a855f7, #7c3aed)';
            label.style.color = '#7c3aed';
        }
    });

    label.addEventListener('mouseleave', () => {
        label.style.color = '#334155';
    });
});

// Modal Logic
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalSummary = document.getElementById('modal-summary');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.doc-btn').forEach(btn => {
    btn.onclick = () => {
        modal.style.display = "block";
        modalImg.src = btn.getAttribute('data-img');
        modalSummary.innerText = btn.getAttribute('data-summary');
    }
});

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if(e.target == modal) modal.style.display = "none"; }

// Simple Form Handling
document.getElementById('contact-form').onsubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully! (This is a demo)");
    e.target.reset();
};
