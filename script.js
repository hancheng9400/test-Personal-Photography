const isIndex = document.body.classList.contains('page-index');
const isDetail = document.body.classList.contains('page-detail');

/* ============================================
   Shared Photo Data
   ============================================ */

const photos = [
  {
    src: 'photos/01.jpg',
    num: '01',
    date: '2023 · 06',
    locName: '大理',
    locEn: 'Dali',
    locCode: 'YN',
    chapter: 'CHAPTER 01',
    chapterSub: 'YUNNAN · CHINA',
    title: '风筝',
    tags: 'kite / sky / clouds',
    timestamps: [
      { time: '08:15', label: '草海' },
      { time: '10:30', label: '古城墙' },
      { time: '16:45', label: '洱海畔' },
    ],
    description: '风筝在飞。云很重',
    stamp: '2026 JAYA',
    roll: 'ROLL 01',
    stock: 'KODAK PORTRA 400',
    themeColor: '#cc9a6a',
    complementBg: 'linear-gradient(135deg, #0d1b2a 0%, #1b2f44 50%, #162a3a 100%)',
    icon: 'fa-feather',
    animClass: 'fa-beat',
    hoverCaption: '云南的风，吹过草海与古城墙',
  },
  {
    src: 'photos/02.jpg',
    num: '02',
    date: '2023 · 07',
    locName: '慕士塔格',
    locEn: 'Muztagh Ata',
    locCode: 'XJ',
    chapter: 'CHAPTER 02',
    chapterSub: 'XINJIANG · CHINA',
    title: '比肩',
    tags: 'snow mountain / yurt / pamir',
    timestamps: [
      { time: '06:20', label: '大本营' },
      { time: '09:50', label: '冰川舌' },
      { time: '14:30', label: '喀拉库勒湖' },
    ],
    description: '雪山、毡房与人类，比肩生存在帕米尔千年',
    stamp: '2026 JAYA',
    roll: 'ROLL 01',
    stock: 'KODAK PORTRA 400',
    themeColor: '#6a8ba8',
    complementBg: 'linear-gradient(135deg, #1a0e08 0%, #2a1a0e 50%, #221408 100%)',
    icon: 'fa-mountain',
    animClass: 'fa-bounce',
    hoverCaption: '帕米尔高原上，雪山与毡房共生',
  },
  {
    src: 'photos/03.jpg',
    num: '03',
    date: '2023 · 07',
    locName: '夏塔',
    locEn: 'Xiata',
    locCode: 'XJ',
    chapter: 'CHAPTER 03',
    chapterSub: 'XINJIANG · CHINA',
    title: '暮光',
    tags: 'sunset / snow peak / herd',
    timestamps: [
      { time: '05:40', label: '河谷入口' },
      { time: '07:55', label: '牧场晨炊' },
      { time: '18:12', label: '古道尽头' },
    ],
    description: '夕阳为雪山镀上金边，牧群在光影里安享此刻的宁静',
    stamp: '2026 JAYA',
    roll: 'ROLL 01',
    stock: 'KODAK PORTRA 400',
    themeColor: '#c4a05a',
    complementBg: 'linear-gradient(135deg, #0a1628 0%, #162a44 50%, #0e1e34 100%)',
    icon: 'fa-tree',
    animClass: 'fa-fade',
    hoverCaption: '夕阳把雪山镀成金色，牧群归栏',
  },
  {
    src: 'photos/04.jpg',
    num: '04',
    date: '2024 · 09',
    locName: '鱼嘴',
    locEn: 'Yuzui',
    locCode: 'NJ',
    chapter: 'CHAPTER 04',
    chapterSub: 'NANJING · CHINA',
    title: '江桥',
    tags: 'bridge / river / dusk',
    timestamps: [
      { time: '17:30', label: '江边栈道' },
      { time: '18:45', label: '灯塔' },
      { time: '19:20', label: '桥下' },
    ],
    description: '桥灯亮了，江水流着，天色沉下去',
    stamp: '2026 JAYA',
    roll: 'ROLL 01',
    stock: 'KODAK PORTRA 400',
    themeColor: '#5a7a8a',
    complementBg: 'linear-gradient(135deg, #1a0e04 0%, #2a1a0a 50%, #1e1408 100%)',
    icon: 'fa-water',
    animClass: 'fa-flip',
    hoverCaption: '南京的傍晚，桥灯亮了，江水流着',
  },
  {
    src: 'photos/05.jpg',
    num: '05',
    date: '2024 · 11',
    locName: '泰山',
    locEn: 'Taishan',
    locCode: 'SD',
    chapter: 'CHAPTER 05',
    chapterSub: 'SHANDONG · CHINA',
    title: '山腰',
    tags: 'mountain / mist / stone',
    timestamps: [
      { time: '04:10', label: '红门' },
      { time: '06:30', label: '中天门' },
      { time: '11:20', label: '半山亭' },
    ],
    description: '山顶无雾亦无亭',
    stamp: '2026 JAYA',
    roll: 'ROLL 01',
    stock: 'KODAK PORTRA 400',
    themeColor: '#7a8a6a',
    complementBg: 'linear-gradient(135deg, #140a16 0%, #241a2a 50%, #1a1020 100%)',
    icon: 'fa-cloud',
    animClass: 'fa-beat-fade',
    hoverCaption: '泰山半程，迷雾中看不清山顶',
  },
  {
    src: 'photos/06.jpg',
    num: '06',
    date: '2025 · 05',
    locName: '六朝',
    locEn: 'Liuchao',
    locCode: 'NJ',
    chapter: 'CHAPTER 06',
    chapterSub: 'NANJING · CHINA',
    title: '文物',
    tags: 'museum / ink / history',
    timestamps: [
      { time: '09:00', label: '碑廊' },
      { time: '10:15', label: '青瓷厅' },
      { time: '14:05', label: '书画厅' },
    ],
    description: '墨迹凝固了时间。',
    stamp: '2026 JAYA',
    roll: 'ROLL 01',
    stock: 'KODAK PORTRA 400',
    themeColor: '#7a7068',
    complementBg: 'linear-gradient(135deg, #0a0e14 0%, #141c28 50%, #0e1620 100%)',
    icon: 'fa-landmark',
    animClass: 'fa-shake',
    hoverCaption: '博物馆里，墨迹把时间凝固在纸上',
  },
  {
    src: 'photos/07.jpg',
    num: '07',
    date: '2025 · 10',
    locName: '余村',
    locEn: 'Yucun',
    locCode: 'AH',
    chapter: 'CHAPTER 07',
    chapterSub: 'ANHUI · CHINA',
    title: '空中的鱼',
    tags: 'paper fish / reflection / dream',
    timestamps: [
      { time: '10:00', label: '村口溪边' },
      { time: '13:20', label: '竹亭' },
      { time: '16:00', label: '纸鱼装置' },
    ],
    description: '一条纸做的鱼，它的倒影，是另一个宇宙的镜像。',
    stamp: '2026 JAYA',
    roll: 'ROLL 01',
    stock: 'KODAK PORTRA 400',
    themeColor: '#b5985a',
    complementBg: 'linear-gradient(135deg, #0c0e1e 0%, #1a1e3a 50%, #12162a 100%)',
    icon: 'fa-dove',
    animClass: 'fa-bounce',
    hoverCaption: '纸做的鱼，它的影子通向另一个宇宙',
  },
  {
    src: 'photos/08.jpg',
    num: '08',
    date: '2024 · 04',
    locName: '景德镇',
    locEn: 'Jingdezhen',
    locCode: 'JX',
    chapter: 'CHAPTER 08',
    chapterSub: 'JIANGXI · CHINA',
    title: '茶园',
    tags: 'tea garden / green / maze',
    timestamps: [
      { time: '08:00', label: '茶园入口' },
      { time: '10:30', label: '茶垄深处' },
      { time: '15:45', label: '观景台' },
    ],
    description: '无尽的绿色迷宫，在它周围无限延伸。',
    stamp: '2026 JAYA',
    roll: 'ROLL 01',
    stock: 'KODAK PORTRA 400',
    themeColor: '#6a8a6a',
    complementBg: 'linear-gradient(135deg, #160e0e 0%, #2a1a1e 50%, #1e1216 100%)',
    icon: 'fa-leaf',
    animClass: 'fa-fade',
    hoverCaption: '绿色的迷宫在群山之间无限延伸',
  },
];

/* ============================================
   INDEX PAGE
   ============================================ */

if (isIndex) {
  const toc = document.getElementById('indexToc');
  const grid = document.getElementById('indexGrid');
  const indexRight = document.getElementById('indexRight');
  const leftBg = document.getElementById('indexLeftBg');
  const decorIcon = document.getElementById('indexDecorIcon');
  const hoverCaption = document.getElementById('indexHoverCaption');
  const defaultCaption = document.getElementById('indexDefaultCaption');
  const filmMeta = document.getElementById('indexFilmMeta');
  let scrollSyncCtl = null;

  // hex → rgb
  function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
  }

  // Build TOC
  const totalPhotos = photos.length;
  toc.setAttribute('role', 'navigation');
  toc.setAttribute('aria-label', '章节目录');
  photos.forEach((p, i) => {
    const item = document.createElement('div');
    item.className = 'toc-item';
    item.dataset.index = i;
    item.innerHTML = `
      <span class="toc-num">${p.num}</span>
      <span class="toc-name">${p.locName}</span>
      <span class="toc-code">${p.locCode}</span>
      <span class="toc-counter">${p.num}/${String(totalPhotos).padStart(2, '0')}</span>
    `;
    item.setAttribute('role', 'button');
    item.setAttribute('tabindex', '0');
    item.setAttribute('aria-label', `第 ${p.num} 章：${p.locName}`);
    item.addEventListener('click', () => navigateToDetail(i));
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        navigateToDetail(i);
      }
    });
    toc.appendChild(item);
  });

  function applyIndexPanel(i) {
    const p = photos[i];
    const rgb = hexToRgb(p.themeColor);
    leftBg.style.opacity = '1';
    leftBg.style.background = `
      linear-gradient(to bottom,
        rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.06) 0%,
        rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.20) 40%,
        rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.45) 100%
      )
    `;
    document.querySelectorAll('.toc-item').forEach((el, idx) => {
      el.classList.toggle('active', idx === i);
    });
    decorIcon.innerHTML = `<i class="fa-solid ${p.icon} ${p.animClass || ''}"></i>`;
    decorIcon.style.color = p.themeColor;
    decorIcon.style.opacity = '1';
    defaultCaption.style.opacity = '0';
    hoverCaption.textContent = p.hoverCaption;
    hoverCaption.style.color = p.themeColor;
    hoverCaption.style.opacity = '1';
    if (filmMeta) {
      filmMeta.textContent = `${p.stock} · ${p.num} EXP · ${p.date}`;
      filmMeta.style.color = p.themeColor;
    }
  }

  function resetIndexPanel() {
    leftBg.style.opacity = '0';
    document.querySelectorAll('.toc-item').forEach((el) => el.classList.remove('active'));
    decorIcon.style.opacity = '0';
    defaultCaption.style.opacity = '1';
    hoverCaption.style.opacity = '0';
    if (filmMeta) {
      filmMeta.textContent = 'KODAK PORTRA 400 · 36 EXP';
      filmMeta.style.color = '';
    }
  }

  function setCardHover(i, on) {
    document.querySelectorAll('.row-card').forEach((row, idx) => {
      row.classList.toggle('hovered', on && idx === i);
    });
    grid.classList.toggle('hover-active', on);
    if (on) applyIndexPanel(i);
    else resetIndexPanel();
  }

  photos.forEach((p, i) => {
    const row = document.createElement('div');
    row.className = 'row-card';
    row.dataset.index = i;
    const rgb = hexToRgb(p.themeColor);

    row.innerHTML = `
      <div class="row-card-stage">
        <div class="row-card-inner">
          <img src="${p.src}" alt="${p.title}" loading="lazy" decoding="async">
          <div class="img-dim"></div>
          <div class="row-card-location">
            <span class="row-card-loc-num">${p.num}</span>
            <span class="row-card-loc-name">${p.locEn || p.locName}</span>
          </div>
          <div class="row-card-overlay" style="background: linear-gradient(to right, rgba(${rgb.r},${rgb.g},${rgb.b},0.4) 0%, transparent 40%)">
            <span class="row-card-code">${p.locCode}</span>
            <span class="row-card-arrow">→</span>
          </div>
        </div>
        <div class="row-card-shine" aria-hidden="true"></div>
      </div>
    `;

    row.addEventListener('click', () => navigateToDetail(i));
    grid.appendChild(row);
  });

  initIndexScrollCards(grid, (index, entering) => {
    if (entering) {
      scrollSyncCtl?.pause();
      setCardHover(index, true);
    } else {
      scrollSyncCtl?.resume();
      setCardHover(index, false);
    }
  });

  scrollSyncCtl = initIndexScrollSync(indexRight, toc, (idx) => {
    if (grid.classList.contains('hover-active')) return;
    applyIndexPanel(idx);
    leftBg.style.opacity = '0.35';
  });

  initMagneticButtons('.index-enter');

  // ========== 文字入场动画 (使用 anim.js 引擎) ==========

  const indexScope = document.getElementById('indexLeftInner');
  indexScope.querySelectorAll('[letters-slide-up]').forEach(splitText);
  indexScope.querySelectorAll('[words-slide-up]').forEach(splitText);

  const idxEls = indexScope.querySelectorAll('[letters-slide-up], [words-slide-up]');
  staggeredEntrance(idxEls, 300);

  fitIndexTitle();

  function fitIndexTitle() {
    const block = document.querySelector('.index-title-block');
    const title = document.querySelector('.index-title');
    if (!block || !title) return;

    const apply = () => {
      block.style.removeProperty('--index-title-size');
      const available = block.clientWidth;
      if (!available) return;

      let sizePx = parseFloat(getComputedStyle(title).fontSize);
      const minPx = 28;
      title.style.fontSize = `${sizePx}px`;

      let guard = 0;
      while (title.scrollWidth > available && sizePx > minPx && guard < 40) {
        sizePx -= 1;
        title.style.fontSize = `${sizePx}px`;
        guard += 1;
      }
      block.style.setProperty('--index-title-size', `${sizePx}px`);
    };

    const schedule = () => requestAnimationFrame(() => requestAnimationFrame(apply));
    schedule();
    if (document.fonts?.ready) document.fonts.ready.then(schedule);
    window.addEventListener('resize', schedule);
    setTimeout(schedule, 900);
  }

  // 跳转
  const enterBtn = document.getElementById('indexEnter');
  enterBtn.addEventListener('click', (e) => {
    e.preventDefault();
    navigateToDetail(0);
  });

  function navigateToDetail(index) {
    const overlay = document.getElementById('pageTransition');
    const delay = typeof MOTION !== 'undefined' ? MOTION.pageMs : 720;
    if (overlay) {
      overlay.classList.add('active');
      setTimeout(() => {
        window.location.href = `detail.html?slide=${index}`;
      }, delay);
    } else {
      document.body.classList.add('page-fade-out');
      setTimeout(() => {
        window.location.href = `detail.html?slide=${index}`;
      }, 400);
    }
  }
}

/* ============================================
   DETAIL PAGE
   ============================================ */

if (isDetail) {
  const urlParams = new URLSearchParams(window.location.search);
  const rawSlide = parseInt(urlParams.get('slide'), 10);
  const initialSlide = Number.isNaN(rawSlide)
    ? 0
    : Math.max(0, Math.min(photos.length - 1, rawSlide));

  const wrapper = document.getElementById('swiperWrapper');

  photos.forEach((photo, idx) => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    slide.dataset.idx = idx;
    slide.dataset.chapter = photo.chapter;
    slide.dataset.chapterSub = photo.chapterSub;
    slide.dataset.title = photo.title;
    slide.dataset.tags = photo.tags;
    slide.dataset.description = photo.description;
    slide.dataset.roll = photo.roll;
    slide.dataset.stock = photo.stock;
    slide.dataset.date = photo.date;
    slide.dataset.exp = `${String(photo.num).padStart(2, '0')} EXP`;

    const media = document.createElement('div');
    media.className = 'slide-media';

    const img = document.createElement('img');
    img.className = 'is-loading';
    img.src = photo.src;
    img.alt = photo.title;
    img.decoding = 'async';
    img.loading = idx === initialSlide ? 'eager' : 'lazy';
    if (img.complete) img.classList.replace('is-loading', 'is-ready');
    else {
      img.addEventListener('load', () => img.classList.replace('is-loading', 'is-ready'), { once: true });
      img.addEventListener('error', () => img.classList.remove('is-loading'), { once: true });
    }

    media.appendChild(img);
    slide.appendChild(media);
    wrapper.appendChild(slide);
  });

  const domChapter = document.getElementById('detailChapter');
  const domChapterSub = document.getElementById('detailChapterSub');
  const domDateRange = document.getElementById('detailDateRange');
  const domTitle = document.getElementById('detailTitle');
  const domTags = document.getElementById('detailTags');
  const domTimestamps = document.getElementById('detailTimestamps');
  const domDesc = document.getElementById('detailDesc');
  const domPage = document.getElementById('detailPage');
  const domFilmRoll = document.getElementById('filmRoll');
  const domFilmStock = document.getElementById('filmStock');
  const domFilmExp = document.getElementById('filmExp');
  const dotContainer = document.getElementById('verticalDots');

  const filmEls = [domFilmRoll, domFilmStock, domFilmExp];
  const leftBg = document.getElementById('detailLeftBg');
  const photoTint = document.getElementById('detailPhotoTint');
  const domDecoIcon = document.getElementById('detailDecoIcon');

  const detailTextEls = [domChapter, domChapterSub, domDateRange, domTitle, domTags, domDesc].filter(Boolean);

  function applyDetailTextAttrs() {
    [domChapter, domChapterSub, domDateRange, domTags, domDesc].forEach((el) => {
      if (!el) return;
      el.setAttribute('text-split', '');
      el.setAttribute('words-slide-up', '');
    });
    domTitle.setAttribute('text-split', '');
    domTitle.setAttribute('letters-slide-up', '');
  }

  function renderTimestamps(photo) {
    domTimestamps.innerHTML = '';
    photo.timestamps.forEach((ts, i) => {
      const row = document.createElement('div');
      row.className = 'ts-row';
      row.innerHTML = `
        <span class="ts-num">${String(i + 1).padStart(2, '0')}</span>
        <span class="ts-time">${ts.time}</span>
        <span class="ts-label">${ts.label}</span>
      `;
      domTimestamps.appendChild(row);
    });
  }

  function setDetailPanelContent(photo) {
    domChapter.textContent = photo.chapter;
    domChapterSub.textContent = photo.chapterSub;
    if (domDateRange) domDateRange.textContent = photo.date;
    domTitle.textContent = photo.title;
    domTitle.style.color = photo.themeColor;
    domTags.textContent = photo.tags;
    domDesc.textContent = photo.description;
    domDesc.style.color = photo.themeColor;
    renderTimestamps(photo);
    setLeftPanelTheme(photo);
  }

  // ---- Set initial content BEFORE swiper creates its loop dupes ----
  const initPhoto = photos[initialSlide];
  applyDetailTextAttrs();
  setDetailPanelContent(initPhoto);

  if (leftBg && initPhoto.complementBg) {
    leftBg.style.background = initPhoto.complementBg;
    leftBg.classList.add('visible');
  }

  domFilmRoll.textContent = initPhoto.roll;
  domFilmStock.textContent = initPhoto.stock;
  domFilmExp.textContent = `${String(initPhoto.num).padStart(2, '0')} EXP`;

  requestAnimationFrame(() => {
    document.body.classList.add('entered');
    reanimateText(true);
  });
  // ================================================================

  function buildDots() {
    dotContainer.innerHTML = '';
    photos.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'vdot';
      dot.setAttribute('aria-label', `第 ${i + 1} 张`);
      dot.addEventListener('click', () => {
        swiper.slideToLoop(i);
      });
      dotContainer.appendChild(dot);
    });
  }

  function updateDots(realIndex) {
    const dots = dotContainer.querySelectorAll('.vdot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === realIndex);
    });
  }

  function updateFilmMeta(activeSlide) {
    filmEls.forEach(el => el.classList.add('text-fading'));
    setTimeout(() => {
      const data = activeSlide.dataset;
      domFilmRoll.textContent = data.roll;
      domFilmStock.textContent = data.stock;
      domFilmExp.textContent = data.exp;
      filmEls.forEach(el => el.classList.remove('text-fading'));
    }, 360);
  }

  function setLeftPanelTheme(photo) {
    if (leftBg && photo.complementBg) {
      leftBg.style.background = photo.complementBg;
      leftBg.classList.add('visible');
    }
    if (photoTint && photo.themeColor) {
      photoTint.style.background = `radial-gradient(ellipse at 70% 50%, ${photo.themeColor}55 0%, transparent 68%)`;
      photoTint.classList.add('visible');
    }
    domDesc.style.color = photo.themeColor;
    domTitle.style.color = photo.themeColor;
    if (domDecoIcon) {
      domDecoIcon.innerHTML = `<i class="fa-solid ${photo.icon} ${photo.animClass || ''}"></i>`;
      domDecoIcon.style.color = photo.themeColor;
      domDecoIcon.style.opacity = '0.7';
    }
  }

  function updateLeftPanel(activeSlide) {
    const idx = parseInt(activeSlide.dataset.idx, 10);
    if (Number.isNaN(idx) || idx < 0 || idx >= photos.length) return;
    const photo = photos[idx];

    animDetailTextOut(detailTextEls, () => {
      detailTextEls.forEach((el) => unwrapSplitText(el));
      applyDetailTextAttrs();
      setDetailPanelContent(photo);
      reanimateText(true);
    });
  }

  function updatePageIndicator(swiperInstance) {
    domPage.classList.add('page-flipping');
    setTimeout(() => {
      const current = String(swiperInstance.realIndex + 1).padStart(2, '0');
      const total = String(photos.length).padStart(2, '0');
      domPage.textContent = `${current} / ${total}`;
      domPage.classList.remove('page-flipping');
    }, 280);
  }

  let lastPanelIndex = initialSlide;
  let slideDirection = 1;
  const slideMs = typeof MOTION !== 'undefined' ? MOTION.slideMs : 1200;

  function setSlideDirection(dir) {
    slideDirection = dir;
    document.body.classList.remove('slide-dir-next', 'slide-dir-prev');
    document.body.classList.add(dir > 0 ? 'slide-dir-next' : 'slide-dir-prev');
    if (typeof playFilmCut === 'function') playFilmCut(dir);
  }

  const swiper = new Swiper('#mainSwiper', {
    effect: 'fade',
    fadeEffect: { crossFade: true },
    speed: slideMs,
    loop: true,
    initialSlide: initialSlide,
    resistanceRatio: 0.82,
    touchReleaseOnEdges: true,
    shortSwipes: true,
    longSwipesRatio: 0.28,
    watchSlidesProgress: true,
    mousewheel: {
      forceToAxis: true,
      sensitivity: 2,
      releaseOnEdges: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    on: {
      init: function () {
        buildDots();
        updateDots(this.realIndex);
        updatePageIndicator(this);
      },
      slideNextTransitionStart: function () {
        setSlideDirection(1);
        this.el.classList.add('is-transitioning');
      },
      slidePrevTransitionStart: function () {
        setSlideDirection(-1);
        this.el.classList.add('is-transitioning');
      },
      transitionEnd: function () {
        this.el.classList.remove('is-transitioning');
      },
      slideChange: function () {
        if (this.realIndex === lastPanelIndex) return;
        lastPanelIndex = this.realIndex;
        const activeSlide = this.slides[this.activeIndex];
        updateLeftPanel(activeSlide);
        updateFilmMeta(activeSlide);
        updatePageIndicator(this);
        updateDots(this.realIndex);
        preloadAdjacent(this.realIndex);
      },
    },
  });

  function preloadAdjacent(realIndex) {
    [realIndex - 1, realIndex + 1].forEach((i) => {
      const idx = (i + photos.length) % photos.length;
      const img = new Image();
      img.src = photos[idx].src;
    });
  }

  preloadAdjacent(initialSlide);

  document.getElementById('detailPrev').addEventListener('click', () => {
    setSlideDirection(-1);
    swiper.slidePrev();
  });

  document.getElementById('detailNext').addEventListener('click', () => {
    setSlideDirection(1);
    swiper.slideNext();
  });

  // ========== Lightbox ==========

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCounter = document.getElementById('lightboxCounter');
  let lightboxIndex = initialSlide;

  function lightboxOpen() {
    return lightbox.classList.contains('open');
  }

  function openLightbox(index) {
    lightboxIndex = index;
    const photo = photos[index];
    lightboxImg.src = photo.src;
    lightboxImg.alt = photo.title;
    lightboxCounter.textContent = `${String(index + 1).padStart(2, '0')} / ${String(photos.length).padStart(2, '0')}`;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  function lightboxPrev() {
    lightboxIndex = (lightboxIndex - 1 + photos.length) % photos.length;
    const photo = photos[lightboxIndex];
    lightboxImg.style.opacity = '0';
    setTimeout(() => {
      lightboxImg.src = photo.src;
      lightboxImg.alt = photo.title;
      lightboxImg.style.opacity = '1';
      lightboxCounter.textContent = `${String(lightboxIndex + 1).padStart(2, '0')} / ${String(photos.length).padStart(2, '0')}`;
    }, 120);
    swiper.slideToLoop(lightboxIndex);
  }

  function lightboxNext() {
    lightboxIndex = (lightboxIndex + 1) % photos.length;
    const photo = photos[lightboxIndex];
    lightboxImg.style.opacity = '0';
    setTimeout(() => {
      lightboxImg.src = photo.src;
      lightboxImg.alt = photo.title;
      lightboxImg.style.opacity = '1';
      lightboxCounter.textContent = `${String(lightboxIndex + 1).padStart(2, '0')} / ${String(photos.length).padStart(2, '0')}`;
    }, 120);
    swiper.slideToLoop(lightboxIndex);
  }

  document.getElementById('mainSwiper').addEventListener('click', (e) => {
    if (e.target.closest('.detail-nav-btn')) return;
    openLightbox(swiper.realIndex);
  });

  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  document.getElementById('lightbox').querySelector('.lightbox-bg').addEventListener('click', closeLightbox);
  document.getElementById('lightboxPrev').addEventListener('click', lightboxPrev);
  document.getElementById('lightboxNext').addEventListener('click', lightboxNext);

  document.addEventListener('keydown', (e) => {
    if (lightboxOpen()) {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        lightboxPrev();
      } else if (e.key === 'ArrowRight') {
        lightboxNext();
      }
    } else if (e.key === 'ArrowLeft') {
      setSlideDirection(-1);
      swiper.slidePrev();
    } else if (e.key === 'ArrowRight') {
      setSlideDirection(1);
      swiper.slideNext();
    }
  });

  const backLink = document.getElementById('backLink');
  if (backLink) {
    backLink.addEventListener('click', (e) => {
      e.preventDefault();
      const overlay = document.getElementById('pageTransition');
      const href = backLink.getAttribute('href');
      const delay = typeof MOTION !== 'undefined' ? MOTION.pageMs : 720;
      if (overlay) {
        overlay.classList.add('active');
        setTimeout(() => {
          window.location.href = href;
        }, delay);
      } else {
        window.location.href = href;
      }
    });
  }

  const immersiveBtn = document.getElementById('immersiveToggle');
  if (immersiveBtn) {
    immersiveBtn.addEventListener('click', () => {
      const on = document.body.classList.toggle('immersive');
      immersiveBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
      immersiveBtn.textContent = on ? 'EXIT' : 'FULL';
    });
  }

  initMagneticButtons('.detail-nav-btn, .immersive-toggle, .back-link');
}
