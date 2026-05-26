<template>
        <div v-if="props.open" @click="emits('close')"
         class="fixed inset-0 z-50 flex justify-center items-center bg-black/50">
                <div @click.stop="" class="w-[300px] h-[250px] rounded-2xl p-4 bg-sky-200 text-black flex flex-col justify-between">
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
                        <UButton @click="NovaTarefa()" class="min-w-[100px] justify-center items-center">
                            {{ props.edit ? 'Editar' : 'Adicionar' }}
                        </UButton>
                    </div>
                </div>
            </div>
</template>

<script setup>
import { useUserStore } from '../stores/todos';
import { ref, watch} from 'vue';
const UserStore = useUserStore()
const props = defineProps({
    open: {
        type: Boolean
    },

    tarefa: {
        type: Object
    },

    edit: {
        type: Boolean
    }

})

const emits = defineEmits(['close'])

const TarefaText = ref('')
const TarefaData = ref('')

watch(function(){
    return props.tarefa
    },
    function (NovaEdição) {
        if (NovaEdição) {
            TarefaText.value = NovaEdição.text
            TarefaData.value = NovaEdição.data
        } else {
            TarefaText.value = ''
            TarefaData.value = ''
        }
    }
)

function NovaTarefa() {
    UserStore.addTarefa({
        text: TarefaText.value,
        data: TarefaData.value,
        id: props.tarefa ? props.tarefa.id : new Date().getTime()
    })

    TarefaText.value = ''
    TarefaData.value = ''
    emits('close')
}
</script>