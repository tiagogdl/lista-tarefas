

const modal = document.querySelector('div#div_nova_tarefa')
const display_nova = document.querySelector('div#overlay')
const input = document.querySelector('input#text_nova_tarefa')
const input_data = document.querySelector('input#text_data')
let guarda_tarefas = []


function adicionar () { // Faz aparece modal para adicionar tarefa
    display_nova.style.display = 'flex'
    input.focus()
}

function fechar_adicionar () { // Some com o modal quando feito a condição abaixo
    display_nova.style.display = 'none'
}

display_nova.addEventListener('click', function (event){
    if (!modal.contains(event.target)) {
        fechar_adicionar()
    }
})

function adicao_tarefa() { // Executa processo de adição de tarefas e datas e salva no vetor
    const text_tarefa = input.value
    const data = input_data.value
    let ul_tarefas = document.querySelector('ul#ul_tarefas')
    let data_br = new Date(data)

    if (data) { //Validação se data Inválida
        if (data_br >= new Date ()) {
           data_br = data_br.toLocaleDateString('pt-br')
        } else {
            window.alert('Data Inválida')
            input_data.value=''
            input_data.focus()
            return
        }
       var escrita_tarefa = `${text_tarefa} - ${data_br}`
    } else {
        escrita_tarefa = text_tarefa
    }

    if (text_tarefa.length === 0) {
        window.alert('Tarefa Vazia!')
    } else{
        var item_li = document.createElement('li')
        item_li.textContent = `${escrita_tarefa}`
        ul_tarefas.appendChild(item_li)
        display_nova.style.display = 'none'
        
        guarda_tarefas.push({
            tarefa: text_tarefa,
            data: data_br
        })
    }

    input.value=''
    input_data.value=''
}

