if (x >= 100) {
    var teste = document.getElementById('alegrometro')
    //document..insertRule('.slider::after { content: Alegre; color: white; font-size: 2rem; position: absolute; opacity: 1; left: 100%; top: 100%; rgb(117,252,117); }', 0)
    //var alegre = window.getComputedStyle(document.querySelector('input'),':after')
    var alegre = window.getComputedStyle(teste, "::after");
    alegre.color = 'rgb(117, 252, 117)';
    console.log(alegre.color)
    
}