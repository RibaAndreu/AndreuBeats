document.getElementById('contacto-form')?.addEventListener('submit', e => {
  e.preventDefault();
  const f = e.target,
        n = (f.nombre.value || '').trim() || 'Usuario',
        b = f.querySelector('.btn-submit'),
        m = f.querySelector('.form-feedback');
  b?.classList.add('sending');
  m.textContent = 'Enviando…';
  m.scrollIntoView({behavior:'smooth',block:'center'});
  setTimeout(()=>{b?.classList.remove('sending'); m.textContent = `Gracias, ${n}. Enviado.`; f.reset();},600);
});