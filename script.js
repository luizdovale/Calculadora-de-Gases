function calculateNitrogenio() {
    const fator = parseFloat(document.getElementById('fator').value);
    const polegadas = parseFloat(document.getElementById('polegadas').value);

    // Verifica se os valores de entrada são válidos
    if (isNaN(fator) || isNaN(polegadas)) {
        alert("Por favor, insira valores válidos para fator e polegadas.");
        return;
    }

    // Calcula o peso líquido para o Nitrogênio
    let pesoLiquido = (fator * polegadas) / 0.862;

    // Calcula m³ para o Nitrogênio
    let m3 = pesoLiquido * 0.862;

    // Arredonda os valores para cima
    pesoLiquido = Math.floor(pesoLiquido);
    m3 = Math.floor(m3);

    // Exibe os resultados nos campos de texto
    document.getElementById('pesoLiquido').value = pesoLiquido + " kg";
    document.getElementById('m3').value = m3 + " m³";
}

function calculateOxigenio() {
    const fator = parseFloat(document.getElementById('fator').value);
    const polegadas = parseFloat(document.getElementById('polegadas').value);

    // Verifica se os valores de entrada são válidos
    if (isNaN(fator) || isNaN(polegadas)) {
        alert("Por favor, insira valores válidos para fator e polegadas.");
        return;
    }

    // Calcula o peso líquido para o Oxigênio
    let pesoLiquido = (fator * polegadas) / 0.754;

    // Calcula m³ para o Oxigênio
    let m3 = pesoLiquido * 0.754;

    // Arredonda os valores para cima
    pesoLiquido = Math.floor(pesoLiquido);
    m3 = Math.floor(m3);

    // Exibe os resultados nos campos de texto
    document.getElementById('pesoLiquido').value = pesoLiquido + " kg";
    document.getElementById('m3').value = m3 + " m³";
}

function resetFields() {
    document.getElementById('fator').value = "";
    document.getElementById('polegadas').value = "";
    document.getElementById('pesoLiquido').value = "";
    document.getElementById('m3').value = "";
}
