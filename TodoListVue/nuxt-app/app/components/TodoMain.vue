<template>
    <UContainer class="mt-3 max-w-2xl shadow-sm">
        <div class="overflow-hidden mb-10 w-full h-full">
            <ButtonForm @abrir="ModalAberto = true" />
            <TarefasTodo @editar="abrirEdicao" />
            <ModalForm
            :open="ModalAberto"
            :tarefa="TarefaEditando"
            @close="fecharModal"
             />
        </div>
    </UContainer>
</template>

<script setup>
import { ref } from 'vue';
const ModalAberto = ref(false)
const TarefaEditando = ref(null)

function abrirEdicao(tarefa) {
    ModalAberto.value = true
    TarefaEditando.value = tarefa   
}
function fecharModal() {
   ModalAberto.value = false
   TarefaEditando.value = null
}
</script>