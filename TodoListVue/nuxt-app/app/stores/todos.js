import { defineStore } from "pinia";
import { ref } from 'vue';

export const useUserStore = defineStore('tarefas', function(){
    const tarefas = ref([
        
    ])

    function addTarefa(tarefa) {
        tarefas.value.push(tarefa)
    }

    return { tarefas, addTarefa }
})