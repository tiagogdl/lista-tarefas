<template>
    <div v-for="tarefa in UserStore.tarefas"
    :key="tarefa.id" class="flex justify-between mb-8">
        <div>
            <p>{{ tarefa.text }}</p>
            <p v-if="tarefa.data ">Data:  {{ tarefa.data }}</p>
        </div>
        <div >
            <UButton size="64" class="mr-3" @click="emit('editar')">
                <UIcon name="i-boxicons-edit" size="28"></UIcon>
            </UButton>
            <UButton size="64">
                <UIcon name="i-mdi-trash" size="28"></UIcon>
            </UButton>
            
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from '../stores/todos';
const UserStore = useUserStore()
const ModalOpen = ref(false)
const emit = defineEmits(['editar'])


</script>