<template>
    <div class="flex flex-col items-center justify-center py-20 text-textSlate400 animate-pulse" 
    v-if="UserStore.tarefas.length === 0">
            <UIcon name="i-heroicons-clipboard-document-list" size="70" class="text-primary mb-4"/>

            <p class="text-xl font-semibold">Nenhuma tarefa criada ainda</p>

            <p>Clique em "Nova tarefa" para começar</p>
    </div>
    <div v-else v-for="tarefa in UserStore.tarefas"
    :key="tarefa.id" @click="tarefa.completed = !tarefa.completed" :class="['flex justify-between mb-8  rounded-2xl p-4 shadow-md border text-textBW border-textSlate300 transition-all duration-300 hover:scale-[1.01]', tarefa.completed ? 'bg-[#22c55e] opacity-80' : 'bg-branco']">
        <div :class="{'line-through text-fundoGradi-t':tarefa.completed}">
            <p>{{ tarefa.text }}</p>
            <p v-if="tarefa.data">Data:  {{ DataPt(tarefa.data)}}</p>
        </div>
        <div >
            <UButton size="64" class="mr-3 bg-fundoGradi-f p-2 rounded-full hover:bg-fundoGradi-t" @click="emit('editar', tarefa)">
                <UIcon name="i-boxicons-edit" size="28" class="text-primary"></UIcon>
            </UButton>
            <UButton size="64" class="bg-fundoGradi-f p-2 rounded-full hover:bg-fundoGradi-t" @click="emit('excluir', tarefa)">
                <UIcon class="text-primary" name="i-mdi-trash" size="28"></UIcon>
            </UButton>
            
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from '../stores/todos';
const UserStore = useUserStore()

const emit = defineEmits(['editar', 'excluir'])
function DataPt (data) {
    const partes = data.split('-')
    return  `${partes[2]}/${partes[1]}/${partes[0]}`
}


</script>