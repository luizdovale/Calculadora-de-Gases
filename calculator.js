function calculateGas() {
    const tankFactorInput = document.getElementById('tankFactor');
    const tankSizeInput = document.getElementById('tankSize');
    const liquidWeightDisplay = document.getElementById('liquidWeightDisplay');
    const tankFactor = parseFloat(tankFactorInput.value);
    const tankSize = parseFloat(tankSizeInput.value);
    let result;

    if (isNaN(tankFactor) || isNaN(tankSize)) {
        result = 'Insira valores válidos';
    } else {
        // Calcula o peso líquido
        const liquidWeight = (tankFactor * tankSize) / 0.862;
        const roundedLiquidWeight = Math.ceil(liquidWeight * 10) / 10; // Arredonda para cima após a primeira casa decimal
        const roundedLiquidWeightString = roundedLiquidWeight.toFixed(1); // Transforma em string com uma casa decimal
        liquidWeightDisplay.value = roundedLiquidWeightString.replace('.', ',') + ' kg'; // Exibe o peso líquido arredondado com uma casa decimal
        // Calcula o resultado final em m³
        result = (roundedLiquidWeight * 0.862).toFixed(2) + ' m³'; // Calcula o resultado final e o exibe com duas casas decimais
    }

    document.getElementById('display').value = result; // Exibe o resultado com as unidades
}

function clearAll() {
    document.getElementById('tankFactor').value = '';
    document.getElementById('tankSize').value = '';
    document.getElementById('liquidWeightDisplay').value = '';
    document.getElementById('display').value = '';
}
