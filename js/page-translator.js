(function(){
  'use strict';
  var KEY='tab-lang';
  function mark(lang){
    document.querySelectorAll('[data-lang]').forEach(function(b){
      var on=b.dataset.lang===lang;
      b.classList.toggle('active',on);
      b.setAttribute('aria-pressed',on?'true':'false');
    });
    document.documentElement.lang=lang;
    document.documentElement.dir=lang==='ar'?'rtl':'ltr';
  }
  function desired(){
    try { return localStorage.getItem(KEY)||'en'; } catch(e){ return 'en'; }
  }
  function save(lang){ try{localStorage.setItem(KEY,lang);}catch(e){} }
  function clearGoogleCookie(){
    var host=location.hostname;
    document.cookie='googtrans=;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT';
    if(host) document.cookie='googtrans=;path=/;domain=.'+host+';expires=Thu, 01 Jan 1970 00:00:00 GMT';
  }
  function setGoogleCookie(code){
    var v='/en/'+code, host=location.hostname;
    document.cookie='googtrans='+v+';path=/;max-age=31536000;SameSite=Lax';
    if(host && host.indexOf('.')>-1) document.cookie='googtrans='+v+';path=/;domain=.'+host+';max-age=31536000;SameSite=Lax';
  }
  function useWidget(lang, tries){
    var combo=document.querySelector('.goog-te-combo');
    if(combo){
      var code=lang==='zh'?'zh-CN':lang;
      if(lang==='en') code='en';
      combo.value=code;
      combo.dispatchEvent(new Event('change',{bubbles:true}));
      return true;
    }
    if((tries||0)<40) setTimeout(function(){useWidget(lang,(tries||0)+1);},150);
    return false;
  }
  function switchLang(lang){
    save(lang); mark(lang);
    if(lang==='en'){
      clearGoogleCookie();
      var combo=document.querySelector('.goog-te-combo');
      if(combo){ combo.value='en'; combo.dispatchEvent(new Event('change',{bubbles:true})); setTimeout(function(){location.reload();},250); }
      else location.reload();
      return;
    }
    var code=lang==='zh'?'zh-CN':lang;
    setGoogleCookie(code);
    if(!useWidget(lang,0)) setTimeout(function(){location.reload();},900);
  }
  document.querySelectorAll('[data-lang]').forEach(function(b){
    b.style.pointerEvents='auto';
    b.style.cursor='pointer';
    b.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();switchLang(b.dataset.lang);});
  });
  var current=desired(); mark(current);
  var holder=document.getElementById('google_translate_element');
  if(!holder){ holder=document.createElement('div'); holder.id='google_translate_element'; holder.style.cssText='position:fixed;left:-9999px;top:-9999px;width:1px;height:1px;overflow:hidden;'; document.body.appendChild(holder); }
  window.googleTranslateElementInit=function(){
    new google.translate.TranslateElement({pageLanguage:'en',includedLanguages:'en,zh-CN,ar',autoDisplay:false},'google_translate_element');
    if(current!=='en') setTimeout(function(){useWidget(current,0);},300);
  };
  var s=document.createElement('script');
  s.src='https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  s.async=true;
  s.onerror=function(){ console.warn('Google Translate could not load. Check internet/ad-blocker settings.'); };
  document.head.appendChild(s);
})();
