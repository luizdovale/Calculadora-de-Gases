function calculate() {
    const fator = parseFloat(document.getElementById('fator').value);
    const polegadas = parseFloat(document.getElementById('polegadas').value);

    // Verifica se os valores de entrada são válidos
    if (isNaN(fator) || isNaN(polegadas)) {
        alert("Por favor, insira valores válidos para fator e polegadas.");
        return;
    }

    // Calcula o peso líquido
    const pesoLiquido = (fator * polegadas) / 0.862;

    // Calcula m³
    const m3 = pesoLiquido * 0.862;

    // Exibe os resultados nos campos de texto
    document.getElementById('pesoLiquido').value = pesoLiquido.toFixed(2);
    document.getElementById('m3').value = m3.toFixed(2);
}
