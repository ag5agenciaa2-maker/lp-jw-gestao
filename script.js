/* JW Gestão de Condomínios e Facilities — script.js
   Vanilla ES6 · sem dependências */

(() => {
  'use strict';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  /* --- navbar: condensa após 80px --- */
  const nav = $('#nav');
  const onScroll = () => nav.classList.toggle('is-stuck', window.scrollY > 80);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* --- menu mobile --- */
  const toggle = $('#navToggle'), links = $('#navLinks');
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? '×' : '≡';
  });
  $$('#navLinks a').forEach(a => a.addEventListener('click', () => {
    links.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = '≡';
  }));

  /* --- reveals no scroll (IntersectionObserver + stagger por grupo) --- */
  const items = $$('.reveal');
  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('is-in'));
  } else {
    const counters = new Map();
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const group = el.parentElement;
        const n = counters.get(group) || 0;
        counters.set(group, n + 1);
        const step = el.classList.contains('reel') ? 90 : el.classList.contains('block') ? 110 : 70;
        setTimeout(() => el.classList.add('is-in'), Math.min(n, 8) * step);
        io.unobserve(el);
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });
    items.forEach(el => io.observe(el));
  }

  /* --- FAQ: um item aberto por vez --- */
  const faq = $$('#faqList details');
  faq.forEach(d => d.addEventListener('toggle', () => {
    if (d.open) faq.forEach(o => { if (o !== d) o.open = false; });
  }));

  /* --- parallax leve das aspas --- */
  const quotes = $$('.statement__quote');
  const statement = $('#declaracao');
  if (quotes.length && statement && !reduce && 'IntersectionObserver' in window) {
    let visible = false, raf = null;
    const tick = () => {
      raf = null;
      const r = statement.getBoundingClientRect();
      const p = Math.max(0, Math.min(1, (window.innerHeight - r.top) / (window.innerHeight + r.height)));
      quotes.forEach(q => { q.style.transform = `translateY(${(-40 * p).toFixed(1)}px)`; });
      if (visible) raf = requestAnimationFrame(tick);
    };
    new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible && !raf) raf = requestAnimationFrame(tick);
    }, { threshold: 0 }).observe(statement);
  }

  /* --- vídeos: pausa os demais ao dar play --- */
  const videos = $$('video');
  videos.forEach(v => v.addEventListener('play', () => {
    videos.forEach(o => { if (o !== v) o.pause(); });
  }));

  /* --- formulário: validação + serialização para WhatsApp --- */
  const form = $('#form');
  const status = $('#formStatus');
  const WHATSAPP = '5521970590248';
  const TEL_RE = /^\(?\d{2}\)?[\s.-]?9?\d{4}[\s.-]?\d{4}$/;

  const setError = (field, msg) => {
    const box = field.closest('label').querySelector('[data-error]');
    box.textContent = msg || '';
    box.classList.toggle('is-visible', Boolean(msg));
    field.classList.toggle('is-invalid', Boolean(msg));
    return !msg;
  };

  const tel = form.elements.telefone;
  tel.addEventListener('input', () => {
    const d = tel.value.replace(/\D/g, '').slice(0, 11);
    tel.value = d.length > 10 ? `(${d.slice(0,2)}) ${d.slice(2,7)}-${d.slice(7)}`
              : d.length > 6  ? `(${d.slice(0,2)}) ${d.slice(2,6)}-${d.slice(6)}`
              : d.length > 2  ? `(${d.slice(0,2)}) ${d.slice(2)}`
              : d;
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const f = form.elements;
    const checks = [
      setError(f.nome, f.nome.value.trim().length < 2 ? 'Informe seu nome completo.' : ''),
      setError(f.condominio, f.condominio.value.trim().length < 2 ? 'Informe o nome do condomínio.' : ''),
      setError(f.telefone, TEL_RE.test(f.telefone.value.trim()) ? '' : 'Telefone inválido — ex.: (21) 97059-0248.')
    ];
    if (checks.includes(false)) {
      status.textContent = 'Revise os campos destacados.';
      status.classList.add('is-error');
      return;
    }
    status.classList.remove('is-error');
    status.textContent = 'Abrindo o WhatsApp…';
    const msg = [
      'Solicitação de proposta — site JW Gestão',
      `Nome: ${f.nome.value.trim()}`,
      `Condomínio: ${f.condominio.value.trim()}`,
      `Unidades: ${f.unidades.value || 'não informado'}`,
      `Telefone: ${f.telefone.value.trim()}`,
      `Mensagem: ${f.mensagem.value.trim() || '—'}`
    ].join('\n');
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
    form.reset();
  });
})();
