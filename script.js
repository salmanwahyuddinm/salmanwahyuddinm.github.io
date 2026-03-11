// Smooth scrolling for navigation links
document.querySelectorAll('.nav-item').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Update active navigation item on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').substring(1) === current) {
            item.classList.add('active');
        }
    });
});

// Skills chart animation
const skillBars = document.querySelectorAll('.skill-bar');
const hardSkillTrigger = document.querySelector('.hard-skill-trigger');
const softSkillTrigger = document.querySelector('.soft-skill-trigger');

// Hide all skill bars initially
skillBars.forEach(bar => {
    bar.classList.remove('show');
});

// Show hard skills on hover
hardSkillTrigger.addEventListener('mouseenter', () => {
    skillBars.forEach(bar => {
        if (bar.dataset.type === 'hard') {
            bar.classList.add('show');
            const level = bar.dataset.level;
            bar.style.setProperty('--skill-level', level + '%');
            const fill = bar.querySelector('.bar-fill');
            fill.style.width = level + '%';
        } else {
            bar.classList.remove('show');
        }
    });
});

// Show soft skills on hover
softSkillTrigger.addEventListener('mouseenter', () => {
    skillBars.forEach(bar => {
        if (bar.dataset.type === 'soft') {
            bar.classList.add('show');
            const level = bar.dataset.level;
            bar.style.setProperty('--skill-level', level + '%');
            const fill = bar.querySelector('.bar-fill');
            fill.style.width = level + '%';
        } else {
            bar.classList.remove('show');
        }
    });
});

// Project modal functionality
const modal = document.getElementById('projectModal');
const docButtons = document.querySelectorAll('.doc-btn');
const closeBtn = document.querySelector('.close');

// Project data
const projects = {
    1: {
        title: 'Sales Analytics Dashboard',
        image: 'https://via.placeholder.com/600x400/E3F2FD/1976D2?text=Sales+Dashboard',
        description: 'Developed an interactive Power BI dashboard analyzing e-commerce sales trends across multiple regions. The project involved cleaning and preprocessing data using Python, creating calculated measures in DAX, and building dynamic visualizations that helped identify key revenue drivers and customer segments. The dashboard enabled stakeholders to make data-driven decisions, resulting in a 15% increase in quarterly sales.',
        pdf: '#',
        code: 'https://github.com/yourusername/sales-dashboard',
        dashboard: 'https://app.powerbi.com/view?r=example'
    },
    2: {
        title: 'Customer Churn Prediction',
        image: 'https://via.placeholder.com/600x400/F3E5F5/7B1FA2?text=Customer+Churn',
        description: 'Built a machine learning model achieving 92% accuracy in predicting customer churn for a telecommunications company. The project included comprehensive exploratory data analysis, feature engineering, and model selection using Random Forest and XGBoost. Implemented SHAP values for model interpretability and created actionable recommendations that reduced churn by 18% in the test period.',
        pdf: '#',
        code: 'https://github.com/yourusername/churn-prediction',
        dashboard: 'https://public.tableau.com/views/churn-analysis'
    },
    3: {
        title: 'Market Basket Analysis',
        image: 'https://via.placeholder.com/600x400/E8F5E9/388E3C?text=Market+Analysis',
        description: 'Conducted association rule mining on retail transaction data to identify product purchase patterns. Using the Apriori algorithm and Python, discovered key product associations with lift values above 3.0. The analysis resulted in strategic product placement recommendations and bundle offers that increased average transaction value by 12%. Created an interactive Tableau dashboard for ongoing monitoring.',
        pdf: '#',
        code: 'https://github.com/yourusername/market-basket',
        dashboard: 'https://public.tableau.com/views/market-basket'
    }
};

// Open modal
docButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const projectId = e.target.dataset.project;
        const project = projects[projectId];
        
        document.getElementById('modalImage').src = project.image;
        document.getElementById('modalTitle').textContent = project.title;
        document.getElementById('modalDescription').textContent = project.description;
        document.getElementById('pdfLink').href = project.pdf;
        document.getElementById('codeLink').href = project.code;
        document.getElementById('dashboardLink').href = project.dashboard;
        
        modal.style.display = 'block';
    });
});

// Close modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Contact form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    // Create mailto link
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    const mailtoLink = `mailto:your-email@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    // Reset form
    contactForm.reset();
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.education-card, .experience-card, .project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});
