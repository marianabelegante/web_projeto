let t = document.getElementById('info');
let p = document.getElementById('texto');

function txtFuncao(){
    t.value = t.value.toUpperCase();
    p.value = t.value.length
    p.innerHTML = 'Numeros de caracteres é: ' + p.value;
}