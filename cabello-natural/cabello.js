(function(){
  var root = document.documentElement;
  root.classList.add('js');

  // Imágenes con fundido suave al cargar
  var imgs = document.querySelectorAll('img');
  for (var i = 0; i < imgs.length; i++) {
    (function(img){
      img.classList.add('lz');
      if (img.complete && img.naturalWidth > 0) { img.classList.add('loaded'); }
      else {
        img.addEventListener('load', function(){ img.classList.add('loaded'); });
        img.addEventListener('error', function(){ img.classList.add('loaded'); });
      }
    })(imgs[i]);
  }

  // Secciones que se revelan al entrar en pantalla
  var secs = document.querySelectorAll('section');
  if ('IntersectionObserver' in window) {
    for (var j = 0; j < secs.length; j++) secs[j].classList.add('reveal');
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });
    for (var k = 0; k < secs.length; k++) io.observe(secs[k]);
  }

  // Selector de tono: las tarjetas de colores y los circulitos de compra
  // marcan el mismo tono y actualizan foto, nombre y precio del bloque de compra.
  var tonos = window.TONOS || {};
  var btns = document.querySelectorAll('[data-tono]');
  var bImg = document.getElementById('buy-img');
  var bName = document.getElementById('buy-name');
  var bPr = document.getElementById('buy-pr');
  function elegir(key){
    var t = tonos[key]; if (!t) return;
    for (var b = 0; b < btns.length; b++) {
      var on = btns[b].getAttribute('data-tono') === key;
      btns[b].classList.toggle('sel', on);
      btns[b].setAttribute('aria-pressed', on ? 'true' : 'false');
    }
    if (bImg) { bImg.src = t.img; bImg.alt = t.alt; }
    if (bName) bName.textContent = t.n;
    if (bPr) bPr.textContent = t.p;
  }
  for (var m = 0; m < btns.length; m++) {
    btns[m].addEventListener('click', function(){ elegir(this.getAttribute('data-tono')); });
  }
  if (window.TONO_INICIAL) elegir(window.TONO_INICIAL);
})();
