// Alterna visibilidade das seções
function mostrar(id) {
    document.querySelectorAll('.form-container').forEach(f => f.classList.add('escondido'));
    const elemento = document.getElementById(id);
    if (elemento) elemento.classList.remove('escondido');
    
    // Limpa mensagens de erro ao trocar de tela
    document.querySelectorAll('.error').forEach(e => e.innerHTML = "");
}

// Validação Genérica
function validarEProcessar(ids, erroId, mensagemSucesso) {
    const erroElemento = document.getElementById(erroId);
    let temErro = false;

    ids.forEach(id => {
        const campo = document.getElementById(id);
        if (!campo.value.trim()) {
            temErro = true;
            campo.style.borderColor = "#d93025";
        } else {
            campo.style.borderColor = "";
        }
    });

    if (temErro) {
        erroElemento.innerHTML = "⚠️ Preencha todos os campos obrigatórios.";
        return;
    }

    alert(mensagemSucesso);
    mostrar('inicio');
    ids.forEach(id => document.getElementById(id).value = ""); // Limpa campos
}

// Funções de Ação
function cadastrar() {
    const campos = ["cpf", "telefone", "email", "senha", "endereco"];
    validarEProcessar(campos, "erro-cadastro", "Paciente cadastrado com sucesso!");
}

function entrar() {
    const campos = ["login-email", "login-senha"];
    validarEProcessar(campos, "erro-login", "Login realizado com sucesso!");
}

// Máscaras de Input
document.addEventListener('DOMContentLoaded', () => {
    const cpfInput = document.getElementById("cpf");
    const telInput = document.getElementById("telefone");

    cpfInput?.addEventListener("input", (e) => {
        let v = e.target.value.replace(/\D/g, "");
        v = v.replace(/(\d{3})(\d)/, "$1.$2");
        v = v.replace(/(\d{3})(\d)/, "$1.$2");
        v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        e.target.value = v;
    });

    telInput?.addEventListener("input", (e) => {
        let v = e.target.value.replace(/\D/g, "");
        v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
        v = v.replace(/(\d{5})(\d)/, "$1-$2");
        e.target.value = v;
    });
});
// Alterna visibilidade das seções function mostrar(id) { document.querySelectorAll('.form-container').forEach(f => f.classList.add('escondido')); const elemento = document.getElementById(id); if (elemento) elemento.classList.remove('escondido'); // Limpa mensagens de erro ao trocar de tela document.querySelectorAll('.error').forEach(e => e.innerHTML = ""); } // Validação Genérica function validarEProcessar(ids, erroId, mensagemSucesso) { const erroElemento = document.getElementById(erroId); let temErro = false; ids.forEach(id => { const campo = document.getElementById(id); if (!campo.value.trim()) { temErro = true; campo.style.borderColor = "#d93025"; } else { campo.style.borderColor = ""; } }); if (temErro) { erroElemento.innerHTML = "⚠️ Preencha todos os campos obrigatórios."; return; } alert(mensagemSucesso); mostrar('inicio'); ids.forEach(id => document.getElementById(id).value = ""); // Limpa campos } // Funções de Ação function cadastrar() { const campos = ["cpf", "telefone", "email", "senha", "endereco"]; validarEProcessar(campos, "erro-cadastro", "Paciente cadastrado com sucesso!"); } function entrar() { const campos = ["login-email", "login-senha"]; validarEProcessar(campos, "erro-login", "Login realizado com sucesso!"); } // Máscaras de Input document.addEventListener('DOMContentLoaded', () => { const cpfInput = document.getElementById("cpf"); const telInput = document.getElementById("telefone"); cpfInput?.addEventListener("input", (e) => { let v = e.target.value.replace(/\D/g, ""); v = v.replace(/(\d{3})(\d)/, "$1.$2"); v = v.replace(/(\d{3})(\d)/, "$1.$2"); v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); e.target.value = v; }); telInput?.addEventListener("input", (e) => { let v = e.target.value.replace(/\D/g, ""); v = v.replace(/^(\d{2})(\d)/g, "($1) $2"); v = v.replace(/(\d{5})(\d)/, "$1-$2"); e.target.value = v; }); })//////////;