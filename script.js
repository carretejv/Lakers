/*Função do carrossel automático*/
var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1
    }

document.getElementById('radio'+cont).checked = true
}
/*Função para expandir os jogadores no elenco*/
function expandCard(elenco){
    elenco.style.transform = 'scale(1.1)' 
    elenco.style.boxShadow = '0 8px 16px rgba(0 0 0 0.4)'
}
function collapseCard(elenco){
    elenco.style.transform = 'scale(1)' 
    elenco.style.boxShadow = '0 4px 8px rgba(0 0 0 0.2)'
}
/*Função para deixar algumas palavras dentro do texto em amarelo*/
const texto = document.getElementById('texto');
const palavrasChave = ['Lakers', 'NBA', 'Los Angeles','Califórnia', '"Terra dos Mil Lagos"', 'maior', 'sucesso','número','de títulos', 'Boston Celtics','56','33','32','1 título da copa da']; // Adicione as palavras-chave desejadas aqui
palavrasChave.forEach(palavra => {
const regex = new RegExp(palavra, 'gi');
texto.innerHTML = texto.innerHTML.replace(regex, `<span class="highlight">${palavra}</span>`);
});
