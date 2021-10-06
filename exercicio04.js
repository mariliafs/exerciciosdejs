        var salario=16000;
        var salarioNovo;
        var aumento;

    


        if (salario <= 2800) {
            aumento = (salario * 20 / 100);
            salarioNovo = aumento + salario;
            console.log("Salário Antes do Reajuste: R$ " + salario.toFixed(2) + ".\n-- Aumento Aplicado 20% ----\nValor do Aumento: R$ " + aumento.toFixed(2) + ".\nSalário Após o Aumento: R$ " + salarioNovo.toFixed(2) + ".");
        }

        else if (salario > 2800 && salario <= 7000) {
            aumento = (salario * 15 / 100);
            salarioNovo = aumento + salario;
            console.log("Salário Antes do Reajuste: R$ " + salario.toFixed(2) + ".\n-- Aumento Aplicado 15% --\nValor do Aumento: R$ " + aumento.toFixed(2) + ".\nSalário Após o Aumento: R$ " + salarioNovo.toFixed(2) + ".");
        }

        else if (salario > 7000 && salario <= 15000) {
            aumento = (salario * 10 / 100);
            salarioNovo = aumento + salario;
            console.log("Salário Antes do Reajuste: R$ " + salario.toFixed(2) + ".\n-- Aumento Aplicado 10% --\nValor do Aumento: R$ " + aumento.toFixed(2) + ".\nSalário Após o Aumento: R$ " + salarioNovo.toFixed(2) + ".");
        }

        else {
            aumento = (salario * 5 / 100);
            salarioNovo = aumento + salario;
            console.log("Salário Antes do Reajuste: R$ " + salario.toFixed(2) + ".\n-- Aumento Aplicado 5% --\nValor do Aumento: R$ " + aumento.toFixed(2) + ".\nSalário Após o Aumento: R$ " + salarioNovo.toFixed(2) + ".");
        }
