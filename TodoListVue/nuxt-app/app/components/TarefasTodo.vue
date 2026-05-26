<template>
    <div v-for="tarefa in UserStore.tarefas"
    :key="tarefa.id" class="flex justify-between mb-8">
        <div>
            <p>{{ tarefa.text }}</p>
            <p v-if="tarefa.data">Data:  {{ DataPt(tarefa.data)}}</p>
        </div>
        <div >
            <UButton size="64" class="mr-3" @click="emit('editar', tarefa)">
                <UIcon name="i-boxicons-edit" size="28"></UIcon>
            </UButton>
            <UButton size="64" @click="emit('excluir', tarefa)">
                <UIcon name="i-mdi-trash" size="28"></UIcon>
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