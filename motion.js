/* 胶片实验风动效 — GPU transform / rAF，避免 layout 抖动 */

const MOTION = {
  easeSpring: 'cubic-bezier(0.32, 0.72, 0, 1)',
  easeBreath: 'cubic-bezier(0.45, 0.05, 0.15, 1)',
  easeOut: 'cubic-bezier(0.22, 1, 0.36, 1)',
  pageMs: 720,
  slideMs: 1200,
  filmCutMs: 1280,
};

/** 胶片快门式转场遮罩（切换开始时触发） */
function playFilmCut(direction) {
  const el = document.getElementById('filmCut');
  if (!el) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const dirClass = direction > 0 ? 'dir-next' : 'dir-prev';
  el.classList.remove('is-active', 'dir-next', 'dir-prev');
  void el.offsetWidth;
  el.classList.add('is-active', dirClass);

  clearTimeout(el._cutTimer);
  el._cutTimer = setTimeout(() => {
    el.classList.remove('is-active', 'dir-next', 'dir-prev');
  }, MOTION.filmCutMs);
}

/** 首页滚动卡片：3D 立体 hover + 微倾斜（仅 transform） */
function initIndexScrollCards(grid, onHoverIndex) {
  if (!grid) return;

  const cards = grid.querySelectorAll('.row-card');
  let tiltCard = null;
  let rafId = null;
  let pendingX = 0;
  let pendingY = 0;

  function applyTilt() {
    rafId = null;
    if (!tiltCard) return;
    tiltCard.style.setProperty('--tilt-x', `${pendingY}deg`);
    tiltCard.style.setProperty('--tilt-y', `${pendingX}deg`);
  }

  cards.forEach((card) => {
    const index = parseInt(card.dataset.index, 10);

    card.addEventListener('mouseenter', () => {
      tiltCard = card;
      if (typeof onHoverIndex === 'function') onHoverIndex(index, true);
    });

    card.addEventListener('mousemove', (e) => {
      if (tiltCard !== card) return;
      const rect = card.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      pendingX = nx * 10;
      pendingY = ny * -7;
      if (!rafId) rafId = requestAnimationFrame(applyTilt);
    });

    card.addEventListener('mouseleave', () => {
      if (tiltCard === card) tiltCard = null;
      card.style.removeProperty('--tilt-x');
      card.style.removeProperty('--tilt-y');
      if (typeof onHoverIndex === 'function') onHoverIndex(index, false);
    });
  });
}

/** 右侧滚动时同步 TOC（不与 hover 冲突） */
function initIndexScrollSync(scrollRoot, toc, onIndex) {
  if (!scrollRoot || !toc) return;

  const cards = scrollRoot.querySelectorAll('.row-card');
  if (!cards.length) return;

  let syncing = false;

  const observer = new IntersectionObserver(
    (entries) => {
      if (syncing) return;
      let best = null;
      let bestRatio = 0;
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= bestRatio) {
          bestRatio = entry.intersectionRatio;
          best = entry.target;
        }
      });
      if (!best) return;
      const idx = parseInt(best.dataset.index, 10);
      if (Number.isNaN(idx)) return;
      onIndex(idx, 'scroll');
    },
    { root: scrollRoot, threshold: [0.45, 0.6, 0.75] }
  );

  cards.forEach((c) => observer.observe(c));

  return {
    pause() { syncing = true; },
    resume() { syncing = false; },
  };
}

/** 磁吸按钮（轻量） */
function initMagneticButtons(selector) {
  if (!window.matchMedia('(hover: hover)').matches) return;

  document.querySelectorAll(selector).forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.18}px, ${y * 0.22}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

/** 胶片光标：VIEW / EXPAND / DRAG */
function initFilmCursor(config) {
  const el = document.getElementById(config.id || 'filmCursor');
  if (!el || !window.matchMedia('(hover: hover)').matches) return null;

  const label = el.querySelector('.film-cursor-label');
  let rafId = null;
  let tx = 0;
  let ty = 0;

  function tick() {
    el.style.transform = `translate3d(${tx - 22}px, ${ty - 22}px, 0)`;
    rafId = null;
  }

  function move(x, y) {
    tx = x;
    ty = y;
    if (!rafId) rafId = requestAnimationFrame(tick);
  }

  function setMode(mode) {
    el.dataset.mode = mode || '';
    if (label && config.labels && config.labels[mode]) {
      label.textContent = config.labels[mode];
    }
  }

  document.addEventListener('mousemove', (e) => move(e.clientX, e.clientY));

  (config.zones || []).forEach((zone) => {
    const root = typeof zone.root === 'string' ? document.querySelector(zone.root) : zone.root;
    if (!root) return;
    root.addEventListener('mouseenter', () => {
      el.classList.add('visible');
      setMode(zone.mode);
    });
    root.addEventListener('mouseleave', () => {
      el.classList.remove('visible');
      setMode('');
    });
  });

  return { setMode };
}
