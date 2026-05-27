const form = document.getElementById("formCadastro");
const telaCadastro = document.getElementById("telaCadastro");
const mensagem = document.getElementById("mensagemSucesso");
const btn = document.getElementById("btnEnviar");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    btn.innerText = "Processando...";
    btn.disabled = true;

    const paciente = {
        nome: document.getElementById("nome").value,
        data: document.getElementById("data").value,
        cpf: document.getElementById("cpf").value,
        tel: document.getElementById("tel").value,
        email: document.getElementById("email").value
    };

    setTimeout(() => {
        // Salva no localStorage para uso nas próximas telas
        localStorage.setItem("pacienteAtual", JSON.stringify(paciente));

        // Esconde o formulário e mostra a mensagem
        telaCadastro.style.display = "none";
        mensagem.style.display = "block";
        
        // Reseta o botão e o formulário internamente
        btn.innerText = "Cadastrar Paciente";
        btn.disabled = false;
        form.reset();

        // Redireciona para a tela de triagem após 2 segundos
        setTimeout(() => {
            window.location.href = "triagem.html";
        }, 2000);

    }, 1200);
});

