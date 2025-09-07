const form = document.getElementById('signupForm');
const feedback = document.getElementById('feedback');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Dados comuns
    const name = document.getElementById('name').value.trim() || 'Cliente';
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();

    // Tipo de usuário
    const userType = document.querySelector('input[name="userType"]:checked').value;

    // Dados do profissional
    let service = '';
    let company = '';
    if (userType === 'profissional') {
        service = document.getElementById('service').value.trim();
        company = document.getElementById('company').value.trim();
    }

    // Validações
    if (!email && !phone) {
        feedback.textContent = "Informe pelo menos um contato (email ou telefone).";
        feedback.style.color = "red";
        return;
    }

    if (!password) {
        feedback.textContent = "Informe uma senha.";
        feedback.style.color = "red";
        return;
    }

    if (userType === 'profissional' && !service) {
        feedback.textContent = "Profissionais devem informar o serviço oferecido.";
        feedback.style.color = "red";
        return;
    }

    // Monta objeto do usuário
    const user = {
        name,
        userType,
        contact: email || phone,
        password,
        service: service || null,
        company: company || null
    };

    // Salva no localStorage
    localStorage.setItem('lj_user', JSON.stringify(user));

    // Feedback positivo
    feedback.textContent = "Conta criada com sucesso! Redirecionando...";
    feedback.style.color = "green";

    // Redireciona após 1.5s
    setTimeout(() => {
        location.href = 'dashboard.html';
    }, 1500);
});
