(function(){var d=document.documentElement,$=function(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s))};
function G(k){try{return localStorage.getItem(k)}catch(e){return null}}function P(k,v){try{localStorage.setItem(k,v)}catch(e){}}
var EN={};$("[data-i18n]").forEach(function(e){EN[e.getAttribute("data-i18n")]=e.innerHTML});var IDX={en:0,hi:1,hl:2},TT=document.title;
function setLang(l){if(!(l in IDX))l="en";var i=IDX[l];d.lang={en:"en",hi:"hi",hl:"hi-Latn"}[l];
$("[data-i18n]").forEach(function(e){var k=e.getAttribute("data-i18n");e.innerHTML=(i&&window.I18N[k])?window.I18N[k][i]:EN[k]});
$(".seg button").forEach(function(b){b.classList.toggle("on",b.dataset.l==l)});P("bl",l)}
function cur(){return d.getAttribute("data-theme")||(matchMedia("(prefers-color-scheme: light)").matches?"light":"dark")}
function setTheme(t){d.setAttribute("data-theme",t);P("bt",t);var b=document.getElementById("th");if(b)b.textContent=t=="dark"?"☀️":"🌙"}
$(".seg button").forEach(function(b){b.addEventListener("click",function(){setLang(b.dataset.l)})});
document.getElementById("th").addEventListener("click",function(){setTheme(cur()=="dark"?"light":"dark")});
document.getElementById("bg").addEventListener("click",function(){document.getElementById("mn").classList.toggle("o")});
setTheme(G("bt")||cur());setLang(G("bl")||"en");
var nv=document.querySelector("header.nav"),br=document.getElementById("bar");
function sc(){var y=scrollY,h=d.scrollHeight-innerHeight;nv.classList.toggle("s",y>10);br.style.width=(h>0?y/h*100:0)+"%"}addEventListener("scroll",sc,{passive:true});sc();
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");if(e.target.dataset.c)cnt(e.target);var t=e.target;setTimeout(function(){t.style.setProperty("--d","0s")},1200);io.unobserve(t)}})},{threshold:.15});
$(".rv,[data-c],.bar").forEach(function(e){io.observe(e)});
function cnt(e){var n=+e.dataset.c,s=e.dataset.p||"",t0=performance.now();(function f(t){var p=Math.min(1,(t-t0)/1400),v=Math.round(n*(1-Math.pow(1-p,3)));e.textContent=s+v+(e.dataset.s||"");if(p<1)requestAnimationFrame(f)})(t0)}
$(".card").forEach(function(c){c.addEventListener("mousemove",function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform="perspective(700px) rotateY("+x*8+"deg) rotateX("+-y*8+"deg) translateY(-4px)"});c.addEventListener("mouseleave",function(){c.style.transform=""})});
var s0=402;setInterval(function(){s0++;$("[data-timer]").forEach(function(e){e.textContent=("0"+(s0/60|0)).slice(-2)+":"+("0"+s0%60).slice(-2)})},1000);
var stp=$(".stp"),ps=$(".ps"),dt=$(".dots button");
function act(n){ps.forEach(function(p,i){p.classList.toggle("on",i==n)});stp.forEach(function(s,i){s.classList.toggle("act",i==n)});dt.forEach(function(b,i){b.classList.toggle("on",i==n)})}
if(stp.length){var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)act(stp.indexOf(e.target))})},{rootMargin:"-42% 0px -50% 0px"});stp.forEach(function(s){so.observe(s)});dt.forEach(function(b,i){b.addEventListener("click",function(){stp[i].scrollIntoView({behavior:"smooth",block:"center"})})});act(0)}
})();
