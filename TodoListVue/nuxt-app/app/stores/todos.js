import { defineStore } from "pinia";
import { ref, onMounted } from 'vue';

export const useUserStore = defineStore('tarefas', function(){
    const tarefas = ref([])

    onMounted(function(){
        const tarefasSalvas = localStorage.getItem('tarefas')

        if (tarefasSalvas) {
            tarefas.value = JSON.parse(tarefasSalvas)
        }
    })

    function addTarefa(info) {
        const infoTar = tarefas.value.find(tarefa => tarefa.id == info.id )
        if (infoTar) {
           infoTar.text = info.text
           infoTar.data = info.data
        } else {
            tarefas.value.push(info)
        }

        SalvarStorage()
    }

    function excluirTarefa(info) {
        const NovasTarefas = tarefas.value.filter(tarefa => tarefa.id != info.id)
        tarefas.value = NovasTarefas

        SalvarStorage()
    }

    function SalvarStorage () {
        if (process.client) {
            localStorage.setItem('tarefas', JSON.stringify(tarefas.value))
        }
    }

    return { tarefas, addTarefa, excluirTarefa}
})