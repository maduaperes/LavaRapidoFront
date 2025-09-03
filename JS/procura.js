document.addEventListener('DOMContentLoaded', () => {
  const searchBtn = document.querySelector('.search-btn');
  const serviceSelect = document.querySelector('select');
  const serviceCards = document.querySelectorAll('.service-card');

  searchBtn.addEventListener('click', () => {
    const service = serviceSelect.value;
    const date = document.querySelector('input[type="date"]').value;
    const time = document.querySelector('input[type="time"]').value;
    const vehicle = document.querySelector('input[placeholder="Modelo ou placa"]').value;

    // Apenas um alerta básico para testar os dados do filtro
    alert(`Busca realizada:\nServiço: ${service || 'Todos'}\nData: ${date || 'Não selecionada'}\nHorário: ${time || 'Não selecionado'}\nVeículo: ${vehicle || 'Não informado'}`);

    // Filtra os cards
    serviceCards.forEach(card => {
      if (!service || service === '') {
        card.style.display = 'flex';
      } else {
        // Cada card tem um título, vamos usar ele para filtrar
        const title = card.querySelector('h3').textContent.toLowerCase();
        if (title.includes(service.replace('_', ' '))) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      }
    });
  });
});
