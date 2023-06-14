let e = document.getElementById('valor');
let s = document.getElementById('resultado');

v.onchange = function(){
    let i = 0;
    i = e.value ** 3;
    s.innerHTML = 'O valor do cubo de '+ e.value+'³' + ' é: ' + i;
};

