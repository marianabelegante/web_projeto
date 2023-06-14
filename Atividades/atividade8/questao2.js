let v1 = document.getElementById('valor1');
let v2 = document.getElementById('valor2');
let v3 = document.getElementById('valor3');
let m = document.getElementById('resultado');

function BtFuncao(){
    let s = 0;
    s = Math.max(v1.value, v2.value, v3.value);
    m.innerHTML = 'Maior valor é: ' + s;
}