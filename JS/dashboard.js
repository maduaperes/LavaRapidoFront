const services = [
  { id: 1, name: 'Lavagem Simples', price: 'R$ 25' },
  { id: 2, name: 'Lavagem Completa', price: 'R$ 50' },
  { id: 3, name: 'Estética Automotiva', price: 'R$ 120' },
  { id: 4, name: 'Polimento', price: 'R$ 200' }
];
const list = document.getElementById('servicesList');
services.forEach(s => {
  const el = document.createElement('div');
  el.className = 'service';
  el.innerHTML = `<strong>${s.name}</strong><div class='muted'>${s.price}</div>`;
  el.onclick = () => { localStorage.setItem('lj_selected', JSON.stringify(s)); location.href = 'agendamento.html'; };
  list.appendChild(el);
});
const user = JSON.parse(localStorage.getItem('lj_user') || '{}'); document.getElementById('userName').textContent = user.name ? 'Olá, ' + user.name : 'Olá';
document.getElementById('quickSchedule').addEventListener('click', () => location.href = 'agendamento.html');