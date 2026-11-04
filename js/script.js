// To add the date of passing, put it here, e.g. "Born 9 January 1939 · Called home 1 January 2026"
var DATES_TEXT="";
if(DATES_TEXT)document.getElementById("dates").textContent=DATES_TEXT;
var figs=[].slice.call(document.querySelectorAll("#grid figure")),lb=document.getElementById("lb"),im=lb.querySelector("img"),cp=lb.querySelector("p"),cur=0;
function show(i){cur=(i+figs.length)%figs.length;var f=figs[cur].querySelector("img");im.src=f.src;im.alt=f.alt;cp.textContent=figs[cur].querySelector("figcaption").textContent;lb.classList.add("on")}
figs.forEach(function(f,i){f.addEventListener("click",function(){show(i)})});
lb.querySelector(".x").onclick=function(){lb.classList.remove("on")};
lb.querySelector(".pv").onclick=function(e){e.stopPropagation();show(cur-1)};
lb.querySelector(".nx").onclick=function(e){e.stopPropagation();show(cur+1)};
lb.addEventListener("click",function(e){if(e.target===lb)lb.classList.remove("on")});
document.addEventListener("keydown",function(e){if(!lb.classList.contains("on"))return;if(e.key==="Escape")lb.classList.remove("on");if(e.key==="ArrowLeft")show(cur-1);if(e.key==="ArrowRight")show(cur+1)});

var tt=document.getElementById("tt"),root=document.documentElement;
function label(){tt.textContent=root.getAttribute("data-theme")==="dark"?"\u2600 Light":"\u263E Navy"}
tt.onclick=function(){var n=root.getAttribute("data-theme")==="dark"?"light":"dark";root.setAttribute("data-theme",n);try{localStorage.setItem("theme",n)}catch(e){}label()};
label();
