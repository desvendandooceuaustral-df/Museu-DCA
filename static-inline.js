
    (function(){
      var theme = "light";
      try {
        var stored = localStorage.getItem("desvendando-theme");
        if (stored === "light" || stored === "dark") theme = stored;
        else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) theme = "dark";
      } catch (_) {}
      document.documentElement.dataset.theme = theme;
    })();
  

    (function(){
      'use strict';
      const root = document.documentElement;
      const themeButton = document.getElementById('themeToggle');
      const themeMeta = document.getElementById('themeColorMeta');
      function applyTheme(theme, persist){
        const current = theme === 'dark' ? 'dark' : 'light';
        root.dataset.theme = current;
        if(themeButton){
          const next = current === 'dark' ? 'light' : 'dark';
          const label = next === 'dark' ? 'Ativar tema escuro' : 'Ativar tema claro';
          themeButton.setAttribute('aria-label', label);
          themeButton.setAttribute('title', label);
          themeButton.setAttribute('aria-pressed', String(current === 'dark'));
          const text = themeButton.querySelector('.theme-label');
          if(text) text.textContent = next === 'dark' ? 'Tema escuro' : 'Tema claro';
        }
        if(themeMeta) themeMeta.setAttribute('content', current === 'dark' ? '#0a1525' : '#f5f7fb');
        if(persist){try{localStorage.setItem('desvendando-theme', current);}catch(_){/* A troca segue funcional mesmo sem armazenamento. */}}
      }
      if(themeButton){
        applyTheme(root.dataset.theme || 'light', false);
        themeButton.addEventListener('click', function(){applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark', true);});
      }

      const pagesMenuButton = document.getElementById('pagesMenuToggle');
      const pagesMenu = document.getElementById('pagesMenu');
      const pagesMenuClose = document.getElementById('pagesMenuClose');
      const pagesMenuBackdrop = document.getElementById('pagesMenuBackdrop');
      const pagePanels = Array.from(document.querySelectorAll('[data-page-panel]'));
      const pageButtons = pagesMenu ? Array.from(pagesMenu.querySelectorAll('[data-page-target]')) : [];
      function setPagesMenu(open){
        if(!pagesMenuButton || !pagesMenu) return;
        pagesMenu.classList.toggle('is-open',open);
        if(pagesMenuBackdrop) pagesMenuBackdrop.classList.toggle('is-open',open);
        document.body.classList.toggle('side-menu-open',open);
        pagesMenuButton.setAttribute('aria-expanded',String(open));
        pagesMenuButton.setAttribute('aria-label',open?'Fechar menu de páginas':'Abrir menu de páginas');
        pagesMenu.setAttribute('aria-hidden',String(!open));
        pagesMenu.inert = !open;
        if(open && pagesMenuClose) pagesMenuClose.focus();
        else if(!open && document.activeElement && pagesMenu.contains(document.activeElement)) pagesMenuButton.focus();
      }
      function showPage(pageId, anchorId, updateAddress){
        const selected = pagePanels.find(panel => panel.dataset.pagePanel === pageId);
        if(!selected) return;
        pagePanels.forEach(panel => {
          const active = panel === selected;
          panel.hidden = !active;
          panel.classList.toggle('is-active',active);
          panel.setAttribute('aria-hidden',String(!active));
        });
        pageButtons.forEach(button => {
          const active = button.dataset.pageTarget === pageId;
          button.classList.toggle('is-active',active);
          if(active) button.setAttribute('aria-current','page'); else button.removeAttribute('aria-current');
        });
        setPagesMenu(false);
        const target = anchorId ? document.getElementById(anchorId) : null;
        if(updateAddress){
          const hash = target ? '#' + anchorId : '#apresentacao';
          try{history.pushState({page:pageId},'',hash);}catch(_){}
        }
        requestAnimationFrame(function(){
          if(target){target.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});}
          else window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
        });
      }
      if(pagesMenuButton && pagesMenu){
        pagesMenuButton.addEventListener('click',function(){setPagesMenu(pagesMenuButton.getAttribute('aria-expanded')!=='true');});
        if(pagesMenuClose) pagesMenuClose.addEventListener('click',function(){setPagesMenu(false);});
        if(pagesMenuBackdrop) pagesMenuBackdrop.addEventListener('click',function(){setPagesMenu(false);});
        pageButtons.forEach(button => button.addEventListener('click',function(){showPage(button.dataset.pageTarget,button.dataset.pageAnchor,true);}));
        document.addEventListener('keydown',function(event){if(event.key==='Escape')setPagesMenu(false);});
      }
      function activatePageFromHash(scrollToTarget){
        const id = decodeURIComponent((window.location.hash || '').slice(1));
        if(!id) return;
        const target = document.getElementById(id);
        const panel = target ? target.closest('[data-page-panel]') : null;
        if(panel){
          const alreadyActive = !panel.hidden;
          pagePanels.forEach(item => {item.hidden = item !== panel; item.classList.toggle('is-active',item === panel); item.setAttribute('aria-hidden',String(item !== panel));});
          pageButtons.forEach(button => {const active=button.dataset.pageTarget===panel.dataset.pagePanel;button.classList.toggle('is-active',active);if(active)button.setAttribute('aria-current','page');else button.removeAttribute('aria-current');});
          if(scrollToTarget && target && !alreadyActive) requestAnimationFrame(() => target.scrollIntoView({behavior:'auto',block:'start'}));
        }
      }
      if(pagesMenu){
        setPagesMenu(false);
        activatePageFromHash(false);
        window.addEventListener('popstate',function(){activatePageFromHash(true);});
        document.querySelectorAll('a[href^="#"]').forEach(link => {
          link.addEventListener('click',function(event){
            const href = link.getAttribute('href') || '';
            if(href.length < 2) return;
            const target = document.getElementById(decodeURIComponent(href.slice(1)));
            const panel = target ? target.closest('[data-page-panel]') : null;
            if(!target || !panel || !panel.hidden) return;
            event.preventDefault();
            showPage(panel.dataset.pagePanel,target.id,true);
          });
        });
      }


      const activityFilters = document.querySelectorAll('[data-activity-filter]');
      const activityCards = document.querySelectorAll('[data-activity-category]');
      activityFilters.forEach(function(button){
        button.addEventListener('click',function(){
          const category=button.dataset.activityFilter;
          activityFilters.forEach(function(item){
            const active=item===button;
            item.classList.toggle('is-active',active);
            item.setAttribute('aria-pressed',String(active));
          });
          activityCards.forEach(function(card){card.hidden=category!=='all'&&card.dataset.activityCategory!==category;});
        });
      });

      const lightbox=document.getElementById('lightbox');
      const lightboxImage=document.getElementById('lightboxImage');
      const closeButton=document.getElementById('lightboxClose');
      let previousFocus=null;
      function closeLightbox(){
        if(!lightbox || !lightboxImage) return;
        lightbox.classList.remove('is-open');
        lightbox.setAttribute('aria-hidden','true');
        document.body.classList.remove('no-scroll');
        lightboxImage.removeAttribute('src');
        lightboxImage.alt='';
        if(previousFocus&&previousFocus.focus) previousFocus.focus();
      }
      document.querySelectorAll('[data-lightbox]').forEach(function(button){
        button.addEventListener('click',function(){
          if(!lightbox || !lightboxImage) return;
          previousFocus=button;
          lightboxImage.src=button.getAttribute('data-lightbox');
          lightboxImage.alt=button.getAttribute('data-alt')||'Fotografia do acervo do Desvendando o Céu Austral';
          lightbox.setAttribute('aria-hidden','false');
          lightbox.classList.add('is-open');
          document.body.classList.add('no-scroll');
          if(closeButton) closeButton.focus();
        });
      });
      if(closeButton) closeButton.addEventListener('click',closeLightbox);
      if(lightbox) lightbox.addEventListener('click',function(event){if(event.target===lightbox)closeLightbox();});
      document.addEventListener('keydown',function(event){if(event.key==='Escape'){if(lightbox&&lightbox.classList.contains('is-open'))closeLightbox();}});

      const historyToggle=document.getElementById('historyToggle');
      const historyContent=document.getElementById('historyContent');
      if(historyToggle && historyContent){
        historyToggle.addEventListener('click',function(){
          const isOpening=historyContent.hidden;
          historyContent.hidden=!isOpening;
          historyToggle.setAttribute('aria-expanded',String(isOpening));
          historyToggle.textContent=isOpening?'Ocultar a História do Desvendando':'Conhecer a História do Desvendando';
          if(isOpening){
            const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            window.setTimeout(function(){historyContent.scrollIntoView({behavior:reduceMotion?'auto':'smooth',block:'start'});},0);
          }
        });
      }

      // Envio sem redirecionamento: mantém o visitante no formulário e envia uma cópia integral ao e-mail informado.
      const visitForm=document.getElementById('visitForm');
      const formFeedback=document.getElementById('formFeedback');
      const formFallback=document.getElementById('formFallback');
      if(visitForm && formFeedback){
        visitForm.addEventListener('submit',async function(event){
          event.preventDefault();
          if(!visitForm.reportValidity()) return;
          const submitButton=visitForm.querySelector('button[type="submit"]');
          const originalLabel=submitButton ? submitButton.textContent : '';
          const emailField=visitForm.querySelector('[name="email"]');
          const visitorEmail=emailField ? String(emailField.value).trim() : '';
          const copyField=visitForm.querySelector('[name="_cc"]');
          const replyField=visitForm.querySelector('[name="_replyto"]');
          const urlField=visitForm.querySelector('[name="_url"]');
          if(copyField) copyField.value=visitorEmail;
          if(replyField) replyField.value=visitorEmail;
          if(urlField) urlField.value=window.location.href.split('#')[0];
          const data=new FormData(visitForm);
          const payload={};
          data.forEach(function(value,key){
            if(Object.prototype.hasOwnProperty.call(payload,key)){
              if(Array.isArray(payload[key])) payload[key].push(value);
              else payload[key]=[payload[key],value];
            } else payload[key]=value;
          });
          formFeedback.className='form-feedback';
          formFeedback.textContent='Enviando sua solicitação…';
          formFeedback.classList.add('is-visible');
          if(formFallback) formFallback.hidden=true;
          if(submitButton){submitButton.disabled=true;submitButton.textContent='Enviando…';}
          try{
            const response=await fetch(visitForm.action,{
              method:'POST',
              headers:{'Content-Type':'application/json','Accept':'application/json'},
              body:JSON.stringify(payload)
            });
            const result=await response.json().catch(function(){return null;});
            if(!response.ok || !result || !result.success){
              const message=result && (result.message || result.errors && result.errors.join(', '));
              throw new Error(message || 'O serviço não confirmou o recebimento.');
            }
            formFeedback.className='form-feedback is-visible';
            formFeedback.textContent='O serviço de formulários aceitou sua solicitação. A cópia integral será encaminhada ao e-mail informado. Isso ainda não confirma a data da visita. Na primeira ativação, a equipe do Museu precisa confirmar o endereço institucional no e-mail enviado pelo FormSubmit; enquanto essa confirmação não for feita, a entrega final pode ficar pendente.';
            formFeedback.focus();
          }catch(error){
            formFeedback.className='form-feedback is-visible is-error';
            formFeedback.textContent='Não foi possível confirmar o envio pelo formulário. Seus dados continuam preenchidos. Você pode tentar novamente ou enviar a solicitação diretamente pelo e-mail institucional.';
            if(formFallback){
              const fields=Array.from(new FormData(visitForm).entries()).filter(function(entry){return !String(entry[0]).startsWith('_');});
              const body=fields.map(function(entry){return entry[0]+': '+entry[1];}).join('\n');
              formFallback.href='mailto:desvendandooceuaustral.df@ufrpe.br?subject='+encodeURIComponent('Solicitação de visita ao Museu')+'&body='+encodeURIComponent(body);
              formFallback.hidden=false;
            }
            formFeedback.focus();
            console.error('Erro no envio do formulário:',error);
          }finally{
            if(submitButton){submitButton.disabled=false;submitButton.textContent=originalLabel;}
          }
        });
      }

      const backTop=document.querySelector('.back-top');
      function updateBackTop(){if(backTop)backTop.classList.toggle('is-visible',window.scrollY>500);}
      window.addEventListener('scroll',updateBackTop,{passive:true});
      updateBackTop();

      if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window){
        const revealItems=document.querySelectorAll('.section-heading,.value-card,.timeline-item,.activity-card,.oasi-stat,.partner-card,.community-box,.gallery-item,.source-card,.contact-card,.social-panel');
        if(revealItems.length){
          root.classList.add('motion-ready');
          revealItems.forEach(function(item){item.classList.add('reveal');});
          const observer=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}});},{threshold:.12,rootMargin:'0px 0px -20px 0px'});
          revealItems.forEach(function(item){observer.observe(item);});
        }
      }
    })();
  