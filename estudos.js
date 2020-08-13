//*******ABAIXO DESTA LINHA SÃO COMANDOS NÃO UTILIZADOS NO APP*********


//Troca de música por sequência de armazenagem em array
//Tirando sempre a primeira do array e ao final colocando as mesmas novamente

var musicas = [0, 1, 2, 3, 4];
var musicaTocada = [];

imergir.addEventListener('click' , () => {
    
    if(musicas.length <= 0){
        musicas = [...musicaTocada];
        console.log(musicas);
    } else {
        musicas.shift();
        console.log(musicas);
        }
       
    });
    
musicaTocada = [...musicas];

//  musica = musicas[Math.floor(Math.random() * musicas.length)];
//  var tempoSegundo = Math.floor(secundo.currentTime)
//  var tempoPrimeiro = Math.floor(secundo.duration)
//  console.log((tempoSegundo / tempoPrimeiro) * 100)

function func1() {
    return 2;
}

function func2() {
    return 3;
}
    
Promise.resolve().then(() => console.log(2));
console.log(1);

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

wait().then(() => console.log('você?'));
Promise.resolve().then(() => console.log('como')).then(() => console.log('vai'));
console.log('oi');


`
para html, existem os elementos
se o picture com media definida não der certo, ele roda o element IMG
padrão. Fazer isso ajuda reduzir o consumo de dados em celulares,
para não fazer download de imagens HD

<picture class="image" alt="Imagem de algo">
 <source media="(min-width: 768px)" srcset="url de alguma imagem">

 <img src="url da imagem" alt="Imagem de algo">

`

