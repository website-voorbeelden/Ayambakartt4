/* Reveal marker strokes once as they enter the viewport. */
(()=>{
 'use strict';
 const marks=[...document.querySelectorAll('.text-highlight,.hero-metrics>div:first-child strong,.hero-metrics .metric-period b')];
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
 if(reduced.matches||!('IntersectionObserver' in window))return;
 const root=document.documentElement;
 root.classList.add('js-highlight-motion');
 const observer=new IntersectionObserver(entries=>{
   for(const entry of entries){
     if(!entry.isIntersecting)continue;
     entry.target.classList.add('highlight-painted');
     observer.unobserve(entry.target);
   }
 },{threshold:0.35,rootMargin:'0px 0px -35px 0px'});
 marks.forEach(mark=>observer.observe(mark));
 const showAll=()=>{
   observer.disconnect();
   root.classList.remove('js-highlight-motion');
 };
 window.addEventListener('beforeprint',showAll);
 reduced.addEventListener('change',event=>{if(event.matches)showAll();});
})();
