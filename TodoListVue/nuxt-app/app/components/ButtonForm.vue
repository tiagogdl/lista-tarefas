<template>
    <UButton size="xl" class="mb-8 mt-8 shadow-md hover:shadow-lg transition" icon="i-ei-plus" color="primary" @click="emit('abrir')"
    >
        Nova tarefa
    </UButton>
</template>

<script setup>

const emit = defineEmits(['abrir'])

</script>