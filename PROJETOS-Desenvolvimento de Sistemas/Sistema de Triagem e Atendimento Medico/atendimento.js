// Carrega dados do localStorage
window.onload = function() {
    const paciente = JSON.parse(localStorage.getItem("pacienteAtual"));
    const triagem = JSON.parse(localStorage.getItem("triagemAtual"));

    if (paciente) {
        document.getElementById("pNome").innerText = paciente.nome || "-";
        document.getElementById("pCpf").innerText = paciente.cpf || "-";
        document.getElementById("pData").innerText = paciente.data || "-";
        document.getElementById("pTel").innerText = paciente.tel || "-";
        document.getElementById("pEmail").innerText = paciente.email || "-";
    }

    if (triagem) {
        document.getElementById("tQueixa").innerText = triagem.queixa || "-";
        document.getElementById("tPa").innerText = triagem.pa || "-";
        document.getElementById("tFc").innerText = triagem.fc || "-";
        document.getElementById("tTemp").innerText = triagem.temp || "-";
        document.getElementById("tSpo2").innerText = triagem.spo2 || "-";
        document.getElementById("tPeso").innerText = triagem.peso || "-";
        document.getElementById("tAltura").innerText = triagem.altura || "-";
        document.getElementById("tDor").innerText = triagem.dor || "-";
        document.getElementById("tRisco").innerText = triagem.risco || "-";
        document.getElementById("tObs").innerText = triagem.obs || "Nenhuma";
    }
};

function adicionarExame() {
    const lista = document.getElementById("listaExames");
    const div = document.createElement("div");
    div.className = "exame-item";
    div.innerHTML = `
        <input type="text" name="exame[]" placeholder="Nome do exame (ex: Hemograma Completo)">
        <button type="button" onclick="this.parentElement.remove()">✕</button>
    `;
    lista.appendChild(div);
}

function finalizarAtendimento(e) {
    e.preventDefault();
    const btn = document.getElementById("btnFinalizar");
    btn.innerText = "Finalizando...";
    btn.disabled = true;

    const atendimento = {
        anamnese: document.getElementById("anamnese").value,
        exameFisico: document.getElementById("exameFisico").value,
        hipoteses: document.getElementById("hipoteses").value,
        diagnostico: document.getElementById("diagnostico").value,
        prescricao: document.getElementById("prescricao").value,
        exames: Array.from(document.querySelectorAll("input[name='exame[]']")).map(i => i.value).filter(v => v),
        atestado: document.getElementById("atestado").value,
        encaminhamento: document.getElementById("encaminhamento").value,
        obsFinais: document.getElementById("obsFinais").value
    };

    setTimeout(() => {
        localStorage.setItem("atendimentoAtual", JSON.stringify(atendimento));
        document.getElementById("formAtendimento").style.display = "none";
        document.getElementById("mensagemSucesso").style.display = "block";

        btn.innerText = "✅ Finalizar Atendimento";
        btn.disabled = false;
        document.getElementById("formAtendimento").reset();
        document.getElementById("listaExames").innerHTML = "";

        setTimeout(() => {
            document.getElementById("mensagemSucesso").style.display = "none";
            document.getElementById("formAtendimento").style.display = "block";
            // Limpa dados do paciente para novo atendimento
            localStorage.removeItem("pacienteAtual");
            localStorage.removeItem("triagemAtual");
        }, 3000);
    }, 1500);
}

