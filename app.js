// ── 정답 자세 데이터 (송현이 직접 캡처) ──
const REF = {
  tadasana: {
    name: '산 자세', en: 'Tadasana',
    tts: '산 자세입니다. 발바닥을 바닥에 단단히 붙이고 어깨를 내려주세요.',
    tip: '<b>발바닥</b> 전체로 바닥 누르고 <b>어깨</b>를 귀에서 멀리 내려요',
    pts: {
      nose:[0.419,0.358], lshoulder:[0.469,0.439], rshoulder:[0.390,0.439],
      lelbow:[0.489,0.531], relbow:[0.373,0.533], lwrist:[0.509,0.607], rwrist:[0.365,0.607],
      lhip:[0.445,0.617], rhip:[0.405,0.619], lknee:[0.468,0.750], rknee:[0.399,0.753],
      lankle:[0.487,0.881], rankle:[0.396,0.882]
    },
    checks: [
      { name:'어깨 수평', j:['lshoulder','rshoulder'], type:'level',    thresh:0.05 },
      { name:'척추 직립', j:['nose','lhip'],           type:'vertical', thresh:0.08 },
      { name:'무릎 펴기', j:['lhip','lknee','lankle'], type:'angle',    ideal:175, thresh:22 },
      { name:'팔 내리기', j:['lshoulder','lelbow','lwrist'], type:'angle', ideal:168, thresh:22 },
    ]
  },
  catcow: {
    name: '고양이·소 자세', en: 'Cat-Cow',
    tts: '고양이 소 자세입니다. 숨을 마시며 허리를 내리고, 내쉬며 등을 둥글게 말아주세요.',
    tip: '숨 <b>마시며</b> 허리 내리고, 숨 <b>내쉬며</b> 등을 둥글게',
    pts: {
      nose:[0.886,0.482], lshoulder:[0.722,0.481], rshoulder:[0.734,0.412],
      relbow:[0.774,0.738], rwrist:[0.838,1.0],
      lhip:[0.322,0.547], rhip:[0.294,0.507], lknee:[0.291,0.915], rknee:[0.244,0.947], rankle:[-0.006,0.811]
    },
    checks: [
      { name:'엎드린 자세', j:['lshoulder','lhip'],           type:'horizontal', thresh:0.12 },
      { name:'무릎 꿇기',   j:['lhip','lknee','rankle'],      type:'angle', ideal:95,  thresh:30 },
      { name:'팔 지지',     j:['lshoulder','relbow','rwrist'], type:'angle', ideal:155, thresh:28 },
    ]
  },
  child: {
    name: '어린이 자세', en: "Child's Pose",
    tts: '어린이 자세입니다. 이마를 바닥에 내리고 어깨 힘을 완전히 빼주세요.',
    tip: '<b>이마</b>를 바닥에 내리고 어깨 힘을 완전히 빼요',
    pts: {
      nose:[0.633,0.746], lshoulder:[0.589,0.607], rshoulder:[0.586,0.642],
      relbow:[0.788,0.753], rwrist:[1.0,0.764],
      lhip:[0.210,0.374], rhip:[0.183,0.398], rknee:[0.351,0.812],
      lankle:[0.146,0.702], rankle:[0.103,0.755]
    },
    checks: [
      { name:'이마 숙이기',   j:['nose','lshoulder','lhip'],   type:'angle', ideal:150, thresh:28 },
      { name:'엉덩이 내리기', j:['lshoulder','lhip','rknee'],  type:'angle', ideal:85,  thresh:30 },
      { name:'팔 뻗기',       j:['lshoulder','relbow','rwrist'],type:'angle', ideal:162, thresh:25 },
    ]
  },
  warrior1: {
    name: '전사 1 자세', en: 'Warrior I',
    tts: '전사 1 자세입니다. 앞무릎을 구십도로 구부리고 양팔을 위로 힘차게 뻗어주세요.',
    tip: '앞무릎 <b>90도</b>로 구부리고 양팔을 <b>위로</b> 힘차게 뻗어요',
    pts: {
      nose:[0.424,0.291], lshoulder:[0.419,0.354], rshoulder:[0.421,0.375],
      lelbow:[0.344,0.282], lwrist:[0.298,0.229],
      lhip:[0.461,0.581], rhip:[0.448,0.582], lknee:[0.527,0.710], rknee:[0.373,0.645],
      lankle:[0.683,0.785], rankle:[0.400,0.779]
    },
    checks: [
      { name:'팔 올리기',   j:['lshoulder','lelbow','lwrist'],  type:'angle', ideal:158, thresh:25 },
      { name:'앞무릎 굽힘', j:['lhip','lknee','lankle'],        type:'angle', ideal:110, thresh:28 },
      { name:'뒷다리 직립', j:['rhip','rknee','rankle'],        type:'angle', ideal:158, thresh:25 },
    ]
  },
  downdog: {
    name: '다운독 자세', en: 'Downward Dog',
    tts: '다운독 자세입니다. 엉덩이를 높이 들어 역브이자를 만들고, 발뒤꿈치를 바닥으로 눌러주세요.',
    tip: '<b>엉덩이</b>를 높이 들어 역V자, <b>발뒤꿈치</b>를 바닥으로',
    pts: {
      nose:[0.250,0.543], lshoulder:[0.361,0.468], rshoulder:[0.357,0.436],
      lelbow:[0.329,0.668], lwrist:[0.211,0.835],
      lhip:[0.696,0.179], rhip:[0.661,0.177], lknee:[0.851,0.531], rknee:[0.776,0.522],
      lankle:[0.971,0.772], rankle:[0.908,0.735]
    },
    checks: [
      { name:'엉덩이 높이', j:['lshoulder','lhip','lknee'],    type:'angle', ideal:68,  thresh:22 },
      { name:'팔 펴기',     j:['lshoulder','lelbow','lwrist'],  type:'angle', ideal:158, thresh:22 },
      { name:'다리 펴기',   j:['lhip','lknee','lankle'],        type:'angle', ideal:148, thresh:22 },
    ]
  },
  tree: {
    name: '나무 자세', en: 'Tree Pose',
    tts: '나무 자세입니다. 시선을 한 점에 고정하면 균형이 훨씬 쉬워져요.',
    tip: '<b>시선</b>을 한 점에 고정하면 균형이 훨씬 쉬워져요',
    pts: {
      nose:[0.395,0.179], lshoulder:[0.344,0.256], rshoulder:[0.423,0.252],
      lelbow:[0.341,0.301], relbow:[0.470,0.298],
      lhip:[0.377,0.461], rhip:[0.409,0.455], lknee:[0.461,0.544], rknee:[0.439,0.611],
      lankle:[0.391,0.596], rankle:[0.403,0.745]
    },
    checks: [
      { name:'팔 합장',   j:['lshoulder','lelbow','relbow'], type:'level',    thresh:0.06 },
      { name:'지지발 직립',j:['lhip','lankle'],              type:'vertical', thresh:0.06 },
      { name:'어깨 수평', j:['lshoulder','rshoulder'],       type:'level',    thresh:0.05 },
    ]
  },
  warrior2: {
    name: '전사 2 자세', en: 'Warrior II',
    tts: '전사 2 자세입니다. 팔을 수평으로 넓게 펼치고 시선은 앞손 방향으로 향해주세요.',
    tip: '팔을 <b>수평</b>으로 넓게 펼치고 시선은 앞손 방향으로',
    pts: {
      nose:[0.360,0.229], lshoulder:[0.417,0.313], rshoulder:[0.296,0.305],
      lelbow:[0.515,0.341], relbow:[0.202,0.302], lwrist:[0.605,0.378], rwrist:[0.117,0.307],
      lhip:[0.397,0.546], rhip:[0.342,0.548], lknee:[0.294,0.630], rknee:[0.396,0.709],
      lankle:[0.294,0.788], rankle:[0.546,0.760]
    },
    checks: [
      { name:'팔 수평',     j:['lwrist','lshoulder','rwrist'], type:'angle', ideal:168, thresh:20 },
      { name:'앞무릎 굽힘', j:['lhip','lknee','lankle'],       type:'angle', ideal:115, thresh:25 },
      { name:'뒷무릎 펴기', j:['rhip','rknee','rankle'],       type:'angle', ideal:145, thresh:25 },
    ]
  }
};

const COURSES = [
  { name:'3분 코스',  poses:[{id:'tadasana',sec:60},{id:'catcow',sec:60},{id:'child',sec:60}] },
  { name:'5분 코스',  poses:[{id:'tadasana',sec:60},{id:'warrior1',sec:75},{id:'downdog',sec:60},{id:'child',sec:105}] },
  { name:'10분 코스', poses:[{id:'tadasana',sec:60},{id:'warrior1',sec:90},{id:'warrior2',sec:90},{id:'downdog',sec:60},{id:'tree',sec:90},{id:'child',sec:120}] }
];

// MediaPipe 랜드마크 인덱스
const LM = {
  nose:0, lshoulder:11, rshoulder:12, lelbow:13, relbow:14,
  lwrist:15, rwrist:16, lhip:23, rhip:24, lknee:25, rknee:26, lankle:27, rankle:28
};

const CONN = [
  ['nose','lshoulder'], ['nose','rshoulder'],
  ['lshoulder','rshoulder'], ['lshoulder','lelbow'], ['lelbow','lwrist'],
  ['rshoulder','relbow'], ['relbow','rwrist'],
  ['lshoulder','lhip'], ['rshoulder','rhip'], ['lhip','rhip'],
  ['lhip','lknee'], ['lknee','lankle'], ['rhip','rknee'], ['rknee','rankle']
];

// ── 상태 ──
let selIdx = null, curCourse = null, poseIdx = 0;
let timerIv = null, autoIv = null, remaining = 0, totalSec = 0;
let hasCamera = false, stream = null, isAnalyzing = false;
let mpPose = null, rafId = null;
let muted = false, audioCtx = null;

// ── 오디오 ──
function getAudioCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}

function beep(freq, dur, vol = 0.3, type = 'sine') {
  if (muted) return;
  try {
    const ctx = getAudioCtx();
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.connect(g); g.connect(ctx.destination);
    o.frequency.value = freq; o.type = type;
    g.gain.setValueAtTime(vol, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
    o.start(ctx.currentTime); o.stop(ctx.currentTime + dur);
  } catch (e) {}
}

function playDing()    { beep(880, 0.15, 0.4); setTimeout(() => beep(1100, 0.2, 0.3), 120); }
function playWarning() { beep(440, 0.08, 0.2, 'square'); }
function playDone()    { [523,659,784,1047].forEach((f,i) => setTimeout(() => beep(f, 0.25, 0.35), i * 120)); }

function speak(text) {
  if (muted || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'ko-KR'; u.rate = 0.95; u.pitch = 1.05; u.volume = 0.9;
  const voices = window.speechSynthesis.getVoices();
  const ko = voices.find(v => v.lang.startsWith('ko'));
  if (ko) u.voice = ko;
  window.speechSynthesis.speak(u);
}

function toggleMute() {
  muted = !muted;
  document.getElementById('mute-btn').textContent = muted ? '🔇' : '🔊';
  if (muted) window.speechSynthesis?.cancel();
}

// ── 화면 전환 ──
function show(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ── 홈 ──
function sel(idx, el) {
  selIdx = idx;
  document.querySelectorAll('.course-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  const b = document.getElementById('start-btn');
  b.disabled = false;
  b.textContent = COURSES[idx].name + ' 시작 →';
}

function goToPerm() {
  if (selIdx === null) return;
  curCourse = COURSES[selIdx];
  show('screen-perm');
}

// ── 카메라 ──
async function startWithCam() {
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      video: { width:{ideal:640}, height:{ideal:480}, facingMode:'user' }, audio: false
    });
    const v = document.getElementById('video');
    v.srcObject = stream;
    await new Promise(r => v.onloadedmetadata = r);
    v.style.display = 'block';
    document.getElementById('no-cam').style.display = 'none';
    document.getElementById('snap-fab').style.display = 'block';
    hasCamera = true;
    initMP();
  } catch (e) {
    hasCamera = false;
  }
  startSession();
}

function startNoCam() {
  hasCamera = false;
  startSession();
}

function initMP() {
  mpPose = new Pose({ locateFile: f => `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${f}` });
  mpPose.setOptions({ modelComplexity:1, smoothLandmarks:true, minDetectionConfidence:0.5, minTrackingConfidence:0.5 });
  mpPose.onResults(onResults);
  const v = document.getElementById('video');
  (async function loop() {
    if (!mpPose || !hasCamera) return;
    await mpPose.send({ image: v });
    rafId = requestAnimationFrame(loop);
  })();
}

// ── 각도 계산 ──
function ang(a, b, c) {
  const ab = { x:a.x-b.x, y:a.y-b.y }, cb = { x:c.x-b.x, y:c.y-b.y };
  const d = ab.x*cb.x + ab.y*cb.y;
  const m = Math.sqrt(ab.x**2+ab.y**2) * Math.sqrt(cb.x**2+cb.y**2);
  return m === 0 ? 0 : Math.acos(Math.min(1, Math.max(-1, d/m))) * 180 / Math.PI;
}

function checkJoints(lm, poseId) {
  const pose = REF[poseId]; if (!pose) return {};
  const res = {};
  const vis = n => lm[LM[n]] && lm[LM[n]].visibility > 0.35;
  const pt  = n => lm[LM[n]];

  pose.checks.forEach(chk => {
    try {
      if (chk.type === 'angle') {
        const [a,b,c] = chk.j;
        if (!vis(a)||!vis(b)||!vis(c)) { res[chk.name]='na'; return; }
        res[chk.name] = Math.abs(ang(pt(a),pt(b),pt(c)) - chk.ideal) < chk.thresh ? 'ok' : 'ng';
      } else if (chk.type === 'level') {
        const [a,b] = chk.j;
        if (!vis(a)||!vis(b)) { res[chk.name]='na'; return; }
        res[chk.name] = Math.abs(pt(a).y - pt(b).y) < chk.thresh ? 'ok' : 'ng';
      } else if (chk.type === 'vertical') {
        const [a,b] = chk.j;
        if (!vis(a)||!vis(b)) { res[chk.name]='na'; return; }
        res[chk.name] = Math.abs(pt(a).x - pt(b).x) < chk.thresh ? 'ok' : 'ng';
      } else if (chk.type === 'horizontal') {
        const [a,b] = chk.j;
        if (!vis(a)||!vis(b)) { res[chk.name]='na'; return; }
        res[chk.name] = Math.abs(pt(a).y - pt(b).y) < chk.thresh ? 'ok' : 'ng';
      }
    } catch (e) { res[chk.name] = 'na'; }
  });
  return res;
}

// ── MediaPipe 결과 ──
function onResults(results) {
  const canvas = document.getElementById('cam-canvas');
  const v = document.getElementById('video');
  canvas.width  = v.videoWidth  || 640;
  canvas.height = v.videoHeight || 480;
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  ctx.clearRect(0, 0, W, H);
  if (!results.poseLandmarks) return;

  const lm = results.poseLandmarks;
  const poseId = curCourse ? curCourse.poses[poseIdx].id : 'tadasana';
  const jSt = checkJoints(lm, poseId);

  // 연결선
  CONN.forEach(([a, b]) => {
    const la = lm[LM[a]], lb = lm[LM[b]];
    if (!la||!lb||la.visibility<0.3||lb.visibility<0.3) return;
    const rel = Object.entries(jSt).find(([k]) => REF[poseId]?.checks.find(c => c.j.includes(a) && c.j.includes(b)));
    const st = rel ? rel[1] : 'na';
    ctx.beginPath(); ctx.moveTo(la.x*W, la.y*H); ctx.lineTo(lb.x*W, lb.y*H);
    ctx.strokeStyle = st==='ok' ? 'rgba(90,220,110,0.85)' : st==='ng' ? 'rgba(220,80,70,0.85)' : 'rgba(180,180,180,0.6)';
    ctx.lineWidth = 3.5; ctx.lineCap = 'round'; ctx.stroke();
  });

  // 관절 점
  Object.keys(LM).forEach(name => {
    const p = lm[LM[name]]; if (!p||p.visibility<0.3) return;
    const ce = Object.entries(jSt).find(([k]) => REF[poseId]?.checks.find(c => c.j.includes(name)));
    const st = ce ? ce[1] : 'na';
    ctx.beginPath(); ctx.arc(p.x*W, p.y*H, 6, 0, Math.PI*2);
    ctx.fillStyle = st==='ok' ? 'rgba(90,230,110,0.95)' : st==='ng' ? 'rgba(230,80,70,0.95)' : 'rgba(220,220,220,0.9)';
    ctx.fill(); ctx.strokeStyle = 'rgba(0,0,0,0.25)'; ctx.lineWidth = 1.5; ctx.stroke();
  });

  // 점수 배지
  const vals = Object.values(jSt);
  const okC = vals.filter(v => v==='ok').length;
  const tot  = vals.filter(v => v!=='na').length;
  const score = tot > 0 ? Math.round(okC/tot*100) : null;
  const badge = document.getElementById('score-badge');
  if      (score === null) { badge.textContent='감지 중...';             badge.className='score-badge bg-wait'; }
  else if (score >= 75)    { badge.textContent=`✓ ${score}% 잘하고 있어요!`; badge.className='score-badge bg-good'; }
  else if (score >= 45)    { badge.textContent=`${score}% 조금 더!`;     badge.className='score-badge bg-ok'; }
  else                     { badge.textContent=`${score}% 자세 수정 필요`; badge.className='score-badge bg-bad'; }

  // 관절 칩
  const chips = Object.entries(jSt).map(([n,s]) =>
    s==='ok' ? `<span class="chip chip-ok">✓ ${n}</span>` :
    s==='ng' ? `<span class="chip chip-ng">✗ ${n}</span>` :
               `<span class="chip chip-na">${n}</span>`
  ).join('');
  document.getElementById('joint-row').innerHTML =
    `<span class="jf-lbl">관절 체크</span>${chips || '<span class="chip chip-na">감지 대기 중</span>'}`;
}

// ── 정답 스켈레톤 그리기 ──
function drawRef(poseId) {
  const canvas = document.getElementById('ref-canvas');
  const side   = document.getElementById('ref-side');
  const W = side.offsetWidth || 240, H = side.offsetHeight || 380;
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d');
  const pose = REF[poseId], pts = pose.pts;
  ctx.clearRect(0, 0, W, H);

  // 격자
  ctx.strokeStyle = 'rgba(255,255,255,0.04)'; ctx.lineWidth = 1;
  for (let i=0; i<W; i+=30) { ctx.beginPath(); ctx.moveTo(i,0); ctx.lineTo(i,H); ctx.stroke(); }
  for (let i=0; i<H; i+=30) { ctx.beginPath(); ctx.moveTo(0,i); ctx.lineTo(W,i); ctx.stroke(); }

  // 연결선
  CONN.forEach(([a,b]) => {
    if (!pts[a]||!pts[b]) return;
    ctx.beginPath(); ctx.moveTo(pts[a][0]*W, pts[a][1]*H); ctx.lineTo(pts[b][0]*W, pts[b][1]*H);
    ctx.strokeStyle = 'rgba(144,199,149,0.7)'; ctx.lineWidth = 3.5; ctx.lineCap = 'round'; ctx.stroke();
  });

  // 관절 점
  Object.entries(pts).forEach(([n,[x,y]]) => {
    ctx.beginPath(); ctx.arc(x*W, y*H, 7, 0, Math.PI*2);
    ctx.fillStyle = 'rgba(144,199,149,0.95)'; ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.35)'; ctx.lineWidth = 2; ctx.stroke();
  });

  // 머리
  if (pts.nose) {
    ctx.beginPath(); ctx.arc(pts.nose[0]*W, pts.nose[1]*H, 14, 0, Math.PI*2);
    ctx.strokeStyle = 'rgba(144,199,149,0.7)'; ctx.lineWidth = 2.5; ctx.stroke();
    ctx.fillStyle = 'rgba(144,199,149,0.15)'; ctx.fill();
  }
}

// ── 카운트다운 ──
function showCountdown(poseName, onDone) {
  const overlay = document.getElementById('cd-overlay');
  const numEl   = document.getElementById('cd-num');
  const lblEl   = document.getElementById('cd-label');
  overlay.classList.add('show');
  let n = 3;
  numEl.textContent = n;
  lblEl.textContent = poseName + ' 준비!';
  speak(poseName + ' 자세 준비하세요. 셋, 둘, 하나.');
  beep(660, 0.1, 0.3, 'square');

  const iv = setInterval(() => {
    n--;
    if (n > 0) {
      numEl.textContent = n;
      numEl.style.animation = 'none';
      requestAnimationFrame(() => { numEl.style.animation = 'pulse 0.8s ease-out'; });
      beep(660, 0.1, 0.3, 'square');
    } else {
      numEl.textContent = '시작!';
      lblEl.textContent = '자세를 취해주세요';
      playDing();
      setTimeout(() => { overlay.classList.remove('show'); onDone(); }, 700);
      clearInterval(iv);
    }
  }, 1000);
}

// ── 세션 ──
function startSession() {
  poseIdx = 0;
  show('screen-session');
  window.speechSynthesis?.getVoices();

  const d = REF[curCourse.poses[0].id];
  document.getElementById('poi-kr').textContent   = d.name;
  document.getElementById('poi-en').textContent   = d.en;
  document.getElementById('poi-step').textContent = 'STEP 1';
  document.getElementById('pose-tip').innerHTML   = d.tip;
  setTimeout(() => drawRef(curCourse.poses[0].id), 100);

  showCountdown(d.name, () => {
    loadPose(0);
    if (hasCamera) autoIv = setInterval(() => { if (!isAnalyzing) snapAndAnalyze(); }, 28000);
  });
}

function loadPose(idx) {
  clearInterval(timerIv);
  const p = curCourse.poses[idx], d = REF[p.id];
  totalSec = p.sec; remaining = p.sec;

  document.getElementById('poi-step').textContent = 'STEP ' + (idx+1);
  document.getElementById('poi-kr').textContent   = d.name;
  document.getElementById('poi-en').textContent   = d.en;
  document.getElementById('pose-tip').innerHTML   = d.tip;
  document.getElementById('prog-txt').textContent = (idx+1) + '/' + curCourse.poses.length;
  document.getElementById('prog-fill').style.width= (idx/curCourse.poses.length*100) + '%';
  document.getElementById('fb-txt').textContent   = '자세를 취하면 분석해드려요 ✨';
  document.getElementById('joint-row').innerHTML  = '<span class="jf-lbl">관절 체크</span><span class="chip chip-na">감지 대기 중</span>';
  document.getElementById('score-badge').textContent = '감지 중...';
  document.getElementById('score-badge').className   = 'score-badge bg-wait';
  updateTimer();
  setTimeout(() => drawRef(p.id), 80);
  setTimeout(() => speak(d.tts), 300);

  let warnedFive = false;
  timerIv = setInterval(() => {
    remaining--; updateTimer();
    const tEl = document.getElementById('t-num');
    if (remaining <= 5 && remaining > 0) {
      tEl.className = 't-num danger';
      playWarning();
      if (!warnedFive) { speak('다섯, 넷, 셋, 둘, 하나.'); warnedFive = true; }
    } else if (remaining <= 10) {
      tEl.className = 't-num warning';
    } else {
      tEl.className = 't-num';
    }

    if (remaining <= 0) {
      clearInterval(timerIv);
      playDing();
      if (idx+1 < curCourse.poses.length) {
        const nextName = REF[curCourse.poses[idx+1].id].name;
        speak('잘했어요! 다음은 ' + nextName + '입니다.');
        setTimeout(() => showCountdown(nextName, () => loadPose(idx+1)), 500);
        setTimeout(() => drawRef(curCourse.poses[idx+1].id), 100);
      } else {
        setTimeout(finishSession, 600);
      }
    }
  }, 1000);
}

function updateTimer() {
  const m = Math.floor(remaining/60), s = remaining%60;
  document.getElementById('t-num').textContent = m + ':' + (s<10?'0':'') + s;
  document.getElementById('t-bar').style.width = Math.max(0, remaining/totalSec*100) + '%';
}

function stopSession() {
  clearInterval(timerIv); clearInterval(autoIv);
  if (rafId) cancelAnimationFrame(rafId);
  window.speechSynthesis?.cancel();
  if (stream) stream.getTracks().forEach(t => t.stop());
  stream = null; hasCamera = false; mpPose = null;
  goHome();
}

function finishSession() {
  clearInterval(timerIv); clearInterval(autoIv);
  if (stream) stream.getTracks().forEach(t => t.stop());
  stream = null;
  playDone();
  setTimeout(() => speak('수고했어요! 오늘 요가 완료했습니다. 몸과 마음이 한결 가벼워졌을 거예요.'), 300);
  document.getElementById('done-sub').innerHTML =
    '<strong>' + curCourse.name + '</strong> 완료! 🎉<br>오늘도 몸과 마음이 한결 가벼워졌을 거예요 🌿';
  show('screen-done');
}

function goHome() {
  show('screen-home');
  document.querySelectorAll('.course-card').forEach(c => c.classList.remove('selected'));
  selIdx = null;
  const b = document.getElementById('start-btn');
  b.disabled = true; b.textContent = '코스를 선택해주세요';
}

// ── AI 분석 ──
async function snapAndAnalyze() {
  if (isAnalyzing || !hasCamera) return;
  const v = document.getElementById('video'); if (!v.videoWidth) return;
  isAnalyzing = true;
  document.getElementById('snap-fab').disabled = true;

  const c = document.createElement('canvas');
  c.width = v.videoWidth; c.height = v.videoHeight;
  c.getContext('2d').drawImage(v, 0, 0);
  const b64 = c.toDataURL('image/jpeg', 0.72).split(',')[1];
  const pName = REF[curCourse.poses[poseIdx].id].name;

  document.getElementById('fb-txt').innerHTML =
    '분석 중 <span class="dots"><span>·</span><span>·</span><span>·</span></span>';

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514', max_tokens: 120,
        messages: [{ role:'user', content:[
          { type:'image', source:{ type:'base64', media_type:'image/jpeg', data:b64 } },
          { type:'text',  text:`"${pName}" 요가 자세: 잘된 점 1가지, 개선할 점 1가지. 2문장, 이모지 포함, 친근하게!` }
        ]}]
      })
    });
    const data = await res.json();
    const fbText = data.content?.[0]?.text || '잘하고 있어요! 호흡 유지하세요 🌿';
    document.getElementById('fb-txt').textContent = fbText;
    setTimeout(() => speak(fbText.replace(/[🌿✨💪👍🧘🌸]/g, '')), 200);
  } catch (e) {
    document.getElementById('fb-txt').textContent = '자세를 유지해요! 호흡에 집중하세요 🌿';
  }
  isAnalyzing = false;
  document.getElementById('snap-fab').disabled = false;
}

function manualAnalyze() { snapAndAnalyze(); }

// ── 초기화 ──
show('screen-home');
