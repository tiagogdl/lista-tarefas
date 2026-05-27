<template>
        <div v-if="props.open" @click="emits('close')"
         class="fixed inset-0 z-50 flex justify-center items-center bg-black/40 backdrop-blur-sm">
                <div @click.stop="" class="w-[350px] h-[280px] rounded-3xl p-8 bg-white shadow-2xl text-black flex flex-col justify-between">
                    <div class="grid grid-cols-[60px_1fr]">
                        <div class="flex flex-col gap-12">
                            <label for="tarefa" class="py-2">Tarefa: </label>
                            <label for="data" class="py-2">Data: </label>
                        </div>
                        <div class="flex flex-col gap-12">
                            <input type="text" name="tarefa" id="tarefa" class="bg-white w-full border border-slate-400 rounded-xl px-3 py-2 focus:ring-2 focus:ring-primary outline-none"
                            v-model="TarefaText" placeholder=" Digite sua tarefa"
                            >
                            <input type="date" name="data" id="data" class="bg-white w-full border border-slate-400 rounded-xl px-3 py-2 focus:ring-2 focus:ring-primary outline-none"
                            v-model="TarefaData"
                            >
                        </div>
                    </div>
                    <div class="flex justify-center items-center w-full mt-12">
                        <UButton @click="NovaTarefa()" class="min-w-[150px] py-3 justify-center items-center shadow-md hover:shadow-lg transition">
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