document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('.botao-conversor').onclick = function () {
        var celsius = document.querySelector('#celsius').value;
        var fahrenheit = document.querySelector('#fahrenheit').value;
        if (celsius){
            var tempConvertida =  (celsius* 1.8) + 32;
            document.querySelector('#fahrenheit').value = tempConvertida.toFixed(2);
        } else if (fahrenheit) {
            var tempConvertida = (fahrenheit-32)/1.8;
            document.querySelector('#celsius').value = tempConvertida.toFixed(2);
        } else {
            alert ("Você precisa preencher uma das temperaturas!")
        }
    }

    document.querySelector('.botao-limpar').onclick = function () {
        document.querySelector('#celsius').value = '';
        document.querySelector('#fahrenheit').value = '';
    }
  });



