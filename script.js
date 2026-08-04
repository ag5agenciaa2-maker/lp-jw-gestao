/* JW Gestão de Condomínios e Facilities — script.js
   Vanilla ES6 · sem dependências */

(() => {
  'use strict';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));


  /* --- hero: vídeo do fundador, som e expandir --- */
  const portraitVideo = $('.portrait__video');
  const portraitMute = $('#portraitMute');
  const portraitExpand = $('#portraitExpand');
  if (portraitVideo && portraitMute) {
    const iconMuted = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="16" height="16" aria-hidden="true"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>';
    const iconUnmuted = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="16" height="16" aria-hidden="true"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>';
    portraitMute.addEventListener('click', () => {
      portraitVideo.muted = !portraitVideo.muted;
      const isMuted = portraitVideo.muted;
      portraitMute.innerHTML = isMuted ? iconMuted : iconUnmuted;
      portraitMute.setAttribute('aria-pressed', String(!isMuted));
      portraitMute.setAttribute('aria-label', isMuted ? 'Ativar som' : 'Silenciar');
    });
  }
  /* --- hero: modal ultra premium do vídeo --- */
  const videoModal = $('#videoModal');
  const videoModalVideo = $('#videoModalVideo');
  const videoModalOverlay = $('#videoModalOverlay');
  const videoModalClose = $('#videoModalClose');

  if (portraitVideo && portraitExpand && videoModal && videoModalVideo) {
    const openVideoModal = () => {
      videoModalVideo.currentTime = portraitVideo.currentTime;
      videoModalVideo.muted = false;
      videoModal.classList.add('is-open');
      videoModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      videoModalVideo.play();
    };
    const closeVideoModal = () => {
      videoModal.classList.remove('is-open');
      videoModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      videoModalVideo.pause();
    };

    portraitExpand.addEventListener('click', openVideoModal);
    videoModalOverlay.addEventListener('click', closeVideoModal);
    videoModalClose.addEventListener('click', closeVideoModal);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && videoModal.classList.contains('is-open')) closeVideoModal();
    });
  }

  /* --- menu mobile: drawer premium --- */
  const drawerToggle = $('#drawerToggle'), drawer = $('#drawer'),
        drawerOverlay = $('#drawerOverlay'), drawerClose = $('#drawerClose');

  const openDrawer = () => {
    drawer.classList.add('is-open');
    drawerOverlay.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    drawerToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };
  const closeDrawer = () => {
    drawer.classList.remove('is-open');
    drawerOverlay.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    drawerToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  drawerToggle.addEventListener('click', openDrawer);
  drawerClose.addEventListener('click', closeDrawer);
  drawerOverlay.addEventListener('click', closeDrawer);
  $$('.drawer__links a, .drawer__cta').forEach(a => a.addEventListener('click', closeDrawer));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) closeDrawer();
  });

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

  /* --- FAQ: abre resposta em modal --- */
  const faqModal = $('#faqModal');
  if (faqModal) {
    const faqModalQuestion = $('#faqModalQuestion');
    const faqModalAnswer = $('#faqModalAnswer');
    const faqModalClose = $('#faqModalClose');
    const faqModalOverlay = $('#faqModalOverlay');

    const openFaqModal = (question, answer) => {
      faqModalQuestion.textContent = question;
      faqModalAnswer.textContent = answer;
      faqModal.classList.add('is-open');
      faqModal.removeAttribute('aria-hidden');
      document.body.style.overflow = 'hidden';
      faqModalClose.focus();
    };
    const closeFaqModal = () => {
      faqModal.classList.remove('is-open');
      faqModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };

    $$('#faqList .faq__item').forEach(btn => btn.addEventListener('click', () => {
      openFaqModal(btn.dataset.question, btn.dataset.answer);
    }));
    faqModalClose.addEventListener('click', closeFaqModal);
    faqModalOverlay.addEventListener('click', closeFaqModal);
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && faqModal.classList.contains('is-open')) closeFaqModal();
    });
  }

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

  /* --- gestão na prática: play custom nos vídeos do carrossel --- */
  $$('.reel__box').forEach(box => {
    const v = $('video', box);
    if (!v) return;
    box.addEventListener('click', () => {
      const reel = box.closest('.reel');
      if (reel && !reel.classList.contains('is-active')) return;
      if (v.paused) {
        v.controls = true;
        v.muted = false;
        v.play();
      } else {
        v.pause();
      }
    });
    v.addEventListener('pause', () => { v.controls = false; });
  });

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
    let msg = `Olá, me chamo ${f.nome.value.trim()}, vim através do site e gostaria de uma informação.\n`;
    msg += `\n- Telefone: ${f.telefone.value.trim()}`;
    msg += `\n- Condomínio: ${f.condominio.value.trim()}`;
    msg += `\n- Nº de unidades: ${f.unidades.value || 'não informado'}`;
    if (f.mensagem.value.trim()) msg += `\n- Mensagem: ${f.mensagem.value.trim()}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
    form.reset();
  });

  /* --- operação: spotlight fluido nos cards --- */
  const operacaoCards = $$('.operacao__card');
  if (operacaoCards.length && !reduce) {
    operacaoCards.forEach(card => {
      let tx = 0, ty = 0, mx = 0.5, my = 0.5, raf = null;
      const lerp = (a, b, n) => a + (b - a) * n;

      const tick = () => {
        raf = null;
        tx = lerp(tx, mx, 0.1);
        ty = lerp(ty, my, 0.1);
        card.style.setProperty('--x', `${tx * 100}%`);
        card.style.setProperty('--y', `${ty * 100}%`);
        if (card.matches(':hover, :focus')) raf = requestAnimationFrame(tick);
      };

      card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect();
        mx = (e.clientX - r.left) / r.width;
        my = (e.clientY - r.top) / r.height;
        if (!raf) raf = requestAnimationFrame(tick);
      });

      card.addEventListener('mouseleave', () => { mx = 0.5; my = 0.5; if (!raf) raf = requestAnimationFrame(tick); });
      card.addEventListener('focus', () => { mx = 0.5; my = 0.5; if (!raf) raf = requestAnimationFrame(tick); });
    });
  }

  /* --- carrossel Gestão na prática: coverflow (prev/ativo/next) + painel sincronizado --- */
  const reelsPratica = $('#reelsPratica');
  if (reelsPratica) {
    const currentEl = $('.pratica__counter-current');
    const totalEl = $('.pratica__counter-total');
    const nowPanel = $('.pratica__now');
    const nowTag = $('[data-now="tag"]');
    const nowTitle = $('[data-now="title"]');
    const items = $$('.reel', reelsPratica);
    const total = items.length;
    if (totalEl) totalEl.textContent = String(total).padStart(2, '0');

    let activeIndex = 1;

    const applyClasses = (index) => {
      const prevI = ((index - 2 + total) % total);
      const activeI = index - 1;
      const nextI = index % total;
      items.forEach((item, i) => {
        item.classList.remove('is-active', 'is-prev', 'is-next');
        if (i === activeI) item.classList.add('is-active');
        else if (i === prevI) item.classList.add('is-prev');
        else if (i === nextI) item.classList.add('is-next');
        else {
          const v = $('video', item);
          if (v && !v.paused) v.pause();
        }
      });
    };

    const goToIndex = (index) => {
      index = ((index - 1 + total) % total) + 1;
      if (index === activeIndex) return;
      activeIndex = index;
      applyClasses(index);

      const item = items[index - 1];
      if (currentEl) currentEl.textContent = String(index).padStart(2, '0');
      if (nowPanel) {
        nowPanel.classList.add('is-switching');
        setTimeout(() => {
          if (nowTag) nowTag.textContent = item.dataset.tag || '';
          if (nowTitle) nowTitle.textContent = item.dataset.title || '';
          nowPanel.classList.remove('is-switching');
        }, 180);
      }
    };

    items.forEach((item, i) => {
      item.addEventListener('click', () => {
        if (item.classList.contains('is-prev')) goToIndex(activeIndex - 1);
        else if (item.classList.contains('is-next')) goToIndex(activeIndex + 1);
      });
    });

    applyClasses(1);
  }
})();

/* ──────────────────────────────────────────────
   WHATSAPP PREMIUM — Balão flutuante (AG5 V4)

   Timeline:
     • t=0s  → usuário chega na 3ª seção (#servicos) → botão verde aparece imediatamente
     • t=25s → balão sobe ("digitando..." por 2.5s → mensagem real)
     • t=40s → balão some automaticamente (visível por 15s)
     • t=45s → badge vermelho "1" aparece (5s depois de sumir) — só em nicho tranquilo

   Se o usuário fechar manualmente: badge aparece 5s depois (tranquilo) ou nada (rigoroso).
   Se o usuário clicar no botão WhatsApp: tudo é limpo (sem badge), abre wa.me.
─────────────────────────────────────────────── */
(function initWaPremium() {
  // ─── CONFIGURAÇÃO POR PROJETO ───
  const MODO_COMPLIANCE = true; // JW Gestão: tom editorial/patrimonial — sem badge, sóbrio

  const bubble        = document.getElementById('wa-message-bubble');
  const typing        = document.getElementById('wa-typing');
  const realMessage   = document.getElementById('wa-real-message');
  const badge         = document.getElementById('wa-notification');
  const closeBtn      = document.getElementById('wa-close-btn');
  const mainBtn       = document.getElementById('wa-main-btn');
  const targetSection = document.getElementById('servicos');

  if (!bubble || !typing || !realMessage || !closeBtn || !mainBtn || !targetSection) return;

  const DELAY_BALAO            = 25000; // 25s após entrar na seção
  const DURATION_TYPING        = 2500;  // 2.5s de "digitando..."
  const DURATION_BALAO_VISIVEL = 15000; // 15s exibido depois de aparecer
  const DELAY_BADGE_APOS_SUMIR = 5000;  // 5s após sumir → badge

  let triggered = false;
  let autoHideTimer = null;
  let badgeTimer = null;
  let userClosed = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !triggered) {
        triggered = true;

        // Botão flutuante aparece imediatamente
        mainBtn.classList.add('visible');

        // t=25s → balão sobe
        setTimeout(() => {
          if (userClosed) return;
          bubble.classList.add('show');

          // 2.5s de "digitando..." → mensagem real (via classes utilitárias, sem inline style)
          setTimeout(() => {
            if (userClosed) return;
            typing.classList.add('is-hidden');
            realMessage.classList.add('is-visible');
            requestAnimationFrame(() => realMessage.classList.add('is-in'));
          }, DURATION_TYPING);

          // t=40s → balão some automaticamente
          autoHideTimer = setTimeout(() => {
            if (userClosed) return;
            bubble.classList.remove('show');

            // t=45s → badge "1" aparece (só se NÃO for Compliance)
            if (!MODO_COMPLIANCE && badge) {
              badgeTimer = setTimeout(() => {
                if (userClosed) return;
                badge.classList.add('show');
              }, DELAY_BADGE_APOS_SUMIR);
            }
          }, DURATION_BALAO_VISIVEL);
        }, DELAY_BALAO);
      }
    });
  }, { threshold: 0.1 });

  observer.observe(targetSection);

  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    userClosed = true;
    bubble.classList.remove('show');
    if (autoHideTimer) clearTimeout(autoHideTimer);
    if (badgeTimer) clearTimeout(badgeTimer);
    // Badge pós-close: só em nicho tranquilo
    if (!MODO_COMPLIANCE && badge) {
      setTimeout(() => { badge.classList.add('show'); }, DELAY_BADGE_APOS_SUMIR);
    }
  });

  mainBtn.addEventListener('click', () => {
    bubble.classList.remove('show');
    if (badge) badge.classList.remove('show');
    if (autoHideTimer) clearTimeout(autoHideTimer);
    if (badgeTimer) clearTimeout(badgeTimer);
  });

})();
