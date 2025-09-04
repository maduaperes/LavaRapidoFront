const services = JSON.parse(localStorage.getItem('lj_services') || '[]');
const selected = JSON.parse(localStorage.getItem('lj_selected') || '{}');
const sel = document.getElementById('serviceSelect');
if (services.length === 0) {
  // default services (same as dashboard)
  services.push({ id: 1, name: 'Lavagem Simples' }, { id: 2, name: 'Lavagem Completa' }, { id: 3, name: 'Estética Automotiva' }, { id: 4, name: 'Polimento' });
  localStorage.setItem('lj_services', JSON.stringify(services));
}
services.forEach(s => sel.insertAdjacentHTML('beforeend', `<option value='${s.id}'>${s.name}</option>`));
if (selected && selected.id) sel.value = selected.id;
document.getElementById('schedForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const data = { serviceId: sel.value, date: document.getElementById('date').value, time: document.getElementById('time').value, payment: document.getElementById('payment').value, status: 'agendado' };
  // save to history
  const hist = JSON.parse(localStorage.getItem('lj_history') || '[]');
  hist.unshift(data);
  localStorage.setItem('lj_history', JSON.stringify(hist));
  localStorage.setItem('lj_current', JSON.stringify(data));
  alert('Agendamento confirmado!');
  location.href = 'status.html';
});
document.getElementById('btnBack').addEventListener('click', () => {
  location.href = 'dashboard.html';
});