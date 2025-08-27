// Dados do usuário
const user = JSON.parse(localStorage.getItem('lj_user') || '{}');
document.getElementById('userName').textContent = user.name || '—';
document.getElementById('userContact').textContent = user.contact || '—';

// Histórico de serviços
const hist = JSON.parse(localStorage.getItem('lj_history') || '[]');
const list = document.getElementById('history');

if (hist.length === 0) {
    list.innerHTML = '<p>Nenhum serviço ainda</p>';
} else {
    hist.forEach(h => {
        const statusClass = (h.status || 'agendado').toLowerCase();
        const item = document.createElement('div');
        item.classList.add('history-item');
        item.innerHTML = `
      <div><strong>ID:</strong> ${h.serviceId}</div>
      <div><strong>Data:</strong> ${h.date} ${h.time}</div>
      <div><strong>Pagamento:</strong> ${h.payment}</div>
      <div class="status ${statusClass}">${h.status || 'Agendado'}</div>
    `;
        list.appendChild(item);
    });
}
    