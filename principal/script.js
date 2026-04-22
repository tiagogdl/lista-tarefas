

const modal = document.querySelector('div#div_nova_tarefa')
const display_nova = document.querySelector('div#overlay')
const input = document.querySelector('input#text_nova_tarefa')
const input_data = document.querySelector('input#text_data')
let guarda_tarefas = []
let ul_tarefas = document.querySelector('ul#ul_tarefas')
ul_tarefas.addEventListener('click', exc_edit)
let id_global_edit = ''


function adicionar () { // Faz aparecer modal para adicionar tarefa
    display_nova.style.display = 'flex'
    input.value= ''
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
    let data_br = new Date(data)
    let tempo_mil = new Date().getTime()


    if (data) { //Validação se data Inválida
        if (data_br >= new Date ()) {
           data_br = data_br.toLocaleDateString('pt-br')
        } else {
            window.alert('Data Inválida!')
            input_data.value=''
            input_data.focus()
            return
        }
       var escrita_tarefa = `${text_tarefa} - Data: ${data_br}`
    } else {
        escrita_tarefa = text_tarefa
    }

    if (text_tarefa.length === 0) {
        window.alert('Tarefa Vazia!')
        
    } else if (guarda_tarefas.find(li => li.id == id_global_edit)){
        li.tarefa = text_tarefa
        li.data = data
        li.textContent = `${escrita_tarefa}`
    } else {
        const _edit = document.createElement('button')
        _edit.innerHTML= '<i class="fa-regular fa-pen-to-square"></i>'
        _edit.setAttribute('class', 'exc_edit editar')

        const _exc = document.createElement('button')
        _exc.innerHTML= '<i class="fa-solid fa-trash-can"></i>'
        _exc.setAttribute('class', 'exc_edit excluir')

        var item_li = document.createElement('li')
        item_li.textContent = `${escrita_tarefa}`
        item_li.append(_edit, _exc)
        ul_tarefas.appendChild(item_li)
        display_nova.style.display = 'none'
        item_li.dataset.id = tempo_mil
        guarda_tarefas.push({
            tarefa: text_tarefa,
            data: data_br,
            id: tempo_mil
        })
    }
}

function exc_edit(event) {
    if (event.target.closest('.editar')) {
        let ele_li = event.target.closest('li')
        let id =  Number(ele_li.dataset.id)
        id_global_edit = id

        let li_id_edit = guarda_tarefas.find(li => li.id == id)
        display_nova.style.display='flex'
        input.value = li_id_edit.tarefa
        input_data.value = li_id_edit.data

        /*
        let text_tarefa_edit = input.value
        let data_edit = input_data.value
        
        li_id_edit.tarefa = text_tarefa_edit
        li_id_edit.data = data_edit
        */

    } else if (event.target.closest('.excluir')) {
        let ele_li = event.target.closest('li')
        let id =  Number(ele_li.dataset.id)

        let novo_array = guarda_tarefas.filter(li => li.id !== id)
        guarda_tarefas = novo_array
        ele_li.remove()
    }
}
input.value=''
input_data.value=''