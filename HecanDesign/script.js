/**
 * Creativity 无缝滚动：根据首图宽度 + gap 设置 --marquee-x，与 60% 高度缩放一致
 */
(function () {
  const track = document.querySelector('.banner-creativity-track');
  const firstImg = document.querySelector('.banner-creativity');
  if (!track || !firstImg) return;

  function updateMarqueeDistance() {
    const w = firstImg.offsetWidth;
    const styles = getComputedStyle(track);
    const gap = parseFloat(styles.columnGap || styles.gap) || 120;
    const distance = -(w + gap);
    track.style.setProperty('--marquee-x', distance + 'px');
  }

  function onReady() {
    updateMarqueeDistance();
  }

  if (firstImg.complete) {
    onReady();
  } else {
    firstImg.addEventListener('load', onReady);
  }

  window.addEventListener('resize', function () {
    requestAnimationFrame(updateMarqueeDistance);
  });
})();

/**
 * EN / CN 文案切换
 */
(function () {
  const STORAGE_KEY = 'hecan_site_lang';
  const btns = Array.from(document.querySelectorAll('.lang-btn'));
  if (!btns.length) return;

  const i18n = {
    en: {
      htmlLang: 'en',
      title: 'HecanDesign',
      nav: ['Services', 'Work', 'Teaching', 'About me'],
      bannerIdw: 'I Design With',
      bannerRole1: 'Senior UX/UI Designer',
      bannerRole2: 'Design Systems & AI',
      bannerCta: 'READ THE FULL STORY',
      welcomeTitle: 'Welcome',
      welcomeLead: [
        "Hi, I'm He Can —",
        'I Turn <span class="welcome-lead-highlight">Complexity</span> Into',
        'Clarity Through Design.'
      ],
      welcomeDesc:
        '8 Years Of Experience Across UX, UI, Design Systems, And User Research. Based In Chongqing, With Enterprise Project Credits Including Ernst & Young, Changan Auto, NIO, And Chongqing Rural Commercial Bank. Currently Open To New Opportunities.',
      whatTitle: 'What I Actually Do',
      whatBlocks: [
        {
          lead: 'UX & Product Design',
          desc: 'I Work From The Messy, Undefined Early Stage — Mapping User Journeys, Defining Problems, And Shaping Product Direction — All The Way Through To Polished, Validated Interfaces Ready For Handoff.',
          tags: ['User Flows', 'Wireframing', 'Prototyping', 'Design Systems', 'Usability Testing']
        },
        {
          lead: 'UI Visual Design',
          desc: 'I Build Interfaces That Feel Right — Clean, Purposeful, And Consistent. My Visual Work Serves The User Experience First, While Making Products Something People Actually Enjoy Looking At.',
          tags: ['Component Design', 'Visual Hierarchy', 'Interaction Design', 'Dark/Light Mode']
        },
        {
          lead: 'Design Systems & Ops',
          desc: 'I Build Systems That Bring Order To Chaos — Scalable, Well-Documented, And Actually Adopted By The Teams Using Them. Good Design Ops Means Less Reinventing, More Shipping.',
          tags: ['Token Architecture', 'Component Libraries', 'Documentation', 'Dark/Figma Variables']
        },
        {
          lead: 'User Research & Strategy',
          desc: 'I Believe In Designing With Evidence, Not Assumptions. I Plan And Run Research That Informs Real Product Decisions — From Discovery Interviews To Synthesis And Strategic Recommendations.',
          tags: ['User Interviews', 'Survey Design', 'Affinity Mapping', 'Dark', 'Insight Reports']
        },
        {
          lead: 'AI-Enhanced Design',
          desc: 'I Actively Explore How AI Tools Integrate Into The Design Workflow — Not As A Trend To Follow, But As A Genuine Way To Move Faster, Think Broader, And Deliver More Value As A Designer.',
          tags: ['AI-Assisted UX', 'Prompt Design', 'Workflow Automation', 'Tool Evaluation']
        }
      ],
      standForTitle: 'What I Stand For',
      standForCards: [
        {
          title: 'Less, But Better',
          desc: 'I Resist The Urge To Add. The Best Design Decisions Are Often The Ones That Remove Something.'
        },
        {
          title: 'Design That Ships',
          desc: 'A Design That Never Gets Built Is Just A Picture. I Care About Making Work That Crosses The Finish Line.'
        },
        {
          title: 'Systems Thinking',
          desc: "I Don't Design Screens — I Design How Things Connect. Consistency At Scale Starts With Thinking In Systems."
        },
        {
          title: 'Stay Curious',
          desc: 'The Tools And Context Keep Changing. My Job Is To Keep Up — And Help The People Around Me Do The Same.'
        }
      ],
      rightFitTitle: 'The Right Fit',
      rightFitLead: 'Good Design Needs A Good<br>Environment. I\'m Looking For Teams<br>That Take Craft Seriously.',
      rightFitItems: [
        'Work Independently With Minimal Hand-Holding',
        'Own The Full Design Process End-To-End',
        'Bridge Design, Product, And Engineering',
        'Think In Systems, Not Just Single Screens'
      ],
      connectTitle: "Let's<br>Connect"
    },
    'zh-CN': {
      htmlLang: 'zh-CN',
      title: 'HecanDesign',
      nav: ['服务', '作品', '教学', '关于我'],
      bannerIdw: '我的设计关键词',
      bannerRole1: '资深 UX/UI 设计师',
      bannerRole2: '设计系统与 AI',
      bannerCta: '阅读全文',
      welcomeTitle: '欢迎',
      welcomeLead: [
        '你好，我是 He Can —',
        '我将<span class="welcome-lead-highlight">复杂性</span>转化为',
        '清晰可行的设计。'
      ],
      welcomeDesc:
        '拥有 8 年 UX、UI、设计系统与用户研究经验。常驻重庆，曾参与安永、长安汽车、蔚来、重庆农村商业银行等企业项目。期待新的机会与合作。',
      whatTitle: '我真正做的事',
      whatBlocks: [
        {
          lead: 'UX 与产品设计',
          desc: '我从模糊、未定义的早期阶段开始工作——梳理用户旅程、定义问题、明确产品方向，并一路推进到可验证、可交付的高完成度界面。',
          tags: ['用户流程', '线框设计', '原型设计', '设计系统', '可用性测试']
        },
        {
          lead: 'UI 视觉设计',
          desc: '我专注于打造“感觉对”的界面：简洁、有目的、一致。视觉表达始终服务于用户体验，同时让产品真正具备审美吸引力。',
          tags: ['组件设计', '视觉层级', '交互设计', '深浅色模式']
        },
        {
          lead: '设计系统与设计协作',
          desc: '我搭建能让混乱变有序的系统：可扩展、文档清晰，并且能被团队真正采用。好的设计协作意味着更少重复造轮子、更多高质量上线。',
          tags: ['Token 架构', '组件库', '文档规范', '深色/Figma 变量']
        },
        {
          lead: '用户研究与策略',
          desc: '我坚持用证据而非假设做设计。会规划并执行能够影响产品决策的研究流程——从探索访谈到洞察归纳，再到策略建议。',
          tags: ['用户访谈', '问卷设计', '亲和图分析', '洞察报告']
        },
        {
          lead: 'AI 增强设计',
          desc: '我持续探索 AI 工具如何融入设计流程——不是追逐趋势，而是把它作为真实手段来提速、拓宽思考边界，并创造更高价值。',
          tags: ['AI 辅助 UX', '提示词设计', '流程自动化', '工具评估']
        }
      ],
      standForTitle: '我的设计信条',
      standForCards: [
        {
          title: '少一点，但更好',
          desc: '我会克制“不断添加”的冲动。最好的设计决策，往往来自于有意识地删减。'
        },
        {
          title: '能落地的设计',
          desc: '无法被实现的设计，只是一张图。我的目标是推动方案跨过终点并真正上线。'
        },
        {
          title: '系统化思维',
          desc: '我不只是在设计单个页面，而是在设计“彼此如何连接”。规模化一致性，始于系统思考。'
        },
        {
          title: '保持好奇',
          desc: '工具和环境一直在变化。我的职责是持续进化，并带动身边的人一起成长。'
        }
      ],
      rightFitTitle: '理想合作方式',
      rightFitLead: '优秀设计需要优秀环境。<br>我期待加入真正重视设计价值与工艺标准的团队。',
      rightFitItems: [
        '可独立推进工作，减少过度依赖与反复确认',
        '能够完整负责从洞察到交付的全流程设计',
        '在设计、产品、研发之间高效协同并推动共识',
        '以系统视角思考，而非只停留在单个页面'
      ],
      connectTitle: '欢迎<br>联系'
    }
  };

  function setText(selector, value) {
    const el = document.querySelector(selector);
    if (el) el.textContent = value;
  }

  function setHtml(selector, value) {
    const el = document.querySelector(selector);
    if (el) el.innerHTML = value;
  }

  function setTextAt(selector, idx, value) {
    const list = document.querySelectorAll(selector);
    if (list[idx]) list[idx].textContent = value;
  }

  function setHtmlAt(selector, idx, value) {
    const list = document.querySelectorAll(selector);
    if (list[idx]) list[idx].innerHTML = value;
  }

  function applyLang(lang) {
    const dict = i18n[lang] || i18n.en;
    document.documentElement.lang = dict.htmlLang;
    document.title = dict.title;

    const navLinks = document.querySelectorAll('.nav-links a');
    dict.nav.forEach((txt, idx) => {
      if (navLinks[idx]) navLinks[idx].textContent = txt;
    });

    setText('.banner-idw', dict.bannerIdw);
    setText('.banner-role .banner-role-line:nth-child(1)', dict.bannerRole1);
    setText('.banner-role .banner-role-line:nth-child(2)', dict.bannerRole2);
    setText('.banner-down-text', dict.bannerCta);
    const cta = document.querySelector('.banner-down-cta');
    if (cta) cta.setAttribute('aria-label', dict.bannerCta);

    setText('#section-welcome .title-accent-label', dict.welcomeTitle);
    setText('#section-whatido .title-accent-label', dict.whatTitle);
    setText('#section-stand-for .title-accent-label', dict.standForTitle);
    setText('#section-right-fit .title-accent-label', dict.rightFitTitle);
    setHtml('#section-connect .connect-title', dict.connectTitle);

    const welcomeLead = document.querySelectorAll('#section-welcome .welcome-lead-line');
    if (welcomeLead[0]) welcomeLead[0].textContent = dict.welcomeLead[0];
    if (welcomeLead[1]) welcomeLead[1].innerHTML = dict.welcomeLead[1];
    if (welcomeLead[2]) welcomeLead[2].textContent = dict.welcomeLead[2];
    setText('#section-welcome .welcome-desc', dict.welcomeDesc);

    // What I Actually Do：5 个子模块
    const whatSections = [
      '#section-whatido',
      '#section-ui-visual',
      '#section-design-systems',
      '#section-user-research',
      '#section-ai-design'
    ];
    whatSections.forEach((sectionSelector, index) => {
      const block = dict.whatBlocks[index];
      if (!block) return;
      setText(`${sectionSelector} .welcome-lead-line`, block.lead);
      setText(`${sectionSelector} .welcome-desc`, block.desc);
      const tags = document.querySelectorAll(`${sectionSelector} .whatido-tag`);
      block.tags.forEach((tag, tagIndex) => {
        if (tags[tagIndex]) tags[tagIndex].textContent = tag;
      });
    });

    // What I Stand For：4 张卡片
    dict.standForCards.forEach((card, index) => {
      setTextAt('#section-stand-for .stand-for-title', index, card.title);
      setTextAt('#section-stand-for .stand-for-desc', index, card.desc);
    });

    // The Right Fit
    setHtml('#section-right-fit .right-fit-lead', dict.rightFitLead);
    dict.rightFitItems.forEach((item, index) => {
      setTextAt('#section-right-fit .right-fit-item', index, item);
    });

    btns.forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.lang === lang);
    });

    localStorage.setItem(STORAGE_KEY, lang);
  }

  const saved = localStorage.getItem(STORAGE_KEY);
  const initial = saved && i18n[saved] ? saved : 'en';
  applyLang(initial);

  btns.forEach((btn) => {
    btn.addEventListener('click', function () {
      applyLang(btn.dataset.lang || 'en');
    });
  });
})();

/**
 * Banner 人像“光束扫描”Canvas 叠加动效
 * - 暗幕覆盖 + 径向渐变挖洞提亮（destination-out）
 * - 走过区域轻微提亮残影（离屏 mask 缓慢衰减）
 * - 胶片颗粒噪点（小纹理平铺 + 轻微抖动）
 * - 移动端降低渲染分辨率
 */
(function () {
  const banner = document.querySelector('.banner');
  const img = document.querySelector('.banner-img');
  const canvas = document.querySelector('.banner-spotlight');
  if (!banner || !img || !canvas) return;

  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) return;

  const maskCanvas = document.createElement('canvas');
  const maskCtx = maskCanvas.getContext('2d', { alpha: true });
  if (!maskCtx) return;

  const noiseCanvas = document.createElement('canvas');
  const noiseCtx = noiseCanvas.getContext('2d', { alpha: true, willReadFrequently: true });
  let noisePattern = null;
  let cutoutTrailStamp = null;
  let cutoutSpotStamp = null;
  let glowStamp = null;

  const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
  const rand = (min, max) => min + Math.random() * (max - min);

  const isMobileLike =
    (window.matchMedia && window.matchMedia('(max-width: 768px)').matches) ||
    /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent || '');

  const state = {
    running: false,
    raf: 0,
    lastNow: 0,
    startNow: 0,
    loopMs: rand(8000, 12000),
    phaseA: rand(0, Math.PI * 2),
    phaseB: rand(0, Math.PI * 2),
    phaseC: rand(0, Math.PI * 2),
    phaseD: rand(0, Math.PI * 2),
    wobble: rand(0, Math.PI * 2),
    wobble2: rand(0, Math.PI * 2),
    cssW: 0,
    cssH: 0,
    pxRatio: 1,
    quality: isMobileLike ? 0.65 : 1,
    radiusCss: 0,
    radiusTrailCss: 0,
    radiusGlowCss: 0,
    // 未扫过区域压暗强度：让人像在未被光圈扫到时更“沉”
    darkAlpha: 0.73,
    // 残留提亮衰减速度：衰减更快，避免离开人脸后仍然“拖亮”
    trailClear: 0.03,
    // 残留提亮强度：降低“拖影亮度”
    trailAddAlpha: 0.12,
    // 当前光圈强度：提高会更明显
    spotAddAlpha: 0.82,
    // 额外辉光（screen）：让光束在偏亮底图上也清晰
    glowAlpha: 0.22,
    noiseAlpha: isMobileLike ? 0.045 : 0.06,
    noiseOffsetX: 0,
    noiseOffsetY: 0,
    lastNoiseNow: 0,
    // 噪点层是“装饰”，不必每帧重绘；降频可以显著省 CPU/GPU
    noiseIntervalMs: isMobileLike ? 120 : 80,
  };

  function makeNoisePattern() {
    if (!noiseCtx) return;
    const size = isMobileLike ? 96 : 128;
    noiseCanvas.width = size;
    noiseCanvas.height = size;

    const imgData = noiseCtx.createImageData(size, size);
    const data = imgData.data;
    for (let i = 0; i < data.length; i += 4) {
      const v = (Math.random() * 255) | 0;
      data[i + 0] = v;
      data[i + 1] = v;
      data[i + 2] = v;
      data[i + 3] = 255;
    }
    noiseCtx.putImageData(imgData, 0, 0);
    noisePattern = ctx.createPattern(noiseCanvas, 'repeat');
  }

  function createCutoutStamp(radiusCss, strength, maxStampPx) {
    const safeR = Math.max(1, radiusCss);
    const sizePx = Math.max(1, Math.floor(Math.min(safeR * 2 * state.pxRatio, maxStampPx)));
    const cvs = document.createElement('canvas');
    cvs.width = sizePx;
    cvs.height = sizePx;
    const tctx = cvs.getContext('2d', { alpha: true });
    if (!tctx) return null;

    const r = sizePx / 2;
    const cx = r;
    const cy = r;
    const g = tctx.createRadialGradient(cx, cy, 0, cx, cy, r);
    // 更锐利的中心 + 更干净的边缘衰减（更像“聚光灯”）
    g.addColorStop(0.0, `rgba(255,255,255,${strength})`);
    g.addColorStop(0.28, `rgba(255,255,255,${strength * 0.92})`);
    g.addColorStop(0.62, `rgba(255,255,255,${strength * 0.35})`);
    g.addColorStop(1.0, 'rgba(255,255,255,0)');
    tctx.fillStyle = g;
    tctx.beginPath();
    tctx.arc(cx, cy, r, 0, Math.PI * 2);
    tctx.fill();
    return cvs;
  }

  function createGlowStamp(radiusCss, alpha, maxStampPx) {
    const safeR = Math.max(1, radiusCss);
    const sizePx = Math.max(1, Math.floor(Math.min(safeR * 2 * state.pxRatio, maxStampPx)));
    const cvs = document.createElement('canvas');
    cvs.width = sizePx;
    cvs.height = sizePx;
    const tctx = cvs.getContext('2d', { alpha: true });
    if (!tctx) return null;

    const r = sizePx / 2;
    const cx = r;
    const cy = r;
    const g = tctx.createRadialGradient(cx, cy, 0, cx, cy, r);
    // 略带暖色的“舞台灯”质感（可按需改成纯白）
    g.addColorStop(0.0, `rgba(255,246,220,${alpha})`);
    g.addColorStop(0.45, `rgba(255,246,220,${alpha * 0.35})`);
    g.addColorStop(1.0, 'rgba(255,246,220,0)');
    tctx.fillStyle = g;
    tctx.beginPath();
    tctx.arc(cx, cy, r, 0, Math.PI * 2);
    tctx.fill();
    return cvs;
  }

  function buildStamps() {
    // stamp 分辨率上限，避免超大屏导致一次性生成超大 canvas
    const maxStampPx = isMobileLike ? 900 : 1200;
    cutoutTrailStamp = createCutoutStamp(state.radiusTrailCss, state.trailAddAlpha, maxStampPx);
    cutoutSpotStamp = createCutoutStamp(state.radiusCss, state.spotAddAlpha, maxStampPx);
    glowStamp = createGlowStamp(state.radiusGlowCss, state.glowAlpha, maxStampPx);
  }

  function resize() {
    const rect = img.getBoundingClientRect();
    const cssW = Math.max(1, rect.width);
    const cssH = Math.max(1, rect.height);

    const dpr = clamp(window.devicePixelRatio || 1, 1, isMobileLike ? 1.25 : 2);
    const pxRatio = dpr * state.quality;

    state.cssW = cssW;
    state.cssH = cssH;
    state.pxRatio = pxRatio;

    canvas.style.width = cssW + 'px';
    canvas.style.height = cssH + 'px';

    canvas.width = Math.max(1, Math.floor(cssW * pxRatio));
    canvas.height = Math.max(1, Math.floor(cssH * pxRatio));
    maskCanvas.width = canvas.width;
    maskCanvas.height = canvas.height;

    ctx.setTransform(pxRatio, 0, 0, pxRatio, 0, 0);
    maskCtx.setTransform(pxRatio, 0, 0, pxRatio, 0, 0);

    makeNoisePattern();

    // 预计算光圈半径（只在 resize 时更新）
    state.radiusCss = state.cssW * 0.3;
    state.radiusTrailCss = state.radiusCss * 0.72;
    state.radiusGlowCss = state.radiusCss * 1.15;
    buildStamps();
  }

  function getSpotPos(progress01) {
    // 以中心为基准的 Lissajous + 二次谐波，避免机械感；加一点“呼吸式”摆动
    const t = progress01 * Math.PI * 2;
    const x =
      0.5 +
      0.33 * Math.sin(t + state.phaseA) +
      0.12 * Math.sin(t * 2.0 + state.phaseB) +
      0.04 * Math.sin(t * 3.0 + state.wobble);
    const y =
      0.5 +
      0.28 * Math.cos(t * 1.03 + state.phaseC) +
      0.10 * Math.cos(t * 2.1 + state.phaseD) +
      0.04 * Math.cos(t * 3.2 + state.wobble2);
    return {
      x: clamp(x, 0.08, 0.92) * state.cssW,
      y: clamp(y, 0.08, 0.92) * state.cssH,
    };
  }

  function drawRadialCutout(targetCtx, x, y, radius, strength) {
    const g = targetCtx.createRadialGradient(x, y, 0, x, y, radius);
    // 更锐利的中心 + 更干净的边缘衰减（更像“聚光灯”）
    g.addColorStop(0.0, `rgba(255,255,255,${strength})`);
    g.addColorStop(0.28, `rgba(255,255,255,${strength * 0.92})`);
    g.addColorStop(0.62, `rgba(255,255,255,${strength * 0.35})`);
    g.addColorStop(1.0, 'rgba(255,255,255,0)');
    targetCtx.fillStyle = g;
    targetCtx.beginPath();
    targetCtx.arc(x, y, radius, 0, Math.PI * 2);
    targetCtx.fill();
  }

  function drawGlow(targetCtx, x, y, radius, alpha) {
    const g = targetCtx.createRadialGradient(x, y, 0, x, y, radius * 1.15);
    // 略带暖色的“舞台灯”质感（可按需改成纯白）
    g.addColorStop(0.0, `rgba(255,246,220,${alpha})`);
    g.addColorStop(0.45, `rgba(255,246,220,${alpha * 0.35})`);
    g.addColorStop(1.0, 'rgba(255,246,220,0)');
    targetCtx.fillStyle = g;
    targetCtx.beginPath();
    targetCtx.arc(x, y, radius * 1.15, 0, Math.PI * 2);
    targetCtx.fill();
  }

  function drawStamp(targetCtx, stamp, x, y, radiusCss) {
    if (!stamp || !radiusCss) return;
    const d = radiusCss * 2;
    targetCtx.drawImage(stamp, x - radiusCss, y - radiusCss, d, d);
  }

  function frame(now) {
    if (!state.running) return;
    if (!state.startNow) state.startNow = now;

    const dt = state.lastNow ? now - state.lastNow : 16.7;
    state.lastNow = now;

    // 8–12s 一圈：用连续相位+轻微漂移，避免“循环断点跳变”
    const elapsed = now - state.startNow;
    const progress = (elapsed % state.loopMs) / state.loopMs;
    const endEase = progress > 0.85 ? (progress - 0.85) / 0.15 : 0;
    if (endEase > 0) {
      const k = endEase * endEase * (3 - 2 * endEase); // smoothstep
      state.wobble += (dt / 1000) * 0.25 * k;
      state.wobble2 += (dt / 1000) * 0.22 * k;
    }
    // 非常慢的相位漂移，让轨迹“随机游走”但持续平滑
    const drift = dt / 1000;
    state.phaseA += drift * 0.035;
    state.phaseB += drift * 0.028;
    state.phaseC += drift * 0.031;
    state.phaseD += drift * 0.026;

    const { x, y } = getSpotPos(progress);
    const radius = state.radiusCss || state.cssW * 0.3;

    // 1) 更新“残留提亮”mask：先衰减，再叠加一层弱光
    maskCtx.setTransform(state.pxRatio, 0, 0, state.pxRatio, 0, 0);
    maskCtx.globalCompositeOperation = 'destination-out';
    maskCtx.fillStyle = `rgba(0,0,0,${state.trailClear})`;
    maskCtx.fillRect(0, 0, state.cssW, state.cssH);

    maskCtx.globalCompositeOperation = 'source-over';
    // 仅对当前位置附近留下很窄的残影，让“没扫到人脸”的时段保持更暗
    drawStamp(maskCtx, cutoutTrailStamp, x, y, state.radiusTrailCss || radius * 0.72);

    // 2) 主画布：暗幕 + mask 挖洞 + 当前强聚光挖洞
    ctx.setTransform(state.pxRatio, 0, 0, state.pxRatio, 0, 0);
    ctx.globalCompositeOperation = 'source-over';
    ctx.clearRect(0, 0, state.cssW, state.cssH);
    ctx.fillStyle = `rgba(0,0,0,${state.darkAlpha})`;
    ctx.fillRect(0, 0, state.cssW, state.cssH);

    ctx.globalCompositeOperation = 'destination-out';
    ctx.drawImage(maskCanvas, 0, 0, state.cssW, state.cssH);
    drawStamp(ctx, cutoutSpotStamp, x, y, radius);

    // 2.5) 额外“加色辉光”，让光束更突出（尤其在底图偏亮区域）
    ctx.globalCompositeOperation = 'screen';
    drawStamp(ctx, glowStamp, x, y, state.radiusGlowCss || radius * 1.15);
    ctx.globalCompositeOperation = 'source-over';

    // 3) 噪点层：低透明度覆盖（轻微漂移，带一点帧间“闪烁”）
    if (noisePattern) {
      const frameScale = dt / 16.7;
      const amp = isMobileLike ? 0.6 : 0.9;
      const t = now * 0.001;
      const jitter = Math.sin(t * 1.3) * amp;

      state.noiseOffsetX = (state.noiseOffsetX + (0.35 + jitter) * frameScale) % noiseCanvas.width;
      if (state.noiseOffsetX < 0) state.noiseOffsetX += noiseCanvas.width;
      state.noiseOffsetY = (state.noiseOffsetY + (0.22 - jitter) * frameScale) % noiseCanvas.height;
      if (state.noiseOffsetY < 0) state.noiseOffsetY += noiseCanvas.height;

      // 降频重绘：噪点“足够活着”即可
      if (now - state.lastNoiseNow >= state.noiseIntervalMs) {
        state.lastNoiseNow = now;
        ctx.globalCompositeOperation = 'source-over';
        ctx.globalAlpha = state.noiseAlpha;
        ctx.fillStyle = noisePattern;
        ctx.save();
        ctx.translate(-state.noiseOffsetX, -state.noiseOffsetY);
        ctx.fillRect(state.noiseOffsetX, state.noiseOffsetY, state.cssW + noiseCanvas.width, state.cssH + noiseCanvas.height);
        ctx.restore();
        ctx.globalAlpha = 1;
      }
    }

    state.raf = requestAnimationFrame(frame);
  }

  function start() {
    if (state.running) return;
    state.running = true;
    state.lastNow = 0;
    state.startNow = 0;
    resize();
    state.raf = requestAnimationFrame(frame);
  }

  function stop() {
    state.running = false;
    if (state.raf) cancelAnimationFrame(state.raf);
    state.raf = 0;
  }

  const ro = 'ResizeObserver' in window ? new ResizeObserver(() => resize()) : null;
  if (ro) ro.observe(img);
  window.addEventListener('resize', () => requestAnimationFrame(resize), { passive: true });

  let imgReady = false;
  let bannerVisible = true;
  if ('IntersectionObserver' in window) {
    const r = banner.getBoundingClientRect();
    bannerVisible = r.bottom > 0 && r.top < window.innerHeight;
  }

  function tryStart() {
    if (imgReady && bannerVisible) start();
  }

  // 不在视口时暂停 canvas 动画：减少持续掉帧
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        bannerVisible = !!(entry && entry.isIntersecting);
        if (!bannerVisible) stop();
        else tryStart();
      },
      { threshold: 0.15 }
    );
    io.observe(banner);
  }

  // 页面切后台时暂停，回来继续（但仍需满足在视口）
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop();
    else tryStart();
  });

  if (img.complete) {
    imgReady = true;
    tryStart();
  } else {
    img.addEventListener(
      'load',
      () => {
        imgReady = true;
        tryStart();
      },
      { once: true }
    );
  }
})();

/**
 * Banner：开屏两步演出
 * 1) "I Design With" 打字机逐字点亮
 * 2) 两侧细条从中间向外展开
 */
(function () {
  const row = document.querySelector('.banner-idw-row');
  const bannerIdw = document.querySelector('.banner-idw');
  if (!row || !bannerIdw) return;

  // 防止在某些情况下重复启动（例如脚本热更新/二次注入）
  if (row.dataset.introStarted === 'true') return;
  row.dataset.introStarted = 'true';

  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobileLike =
    (window.matchMedia && window.matchMedia('(max-width: 768px)').matches) ||
    /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent || '');

  const lines = row.querySelectorAll('.banner-idw-line');
  const leftLine = lines[0];
  const rightLine = lines[1];

  function showInstant() {
    bannerIdw.classList.add('is-intro-on');
    row.classList.add('is-lines-open');
    // 避免后续语言切换时误用旧的 span
    bannerIdw.innerHTML = bannerIdw.textContent;
  }

  if (reduceMotion) {
    showInstant();
    return;
  }

  const originalText = bannerIdw.textContent;
  bannerIdw.innerHTML = '';
  bannerIdw.classList.add('is-intro-on');

  const chars = Array.from(originalText);
  const frag = document.createDocumentFragment();

  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];
    const span = document.createElement('span');
    span.className = 'banner-idw-char';
    // 空格需要保留，否则会折叠
    span.textContent = ch === ' ' ? '\u00A0' : ch;
    frag.appendChild(span);
  }

  // 不显示光标：只做逐字点亮呈现
  bannerIdw.appendChild(frag);

  const charSpans = Array.from(bannerIdw.querySelectorAll('.banner-idw-char'));

  // 机打节奏：慢慢点亮 + 少量随机抖动更像“打字”
  const baseMs = isMobileLike ? 60 : 75;
  const spaceMs = isMobileLike ? 28 : 36;

  // 从中间往两侧：按到文本中心的距离从小到大点亮
  //（同距离字符会左右交替出现，观感更像“往外扩散”）
  const center = (chars.length - 1) / 2;
  const revealOrder = Array.from({ length: chars.length }, (_, i) => i).sort((a, b) => {
    const da = Math.abs(a - center);
    const db = Math.abs(b - center);
    if (da !== db) return da - db;
    // 同距离：右侧优先，再左侧（交替更对称）
    const aRight = a >= center;
    const bRight = b >= center;
    if (aRight !== bRight) return aRight ? -1 : 1;
    return a - b;
  });

  let idx = 0;
  let raf = 0;
  let nextAt = 0;
  const startDelayMs = 240;

  function tick(now) {
    if (idx >= revealOrder.length) {
      // 完成：展开两侧线
      row.classList.add('is-lines-open');
      cancelAnimationFrame(raf);
      return;
    }

    if (!nextAt) nextAt = now + startDelayMs;

    if (now >= nextAt) {
      const charIndex = revealOrder[idx];
      const span = charSpans[charIndex];
      if (span) span.classList.add('is-on');

      const ch = chars[charIndex];
      const jitter = (Math.random() - 0.5) * 10; // 轻微随机抖动
      const cost = ch === ' ' ? spaceMs : baseMs;
      nextAt = now + Math.max(12, cost + jitter);
      idx++;
    }

    raf = requestAnimationFrame(tick);
  }

  raf = requestAnimationFrame(tick);
})();
