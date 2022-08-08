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
        li[i].style.backgroundColor = 'white';
    }
    e.target.style.backgroundColor = 'grey';
})

let liRiscado = document.querySelector('#lista-tarefas');
liRiscado.addEventListener('dblclick', function(e){
    if (e.target.classList.contains('completed')) {
        e.target.className = 'tarefas'
    } else {
        e.target.className = 'tarefas completed'
    }   
})

