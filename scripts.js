document.getElementById('contacto-form')?.addEventListener('submit', e => {
  e.preventDefault();

  const f = e.target;
  const nombre = (f.nombre.value || '').trim();
  const email = (f.email.value || '').trim();
  const mensaje = (f.mensaje.value || '').trim();

  const btn = f.querySelector('.btn-submit');
  const feedback = f.querySelector('.form-feedback');

  feedback.className = 'form-feedback';
  feedback.textContent = '';

  if (!nombre || !email || !mensaje) {
    feedback.textContent = '❌ Rellena todos los campos';
    feedback.classList.add('error');
    feedback.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }

  if (!email.includes('@') || !email.includes('.')) {
    feedback.textContent = '❌ El email no es válido';
    feedback.classList.add('error');
    feedback.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }

  if (mensaje.length < 10) {
    feedback.textContent = '❌ El mensaje debe tener al menos 10 caracteres';
    feedback.classList.add('error');
    feedback.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }

  btn?.classList.add('enviando');
  feedback.textContent = 'Enviando…';
  feedback.classList.add('enviando');

  feedback.scrollIntoView({ behavior: 'smooth', block: 'center' });

  setTimeout(() => {
    btn?.classList.remove('enviando');
    feedback.textContent = `✅ Gracias, ${nombre}. Mensaje enviado correctamente`;
    feedback.className = 'form-feedback ok';
    f.reset();
  }, 600);
});

document.getElementById('modo-btn')?.addEventListener('click', () => document.body.classList.toggle('dark'));
