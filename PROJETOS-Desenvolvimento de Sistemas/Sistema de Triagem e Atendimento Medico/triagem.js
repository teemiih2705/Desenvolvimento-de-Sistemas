// Simulação de pacientes cadastrados + paciente do localStorage
function getPacientes() {
    const lista = [
        { nome: "João Silva", data: "1985-03-15", cpf: "123.456.789-00", tel: "(11) 99999-0001", email: "joao@email.com" },
        { nome: "Maria Oliveira", data: "1992-07-22", cpf: "987.654.321-00", tel: "(11) 99999-0002", email: "maria@email.com" }
    ];
    const salvo = localStorage.getItem("pacienteAtual");
    if (salvo) {
        const p = JSON.parse(salvo);
        // Evita duplicar se já estiver na lista
        if (!lista.find(x => x.cpf === p.cpf)) {
            lista.push(p);
        }
    }
    return lista;
}

// Carrega paciente do localStorage automaticamente ao abrir a página
window.onload = function() {
    const salvo = localStorage.getItem("pacienteAtual");
    if (salvo) {
        const p = JSON.parse(salvo);
        mostrarPaciente(p);
    }
};

function mostrarPaciente(p) {
    document.getElementById("pNome").innerText = p.nome || "-";
    document.getElementById("pCpf").innerText = p.cpf || "-";
    document.getElementById("pData").innerText = p.data || "-";
    document.getElementById("pTel").innerText = p.tel || "-";
    document.getElementById("pEmail").innerText = p.email || "-";
    document.getElementById("dadosPaciente").style.display = "block";
    // Mantém no localStorage para garantir consistência
    localStorage.setItem("pacienteAtual", JSON.stringify(p));
}

function buscarPaciente() {
    const termo = document.getElementById("busca").value.toLowerCase().trim();
    const divDados = document.getElementById("dadosPaciente");

    if (!termo) {
        alert("Digite um nome ou CPF para buscar.");
        return;
    }

    const pacientes = getPacientes();
    const encontrado = pacientes.find(p =>
        p.nome.toLowerCase().includes(termo) || p.cpf.includes(termo)
    );

    if (encontrado) {
        mostrarPaciente(encontrado);
    } else {
        divDados.style.display = "none";
        alert("Paciente não encontrado. Verifique o nome ou CPF.");
    }
}

function enviarTriagem(e) {
    e.preventDefault();
    const btn = document.getElementById("btnEnviar");
    btn.innerText = "Processando...";
    btn.disabled = true;

    const triagem = {
        queixa: document.getElementById("queixa").value,
        pa: document.getElementById("pa").value,
        fc: document.getElementById("fc").value,
        temp: document.getElementById("temp").value,
        spo2: document.getElementById("spo2").value,
        peso: document.getElementById("peso").value,
        altura: document.getElementById("altura").value,
        dor: document.getElementById("dor").value,
        risco: document.getElementById("risco").value,
        obs: document.getElementById("obs").value
    };

    setTimeout(() => {
        localStorage.setItem("triagemAtual", JSON.stringify(triagem));
        document.getElementById("formTriagem").style.display = "none";
        document.getElementById("mensagemSucesso").style.display = "block";

        btn.innerText = "Salvar Triagem";
        btn.disabled = false;
        document.getElementById("formTriagem").reset();
        document.getElementById("dorValor").innerText = "0";
        document.getElementById("dadosPaciente").style.display = "none";

        setTimeout(() => {
            document.getElementById("mensagemSucesso").style.display = "none";
            document.getElementById("formTriagem").style.display = "block";
        }, 3000);
    }, 1200);
}

