var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequirebd0d;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){o[e]=t},e.parcelRequirebd0d=n);var r=n("dYOZO");(()=>{let e=0,t=0,o=0;const n=(n,r)=>{const c=document.querySelector(".result"),l=document.querySelector(".p-count"),s=document.querySelector(".choices"),i=document.querySelector(".player-choice"),u=document.querySelector(".comp-choice");(n=n.toLowerCase())===(r=r.toLowerCase())?c.textContent="Tie":"rock"==n?"paper"==r?(c.textContent="Computer Won",t=1,e=0,l.textContent=e):(c.textContent="Player Won",e++,o=e,l.textContent=e):"scissors"==n?"rock"==r?(c.textContent="Computer Won",t=1,o=e,e=0,l.textContent=e):(c.textContent="Player Won",e++,o=e,l.textContent=e):"paper"==n&&("scissors"==r?(c.textContent="Computer Won",t=1,o=e,e=0,l.textContent=e):(c.textContent="Player Won",e++,o=e,l.textContent=e)),s.classList.add("active"),i.innerHTML=n,u.innerHTML=r},c=o=>{const n=document.querySelector(".move"),r=document.querySelector(".result");document.querySelector(".reload");o.forEach((e=>{e.style.display="none"})),n.innerText="Game Over!!",e>t?(r.style.fontSize="2rem",r.style.color="#308D46"):e<t?(r.style.fontSize="2rem",r.innerText="Game is Over",r.style.color="red"):(r.style.fontSize="2rem",r.innerText="Tie",r.style.color="grey")};(()=>{const e=[document.querySelector(".rock"),document.querySelector(".paper"),document.querySelector(".scissor")],l=["rock","paper","scissors"];e.forEach((s=>{s.addEventListener("click",(function(){const s=Math.floor(3*Math.random()),i=l[s];n(this.innerText,i),1===t&&(c(e),(0,r.updateHighscore)(r.userName,o).then((()=>{(0,r.displayHighscore)(),o=0,location.reload()})))}))}))})()})();
//# sourceMappingURL=index.e99134b9.js.map
