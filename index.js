function registro(x) {
    x.preventDefault();
    var nome = document.getElementById('nome').value;
    var matricula = document.getElementById('matricula').value;
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    
    var media = (nota1 + nota2) / 2;
    var situacao = media
        if (situacao > 5) {
            situacao = "Aprovado"
        } else {
            situacao = "Reprovado"
        }

    var linha = criarLinha(nome, matricula, nota1, nota2, media, situacao);
    novaLinha(linha);
}

function criarLinha(nome, matricula, nota1, nota2, media, situacao) {
    const linha = document.createElement('tr');

    const tdNome = document.createElement('td');
    tdNome.textContent = nome;
    linha.appendChild(tdNome);

    const tdMatricula = document.createElement('td');
    tdMatricula.textContent = matricula;
    linha.appendChild(tdMatricula);

    const tdNota1 = document.createElement('td');
    tdNota1.textContent = nota1;
    linha.appendChild(tdNota1);

    const tdNota2 = document.createElement('td');
    tdNota2.textContent = nota2;
    linha.appendChild(tdNota2);

    const tdMedia = document.createElement('td');
    tdMedia.textContent = media.toFixed(2);
    linha.appendChild(tdMedia);

    const tdSituacao = document.createElement('td');
    tdSituacao.textContent = situacao;
    linha.appendChild(tdSituacao);

    return linha;
}

function novaLinha(linha) {
    const tbody = document.querySelector('#tabela tbody');
    tbody.appendChild(linha);
}

document.getElementById('formulario').addEventListener('submit', registro);