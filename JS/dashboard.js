// ==========================
// Serviços disponíveis
// ==========================
const services = [
  { id: 1, name: 'Lavagem Simples', price: 'R$ 25' },
  { id: 2, name: 'Lavagem Completa', price: 'R$ 50' },
  { id: 3, name: 'Estética Automotiva', price: 'R$ 120' },
  { id: 4, name: 'Polimento', price: 'R$ 200' }
];

// ==========================
// Função para renderizar serviços
// ==========================
function renderServices() {
  const list = document.getElementById('servicesList');
  if (!list) return;

  services.forEach(service => {
    const serviceEl = document.createElement('div');
    serviceEl.className = 'service';
    serviceEl.innerHTML = `
      <i class="fa-solid fa-car fa-2x" aria-hidden="true"></i>
      <p><strong>${service.name}</strong></p>
      <div class="muted">${service.price}</div>
    `;
    
    serviceEl.addEventListener('click', () => {
      localStorage.setItem('lj_selected', JSON.stringify(service));
      location.href = 'agendamento.html';
    });

    list.appendChild(serviceEl);
  });
}

// ==========================
// Exibir nome do usuário
// ==========================
function renderUserName() {
  const userNameEl = document.getElementById('userName');
  if (!userNameEl) return;

  const user = JSON.parse(localStorage.getItem('lj_user') || '{}');
  userNameEl.textContent = user.name ? `Olá, ${user.name}` : 'Olá';
}

// ==========================
// Configurar botões
// ==========================
function setupButtons() {
  const quickBtn = document.getElementById('quickSchedule');
  if (quickBtn) {
    quickBtn.addEventListener('click', () => {
      location.href = 'agendamento.html';
    });
  }

  const btnBack = document.getElementById('btnBack');
  if (btnBack) {
    btnBack.addEventListener('click', () => {
      location.href = 'splash.html';
    });
  }
}

// ==========================
// Inicialização
// ==========================
function initDashboard() {
  renderServices();
  renderUserName();
  setupButtons();
}

// Executar
document.addEventListener('DOMContentLoaded', initDashboard);
