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