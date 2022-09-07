document.addEventListener("DOMContentLoaded", function(){
    var btn = document.querySelector('.btn-converter');
    var limpar = document.querySelector('.btn-limpar')
    btn.onclick = function () {
        var conversorC = document.querySelector('#celsius').value;
        var conversorF = document.querySelector('#fahrenheit').value;
        if (conversorC){
            var tempConvertida =  (conversorC * 1.8) + 32;
            document.querySelector('#fahrenheit').value = tempConvertida.toFixed(2);
        } else if (conversorF) {
            var tempConvertida = (conversorF-32)/1.8;
            document.querySelector('#celsius').value = tempConvertida.toFixed(2);
        } else {
            alert ("Você precisa preencher uma das temperaturas!")
        }
    }

    limpar.onclick = function () {
        document.querySelector('#celsius').value = '';
        document.querySelector('#fahrenheit').value = '';
    }
  });



