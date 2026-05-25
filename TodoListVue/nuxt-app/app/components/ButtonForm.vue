<template>
    <UButton icon="i-ei-plus" color="primary" @click="ModalOpen = !ModalOpen"
    >
        Nova tarefa
    </UButton>
    <ModalForm  v-if="ModalOpen" />
</template>

<script setup>
import { ref } from 'vue';
const ModalOpen = ref(false)

</script>