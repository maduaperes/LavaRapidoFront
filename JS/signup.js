const form = document.getElementById('signupForm');
const feedback = document.getElementById('feedback');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim() || 'Cliente';
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email && !phone) {
        feedback.textContent = "Informe pelo menos um contato (email ou telefone).";
        return;
    }

    if (!password) {
        feedback.textContent = "Informe uma senha.";
        return;
    }

    // Salva dados no localStorage
    const user = { name, contact: email || phone, password };
    localStorage.setItem('lj_user', JSON.stringify(user));

    feedback.textContent = "Conta criada com sucesso! Redirecionando...";

    setTimeout(() => {
        location.href = 'dashboard.html';
    }, 1500);
});
