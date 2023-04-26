let altura = document.querySelector('#txtAltura')
let peso = document.querySelector('#txtPeso')
let res = document.querySelector('#res')

function calcular(){
    if (peso.value.length == 0 || altura.value.length == 0){
        alert('[ERRO] Insira todos os dados para poder prosseguir!!')
    } else{
        let alturaN = parseFloat(altura.value)
        let pesoN = parseFloat(peso.value)
        let imc = pesoN / (alturaN**2)
        // var img = document.createElement('img')
        // img.setAttribute('id', 'foto')

        if(imc <= 16.9){
            res.innerHTML = `IMC: <strong>${imc.toFixed(2)}</strong>, você está <strong>MUITO ABAIXO DO PESO</strong> 
            <p>Consulte a tabela abaixo se necessário!</p>`
            res.innerHTML += `<img src="img/tabela-IMC.png" alt="tabela imc" id="imagemIMC">`
            // img.setAttribute('src', 'img/tabela-IMC.png')
        }else if(imc >= 17 && imc <= 18.4){
            res.innerHTML = `IMC: <strong>${imc.toFixed(2)}</strong>, você está <strong>ABAIXO DO PESO</strong> 
            <p>Consulte a tabela abaixo se necessário!</p>`
            res.innerHTML += `<img src="img/tabela-IMC.png" alt="tabela imc" id="imagemIMC">`
            // img.setAttribute('src', 'img/tabela-IMC.png')
        }else if(imc >= 18.5 && imc <= 24.9){
            res.innerHTML = `IMC: <strong>${imc.toFixed(2)}</strong>, você está no <strong>PESO NORMAL</strong>
            <p>Consulte a tabela abaixo se necessário!</p>`
            res.innerHTML += `<img src="img/tabela-IMC.png" alt="tabela imc" id="imagemIMC">`
            // img.setAttribute('src', 'img/tabela-IMC.png')
        }else if(imc >= 25 && imc <= 29.9){
            res.innerHTML = `IMC: <strong>${imc.toFixed(2)}</strong>, você está <strong>ACIMA DO PESO</strong>
            <p>Consulte a tabela abaixo se necessário!</p>`
            res.innerHTML += `<img src="img/tabela-IMC.png" alt="tabela imc" id="imagemIMC">`
            // img.setAttribute('src', 'img/tabela-IMC.png')
        }else if(imc >= 30 && imc <= 34.9){
            res.innerHTML = `IMC: <strong>${imc.toFixed(2)}</strong>, você está com <strong>OBESIDADE GRAU I</strong>
            <p>Consulte a tabela abaixo se necessário!</p>`
            res.innerHTML += `<img src="img/tabela-IMC.png" alt="tabela imc" id="imagemIMC">`
            // img.setAttribute('src', 'img/tabela-IMC.png')
        }else if(imc >= 35 && imc <= 40){
            res.innerHTML = `IMC: <strong>${imc.toFixed(2)}</strong>, você está com <strong>OBESIDADE GRAU II</strong>
            <p>Consulte a tabela abaixo se necessário!</p>`
            res.innerHTML += `<img src="img/tabela-IMC.png" alt="tabela imc" id="imagemIMC">`
            // img.setAttribute('src', 'img/tabela-IMC.png')
        }else{
            res.innerHTML = `IMC: <strong>${imc.toFixed(2)}</strong>, você está com <strong>OBESIDADE GRAU III</strong>
            <p>Consulte a tabela abaixo se necessário!</p>`
            res.innerHTML += `<img src="img/tabela-IMC.png" alt="tabela imc" id="imagemIMC">`
            // img.setAttribute('src', 'img/tabela-IMC.png')
        }
    }


}

