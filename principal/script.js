

const modal = document.querySelector('div#div_nova_tarefa')
const display_nova = document.querySelector('div#overlay')

function adicionar () {
    display_nova.style.display = 'flex'
}

function fechar_adicionar () {
    display_nova.style.display = 'none'
}

display_nova.addEventListener('click', function (event){
    if (!modal.contains(event.target)) {
        fechar_adicionar()
    }
})

function adicao_tarefa() {
    const text_tarefa = document.querySelector('input#text_nova_tarefa').value
    let ul_tarefas = document.querySelector('ul#ul_tarefas')
    var item_li = document.createElement('li')
    item_li.textContent = text_tarefa
    ul_tarefas.appendChild(item_li)

    display_nova.style.display = 'none'
    input.value=''
}