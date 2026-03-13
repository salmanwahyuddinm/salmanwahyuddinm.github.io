/* ========================================
   SCRIPT.JS — Portfolio Interactions
======================================== */

// ─── SMOOTH SCROLL ───────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 68;
      const top = target.getBoundingClientRect().top + window.scrollY - headerH - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ─── ACTIVE NAV DOT ──────────────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navDots  = document.querySelectorAll('.nav-dot');

function updateActiveNav() {
  const headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 68;
  let current = '';

  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top <= headerH + 80) current = sec.id;
  });

  navDots.forEach(dot => {
    dot.classList.toggle('active', dot.getAttribute('href') === '#' + current);
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();

// ─── REVEAL ON SCROLL ────────────────────────────────────────────
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // stagger delay based on position among siblings
      const siblings = [...entry.target.parentElement.children].filter(c => c.classList.contains('reveal'));
      const idx = siblings.indexOf(entry.target);
      entry.target.style.transitionDelay = (idx * 0.08) + 's';
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));

// ─── SKILLS CHART ────────────────────────────────────────────────
const hardSkillData = [
  { name: 'Excel',    pct: 50 },
  { name: 'SQL',      pct: 50 },
  { name: 'Python',   pct: 60 },
  { name: 'Power BI', pct: 40 },
];

const softSkillData = [
  { name: 'Problem-Solving',      pct: 50 },
  { name: 'Communication',        pct: 50 },
  { name: 'Attention to Detail',  pct: 80 },
  { name: 'Adaptability',         pct: 75 },
];

const chartPlaceholder = document.querySelector('.chart-placeholder');
const chartBars        = document.getElementById('skillChart');
const barsContainer    = document.getElementById('barsContainer');
const chartTitle       = document.getElementById('chartTitle');
const chartCol         = document.getElementById('skillsChartCol');

let activeType = null;

function renderChart(type, skills) {
  if (activeType === type) return;
  activeType = type;

  const isHard = type === 'hard';
  chartTitle.textContent = isHard ? 'Hard Skills Mastery' : 'Soft Skills Mastery';
  chartTitle.className   = 'chart-title ' + (isHard ? 'hard-title' : 'soft-title');

  barsContainer.innerHTML = '';

  skills.forEach(skill => {
    const row = document.createElement('div');
    row.className = 'bar-row';

    const label = document.createElement('div');
    label.className = 'bar-label';
    label.textContent = skill.name;

    const track = document.createElement('div');
    track.className = 'bar-track';

    const fill = document.createElement('div');
    fill.className = 'bar-fill ' + (isHard ? 'hard-bar' : 'soft-bar');
    fill.style.width = '0%';

    const pct = document.createElement('div');
    pct.className = 'bar-pct ' + (isHard ? 'hard-pct' : 'soft-pct');
    pct.textContent = skill.pct + '%';

    track.appendChild(fill);
    row.appendChild(label);
    row.appendChild(track);
    row.appendChild(pct);
    barsContainer.appendChild(row);

    // Animate bar after paint
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        fill.style.width = skill.pct + '%';
      });
    });
  });

  chartPlaceholder.style.display = 'none';
  chartBars.classList.remove('hidden');
  chartCol.style.alignItems = 'flex-start';
}

function clearChart() {
  activeType = null;
  chartPlaceholder.style.display = '';
  chartBars.classList.add('hidden');
  chartCol.style.alignItems = 'center';
}

document.querySelectorAll('.hard-skill').forEach(item => {
  item.addEventListener('mouseenter', () => renderChart('hard', hardSkillData));
  item.addEventListener('mouseleave', clearChart);
});

document.querySelectorAll('.soft-skill').forEach(item => {
  item.addEventListener('mouseenter', () => renderChart('soft', softSkillData));
  item.addEventListener('mouseleave', clearChart);
});

// ─── PROJECT MODAL ───────────────────────────────────────────────
const projectData = [
  {
    tag:       'Data Analytics',
    title:     'Mexico Toys Sales Analysis (Data Analytics Project)',
    summary:   'Analyzed retail sales data to identify top-performing products, category profitability, and seasonal revenue trends, revealing that the Toys category contributes ~35% of total revenue.',
    imgStyle:  'background: linear-gradient(135deg,#f97316,#fb923c); font-size:5rem; content:"📊"',
    emoji:     '📊',
    imgColor:  'linear-gradient(135deg,#f97316,#fb923c)',
    pdf:       'https://drive.google.com/file/d/11B6ojj_uQiuKstP01DtjDlZB7slB3NDh/view?usp=sharing',   // Replace with your PDF link
    code:      'https://colab.research.google.com/drive/1nm8E49PRqTH2EckDpCBYRHol-HlP_2BK?usp=sharing',   // Replace with your GitHub link
    dashboard: 'https://public.tableau.com/views/DEEPPMexico/Dashboard2?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',   // Replace with your Power BI / Tableau link
  },
  {
    tag:       'SQL Analysis',
    title:     'Customer Segmentation Analysis',
    summary:   'Segmented customers from an e-commerce database using RFM analysis in SQL. Identified high-value customer groups and churned users, providing actionable marketing recommendations that increased campaign efficiency.',
    emoji:     '🧮',
    imgColor:  'linear-gradient(135deg,#8b5cf6,#a78bfa)',
    pdf:       '#',
    code:      '#',
    dashboard: '#',
  },
  {
    tag:       'Data Visualization',
    title:     'Healthcare Trend Analysis',
    summary:   'Analyzed a healthcare dataset to uncover patient visit trends, peak hours, and service utilization patterns using Python (Pandas, Matplotlib) and Tableau for executive-level reporting.',
    emoji:     '📈',
    imgColor:  'linear-gradient(135deg,#0ea5e9,#38bdf8)',
    pdf:       '#',
    code:      '#',
    dashboard: '#',
  },
];

const modalOverlay     = document.getElementById('modalOverlay');
const modalTag         = document.getElementById('modalTag');
const modalTitle       = document.getElementById('modalTitle');
const modalSummary     = document.getElementById('modalSummary');
const modalImgPh       = document.getElementById('modalImgPlaceholder');
const modalPdf         = document.getElementById('modalPdf');
const modalCode        = document.getElementById('modalCode');
const modalDashboard   = document.getElementById('modalDashboard');

function openModal(idx) {
  const p = projectData[idx];
  if (!p) return;

  modalTag.textContent     = p.tag;
  modalTitle.textContent   = p.title;
  modalSummary.textContent = p.summary;

  modalImgPh.style.background = p.imgColor;
  modalImgPh.textContent      = p.emoji;
  modalImgPh.style.fontSize   = '5rem';
  modalImgPh.style.display    = 'flex';
  modalImgPh.style.alignItems = 'center';
  modalImgPh.style.justifyContent = 'center';

  modalPdf.href       = p.pdf;
  modalCode.href      = p.code;
  modalDashboard.href = p.dashboard;

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

// Close on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ─── CONTACT FORM ────────────────────────────────────────────────
document.getElementById("contactForm").addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const form = document.getElementById("contactForm");
  const success = document.getElementById("formSuccess");
  const btn = form.querySelector(".btn-send");

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Create mailto link
  const mailtoLink =
    `mailto:salmanwahyuddin@gmail.com` +
    `?subject=Portfolio Contact` +
    `&body=Name: ${encodeURIComponent(name)}` +
    `%0AEmail: ${encodeURIComponent(email)}` +
    `%0AMessage: ${encodeURIComponent(message)}`;

  // Button loading state
  btn.textContent = "Sending...";
  btn.disabled = true;

  // Open email client
  window.location.href = mailtoLink;

  // Simulate success
  setTimeout(() => {
    form.reset();
    success.classList.remove("hidden");

    btn.textContent = "Send Message";
    btn.disabled = false;

    setTimeout(() => {
      success.classList.add("hidden");
    }, 4000);

  }, 1000);
}

// ─── PAGE LOAD FADE ──────────────────────────────────────────────
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s';
window.addEventListener('DOMContentLoaded', () => {
  requestAnimationFrame(() => {
    document.body.style.opacity = '1';
  });
});
