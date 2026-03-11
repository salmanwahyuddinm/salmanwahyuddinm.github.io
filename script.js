// Enhanced Skill Mastery Logic
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
            label.style.background = '#ffedd5'; // Light orange tint
            label.style.color = '#ea580c';
            label.style.fontWeight = 'bold';
        } else {
            activeBar.style.background = 'linear-gradient(90deg, #a855f7, #7c3aed)';
            label.style.background = '#f3e8ff'; // Light purple tint
            label.style.color = '#7c3aed';
            label.style.fontWeight = 'bold';
        }
    });

    label.addEventListener('mouseleave', () => {
        label.style.background = '#f1f5f9';
        label.style.color = '#334155';
        label.style.fontWeight = 'normal';
    });
});
