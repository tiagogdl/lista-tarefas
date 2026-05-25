<template>
    <div v-for="tarefa in UserStore.tarefas"
    :key="tarefa.id">
        {{ tarefa.text }}
    </div>
</template>

<script setup>
import { useUserStore } from '../stores/todos';
const UserStore = useUserStore()
</script>