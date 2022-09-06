const valorDoProduto = 50;
const valorDaVenda = 100;

//valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)

if (valorDoProduto >= 0 && valorDaVenda >= 0) {
    const custoTotal = valorDoProduto * 1.2;
    const lucroTotal = (valorDaVenda - custoTotal) * 1000;
    console.log(lucroTotal);
} else {
    console.log("Error, os valores não podem ser negativos");
}