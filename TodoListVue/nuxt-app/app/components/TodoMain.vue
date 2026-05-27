<template>
    <UContainer class="max-w-2xl md:shadow-xl bg-branco md:rounded-b-3xl border border-fundoGradi-f">
        <div class="overflow-hidden mb-10 w-full h-full">
            <ButtonForm @abrir="ModalAberto = true" />
            <TarefasTodo @editar="abrirEdicao" @excluir="excluirTarefa"/>
            <ModalForm
            :open="ModalAberto"
            :tarefa="TarefaEditando"
            :edit="EditProp"
            @close="fecharModal"
             />
        </div>
    </UContainer>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '../stores/todos';
const UserStore = useUserStore()

const ModalAberto = ref(false)
const TarefaEditando = ref(null)
const EditProp = ref(false)

function abrirEdicao(info) {
    ModalAberto.value = true
    EditProp.value = true
    TarefaEditando.value = info
}
function excluirTarefa(info) {
    UserStore.excluirTarefa(info) 
}

function fecharModal() {
   ModalAberto.value = false
   TarefaEditando.value = null
   EditProp.value = false
}
</script>