"use strict";function savePostAsImg(){var e=$("#dream-save-post-as-img"),t=e.prop("scrollWidth"),a=e.prop("scrollHeight"),o=document.createElement("canvas"),n=t,r=a;return o.width=2*n,o.height=2*r,o.getContext("2d").scale(2,2),html2canvas(document.querySelector("#dream-save-post-as-img"),{canvas:o,width:n,height:r,scale:2}).then(function(e){var t=e.getContext("2d");t.mozImageSmoothingEnabled=!1,t.webkitImageSmoothingEnabled=!1,t.msImageSmoothingEnabled=!1,t.imageSmoothingEnabled=!1;var a=e.toDataURL("image/png"),o=document.createElement("a");o.href=URL.createObjectURL(dataURLtoBlob(a)),o.download="screenshot.png",o.click()}),!1}function dataURLtoBlob(e){for(var t=e.split(","),a=t[0].match(/:(.*?);/)[1],o=atob(t[1]),n=o.length,r=new Uint8Array(n);n--;)r[n]=o.charCodeAt(n);return new Blob([r],{type:a})}