/* Same-page navigation with a short, interruptible scroll transition. */
(()=>{
 'use strict';
 const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
 const toolbar=document.querySelector('.toolbar');
 const navLinks=[...document.querySelectorAll('.toolbar nav a[href^="#"]')];
 const pages=[...document.querySelectorAll('main>.page')];
 const pricingPages=new Set(['pricing','rates','small-placements','value-packs','rate-card']);
 let animation=0;
 let navigationFrame=0;

 const stop=()=>{
   if(animation)cancelAnimationFrame(animation);
   animation=0;
 };
 const sectionLink=id=>{
   if(pricingPages.has(id))return '#pricing';
   if(['analytics','benchmarks','response-details'].includes(id))return '#benchmarks';
   if(['audience','growth-proof'].includes(id))return '#audience';
   if(['collaborations','about'].includes(id))return '#collaborations';
   return '#'+id;
 };
 const updateNavigation=()=>{
   navigationFrame=0;
   const probe=toolbar.getBoundingClientRect().height+95;
   let current=pages[0];
   for(const page of pages){
     if(page.getBoundingClientRect().top<=probe)current=page;
     else break;
   }
   const active=sectionLink(current.id);
   navLinks.forEach(link=>{
     if(link.getAttribute('href')===active)link.setAttribute('aria-current','location');
     else link.removeAttribute('aria-current');
   });
 };
 const queueNavigationUpdate=()=>{
   if(!navigationFrame)navigationFrame=requestAnimationFrame(updateNavigation);
 };
 const focusTarget=target=>{
   if(!target.hasAttribute('tabindex'))target.setAttribute('tabindex','-1');
   target.focus({preventScroll:true});
 };
 const moveTo=(target,durationMultiplier=1)=>{
   stop();
   const start=window.scrollY;
   const offset=toolbar.getBoundingClientRect().height+28;
   const maxScroll=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);
   const end=Math.min(maxScroll,Math.max(0,start+target.getBoundingClientRect().top-offset));
   const distance=end-start;
   if(reducedMotion.matches||Math.abs(distance)<2){
     window.scrollTo(0,end);
     focusTarget(target);
     updateNavigation();
     return;
   }
   const duration=Math.min(1250,Math.max(650,650+Math.sqrt(Math.abs(distance))*5))*durationMultiplier;
   let started;
   const tick=time=>{
     started??=time;
     const progress=Math.min(1,(time-started)/duration);
     const eased=progress<.5?4*progress**3:1-(-2*progress+2)**3/2;
     window.scrollTo(0,start+distance*eased);
     if(progress<1)animation=requestAnimationFrame(tick);
     else{
       animation=0;
       focusTarget(target);
       updateNavigation();
     }
   };
   animation=requestAnimationFrame(tick);
 };

 document.addEventListener('click',event=>{
   if(event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
   const link=event.target.closest('a[href^="#"]');
   if(!link||link.target==='_blank'||link.hasAttribute('download'))return;
   const hash=link.getAttribute('href');
   if(hash.length<2)return;
   let id;
   try{id=decodeURIComponent(hash.slice(1));}catch{return;}
   const target=document.getElementById(id);
   if(!target)return;
   event.preventDefault();
   if(location.hash!==hash)history.pushState(null,'',hash);
   moveTo(target,link.hasAttribute('data-slow-pricing')?4:1);
 });
 window.addEventListener('scroll',queueNavigationUpdate,{passive:true});
 window.addEventListener('resize',queueNavigationUpdate,{passive:true});
 window.addEventListener('wheel',stop,{passive:true});
 window.addEventListener('touchstart',stop,{passive:true});
 window.addEventListener('pointerdown',stop,{passive:true});
 window.addEventListener('keydown',event=>{
   if(['ArrowUp','ArrowDown','PageUp','PageDown','Home','End',' '].includes(event.key))stop();
 });
 window.addEventListener('hashchange',()=>{stop();queueNavigationUpdate();});
 window.addEventListener('beforeprint',stop);
 window.addEventListener('languagechange',queueNavigationUpdate);
 reducedMotion.addEventListener('change',()=>{stop();queueNavigationUpdate();});
 queueNavigationUpdate();
})();
