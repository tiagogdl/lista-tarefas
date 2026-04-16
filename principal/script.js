

const modal = document.querySelector('div#div_nova_tarefa')
const display_nova = document.querySelector('div#overlay')
const input = document.querySelector('input#text_nova_tarefa')
const input_data = document.querySelector('input#text_data')

function adicionar () {
    display_nova.style.display = 'flex'
    input.focus()
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
    const text_tarefa = input.value
    const data = input_data.value
    const data_br = new Date(data).toLocaleDateString('pt-br')
    let ul_tarefas = document.querySelector('ul#ul_tarefas')
    
    if (text_tarefa.length === 0) {
        window.alert('Tarefa Vazia!')
    } else{
        var item_li = document.createElement('li')
        item_li.textContent = `${text_tarefa} - ${data_br}`
        ul_tarefas.appendChild(item_li)

    display_nova.style.display = 'none'
    }
    input.value=''
    input_data.value=''
}