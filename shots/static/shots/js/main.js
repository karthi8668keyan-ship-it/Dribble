/* ════════════════════════════════════
   Dribbble Clone – main.js
   ════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function () {

  /* ── Filter Buttons ── */
  const filterBtns = document.querySelectorAll('.drib-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  /* ── Like Button Toggle ── */
  document.querySelectorAll('.drib-action-btn').forEach(btn => {
    if (btn.querySelector('.bi-heart')) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        const icon = this.querySelector('i');
        if (icon.classList.contains('bi-heart')) {
          icon.classList.replace('bi-heart', 'bi-heart-fill');
          icon.style.color = '#EA4C89';
          this.style.background = 'rgba(234,76,137,.25)';
        } else {
          icon.classList.replace('bi-heart-fill', 'bi-heart');
          icon.style.color = '';
          this.style.background = '';
        }
      });
    }
  });

  /* ── Smooth Tag Click ── */
  document.querySelectorAll('.drib-tag').forEach(tag => {
    tag.addEventListener('click', function () {
      document.querySelectorAll('.drib-tag').forEach(t => t.style.background = '');
      this.style.background = '#fdf2f8';
      this.style.color = '#EA4C89';
    });
  });

  /* ── Fade-in on Scroll ── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.drib-card, .drib-profile-card, .drib-cat-card').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity .5s ease ${i * 0.05}s, transform .5s ease ${i * 0.05}s`;
    observer.observe(el);
  });

});
