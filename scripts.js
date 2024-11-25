document.getElementById("formCadastro").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    // Captura os valores do formulário
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const data = document.getElementById("data").value;
    const hora = document.getElementById("hora").value;

    // Validação básica
    if (!nome || !email || !data || !hora) {
        mostrarResultado("Preencha todos os campos!", "error");
        return;
    }

    // Exibir mensagem de sucesso
    mostrarResultado(`Agendamento confirmado! <br> Nome: ${nome} <br> E-mail: ${email} <br> Data: ${data} <br> Hora: ${hora}`, "success");

    // Limpar o formulário
    document.getElementById("formCadastro").reset();
});

function mostrarResultado(mensagem, tipo) {
    const resultadoDiv = document.getElementById("resultado");

    resultadoDiv.className = `resultado ${tipo}`;
    resultadoDiv.innerHTML = mensagem;
    resultadoDiv.style.display = "block";
}
