document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  if (!email) { alert('Preencha email ou telefone'); return; }
  // fake auth -> go to dashboard
  localStorage.setItem('lj_user', JSON.stringify({ name: 'Cliente', contact: email }));
  location.href = 'dashboard.html';
});
document.getElementById('btnBack').addEventListener('click', () => {
  location.href = 'splash.html';
});