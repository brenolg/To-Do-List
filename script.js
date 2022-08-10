let botaoCriar = document.querySelector('#criar-tarefa');
botaoCriar.addEventListener('click', function(){
    let inputText = document.querySelector('#texto-tarefa');
    let tarefas = document.createElement('li');
    tarefas.className = "tarefas";
    document.querySelector('ol').appendChild(tarefas);
    tarefas.innerHTML = inputText.value;
    inputText.value = '';
})

let tarefasColor = document.querySelector('#lista-tarefas');
tarefasColor.addEventListener('click', function(e){
    let li = document.querySelectorAll('.tarefas');
    for(let i = 0; i < li.length; i += 1) {
        li[i].className = 'tarefas';
    }
    e.target.className = 'selected tarefas';
})

let liRiscado = document.querySelector('#lista-tarefas');
function togle (e){
    e.target.classList.toggle('completed');
   
}
liRiscado.addEventListener('dblclick',togle)

let btnApaga = document.querySelector('#apaga-tudo');
btnApaga.addEventListener('click',function(){
    let li = document.querySelectorAll('.tarefas');
    for(let i = 0; i < li.length; i += 1) {
        li[i].remove();
    }
})

let btnApagaConcluidas = document.querySelector('#remover-finalizados');
btnApagaConcluidas.addEventListener('click',function(){
    let li = document.querySelectorAll('.completed');
    for(let i = 0; i < li.length; i += 1) {
        li[i].remove();
    }
})

let btnCima = document.querySelector('#mover-cima');
btnCima.addEventListener('click', function(){
    let li = document.querySelectorAll('.tarefas');
    for(let i = 0; i < li.length; i += 1) {
        if (li[i].classList.contains('selected')){
            let liSelect = li[i];
        
            let novaLi = document.createElement('li');
            novaLi.className = 'tarefas selected'
            novaLi.innerHTML = liSelect.innerHTML

            let ol = document.querySelector('#lista-tarefas');
            let liPosterior = li[i -1];
            ol.insertBefore(novaLi, liPosterior);
            liSelect.remove();
            
        } else {

        }   
    } 
})

let btnBaixo = document.querySelector('#mover-baixo');
btnBaixo.addEventListener('click', function(){
    let li = document.querySelectorAll('.tarefas');
    for(let i = 0; i < li.length; i += 1) {
        if (li[i].classList.contains('selected')){
            let liSelect = li[i];
        
            let novaLi = document.createElement('li');
            novaLi.className = 'tarefas selected'
            novaLi.innerHTML = liSelect.innerHTML
            
            let ol = document.querySelector('#lista-tarefas');
            let liPosterior = li[i +2];
            ol.insertBefore(novaLi, liPosterior);
            liSelect.remove();
            
        } else {

        }   
    } 
})

let btnRemSelect = document.querySelector('#remover-selecionado');
btnRemSelect.addEventListener('click', function(){
    let selected = document.querySelector('.selected');
    selected.remove();
})


