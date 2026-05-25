<template>
        <div v-if="ModalOpen" @click="ModalOpen = !ModalOpen"
         class="fixed inset-0 z-50 flex justify-center items-center bg-black/50">
                <div @click.stop="" class="w-[300px] h-[250px] rounded-2xl p-4 bg-sky-200 flex flex-col justify-between">
                    <div class="grid grid-cols-[60px_1fr]">
                        <div class="flex flex-col gap-20">
                            <label for="tarefa">Tarefa: </label>
                            <label for="data">Data: </label>
                        </div>
                        <div class="flex flex-col gap-20">
                            <input type="text" name="tarefa" id="tarefa" class="bg-white rounded-[8px] w-full"
                            v-model="TarefaText"
                            >
                            <input type="date" name="data" id="data" class="bg-white rounded-[8px] w-full"
                            v-model="TarefaData"
                            >
                        </div>
                    </div>
                    <div class="flex justify-center items-center w-full">
                        <UButton @click="NovaTarefa()">
                            Adicionar
                        </UButton>
                    </div>
                </div>
            </div>
</template>

<script setup>
import { useUserStore } from '../stores/todos';
const UserStore = useUserStore()

const ModalOpen = ref(true)
const TarefaText = ref('')
const TarefaData = ref('')

function NovaTarefa() {
    UserStore.addTarefa({
        text: TarefaText.value,
        data: TarefaData.value,
        id: new Date().getTime()
    })

    ModalOpen.value = false
}
</script>