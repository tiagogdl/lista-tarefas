<template>
    <UButton class="mb-8" icon="i-ei-plus" color="primary" @click="emit('abrir')"
    >
        Nova tarefa
    </UButton>
</template>

<script setup>

const emit = defineEmits(['abrir'])

</script>