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

(function(){
  var cards=[].slice.call(document.querySelectorAll(".tribute"));
  function check(){
    cards.forEach(function(c){
      if(c.classList.contains("open"))return;
      c.classList.add("clamp");
      var b=c.querySelector(".body"),over=b.scrollHeight>b.clientHeight+2;
      c.classList.toggle("clamp",over);
      c.querySelector(".more").hidden=!over;
    });
  }
  cards.forEach(function(c){
    var by=c.querySelector(".by"),b=document.createElement("div"),btn=document.createElement("button");
    b.className="body";
    while(c.firstChild&&c.firstChild!==by)b.appendChild(c.firstChild);
    c.insertBefore(b,by);
    btn.type="button";btn.className="more";btn.textContent="Read more";
    c.insertBefore(btn,by);
    btn.onclick=function(){
      var o=c.classList.toggle("open");
      btn.textContent=o?"Show less":"Read more";
      if(o)c.classList.remove("clamp");else{check();c.scrollIntoView({block:"nearest"})}
    };
  });
  window.addEventListener("load",check);
  window.addEventListener("resize",check);
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(check);
})();
