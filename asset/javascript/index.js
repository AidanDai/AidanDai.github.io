window.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll("#markdown-toc a"),t=document.querySelector(".go-top"),o=document.querySelector(".go-bottom");e.forEach(function(e){e.setAttribute("target","_self")}),t.addEventListener("click",function(){document.documentElement.scrollTop=0}),o.addEventListener("click",function(){document.documentElement.scrollTop=document.documentElement.scrollHeight})});