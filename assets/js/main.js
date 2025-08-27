
(function(){
  const frBtn = document.querySelector('[data-lang-btn="fr"]');
  const jpBtn = document.querySelector('[data-lang-btn="jp"]');
  const setLang = (lang) => {
    document.querySelectorAll('[data-fr]').forEach(n=> n.classList.toggle('hide', lang!=='fr'));
    document.querySelectorAll('[data-jp]').forEach(n=> n.classList.toggle('hide', lang!=='jp'));
    if(frBtn && jpBtn){
      frBtn.classList.toggle('active', lang==='fr');
      jpBtn.classList.toggle('active', lang==='jp');
    }
    localStorage.setItem('lang', lang);
  };
  const saved = localStorage.getItem('lang') || 'fr';
  setLang(saved);
  frBtn && frBtn.addEventListener('click', ()=> setLang('fr'));
  jpBtn && jpBtn.addEventListener('click', ()=> setLang('jp'));
})();
