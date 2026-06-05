/* ============================================
   零依赖文字动画引擎
   替代 SplitType + GSAP，纯 CSS @keyframes + JS 拆分
   ============================================ */

/** 拆分文字为 <span class="word"><span class="char"> */
function splitText(el) {
  const text = el.textContent;
  el.innerHTML = '';
  const letterMode = el.hasAttribute('letters-slide-up');
  const tokens = text.split(/(\s+)/).filter(Boolean);

  tokens.forEach((token) => {
    if (/^\s+$/.test(token)) {
      el.appendChild(document.createTextNode(token));
      return;
    }

    // 逐字母：每个字符单独 word 容器，避免整词 word 层 opacity:0 挡住标题
    if (letterMode) {
      [...token].forEach((ch) => {
        const ws = document.createElement('span');
        ws.className = 'word';
        const cs = document.createElement('span');
        cs.className = 'char';
        cs.textContent = ch;
        ws.appendChild(cs);
        el.appendChild(ws);
      });
      return;
    }

    const ws = document.createElement('span');
    ws.className = 'word';
    ws.textContent = token;
    el.appendChild(ws);
  });
}

/** 给逐字母元素设置 --i stagger 变量，触发入场动画 */
function animLettersIn(el) {
  el.querySelectorAll('.word').forEach((w) => {
    w.style.opacity = '1';
  });
  const chars = el.querySelectorAll('.char');
  chars.forEach((c, i) => {
    c.style.setProperty('--i', i);
    c.style.animationPlayState = 'running';
  });
  el.classList.remove('anim-out');
}

/** 给逐词元素设置 --i stagger 变量，触发入场动画 */
function animWordsIn(el) {
  const words = el.querySelectorAll('.word');
  words.forEach((w, i) => {
    w.style.setProperty('--i', i);
    w.style.animationPlayState = 'running';
  });
  el.classList.remove('anim-out');
}

/**
 * index 页：按 DOM 顺序交错入场
 * @param {NodeList} els
 * @param {number} baseDelay 初始等待 ms
 * @returns {number} 最终结束时间
 */
function staggeredEntrance(els, baseDelay) {
  let delay = baseDelay || 300;
  els.forEach(el => {
    const isLetter = el.hasAttribute('letters-slide-up');
    const items = el.querySelectorAll(isLetter ? '.char' : '.word');
    if (!items.length) return;
    const stagger = isLetter ? 40 : 60;
    const total = items.length * stagger + (isLetter ? 700 : 550);
    setTimeout(() => {
      isLetter ? animLettersIn(el) : animWordsIn(el);
    }, delay);
    delay += Math.round(total * 0.6);
  });
  return delay;
}

/** 将已拆分的文字还原为纯文本（保留 textContent） */
function unwrapSplitText(el) {
  if (!el) return;
  el.textContent = el.textContent;
}

/**
 * detail 页：先播放 anim-out，再执行回调（用于切页换文案）
 */
function animDetailTextOut(els, done) {
  const targets = els.filter((el) => el && el.querySelector('.char, .word'));
  if (!targets.length) {
    done();
    return;
  }
  targets.forEach((el) => el.classList.add('anim-out'));
  setTimeout(done, 320);
}

/**
 * detail 页：拆分 + 交错入场
 * @param {boolean} force 切页时强制重播（忽略进行中锁）
 */
let detailAnimating = false;

function reanimateText(force) {
  if (detailAnimating && !force) return;
  detailAnimating = true;

  const scope = document.getElementById('detailLeftInner');
  if (!scope) {
    detailAnimating = false;
    return;
  }

  scope.querySelectorAll('[letters-slide-up], [words-slide-up]').forEach((el) => {
    el.classList.remove('anim-out');
    if (el.querySelector('.char, .word')) unwrapSplitText(el);
  });

  scope.querySelectorAll('[letters-slide-up]').forEach(splitText);
  scope.querySelectorAll('[words-slide-up]').forEach(splitText);

  let delay = 80;
  const allEls = scope.querySelectorAll('[letters-slide-up], [words-slide-up]');
  allEls.forEach(el => {
    const isLetter = el.hasAttribute('letters-slide-up');
    const items = el.querySelectorAll(isLetter ? '.char' : '.word');
    if (!items.length) return;
    const stagger = isLetter ? 40 : 60;
    const total = items.length * stagger + (isLetter ? 700 : 550);
    setTimeout(() => {
      isLetter ? animLettersIn(el) : animWordsIn(el);
    }, delay);
    delay += Math.round(total * 0.55);
  });

  setTimeout(() => {
    detailAnimating = false;
  }, delay + 100);
}
