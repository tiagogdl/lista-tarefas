<template>
  <header class="bg-branco border-b border-fundoGradi-t shadow-sm">
    <div
      class="max-w-6xl mx-auto h-24 px-10 flex items-center justify-between"
    >
      <div>
        <h1 class="font-black text-primary text-5xl tracking-tight">
          TodoList
        </h1>

        <p class="text-textSlate500 text-sm mt-1">
          Organize o seu dia
        </p>
      </div>

      <button @click="dark = !dark">
        <UIcon
          
          name="i-ix-light-dark"
          class="text-primary"
          size="38"
        />
      </button>
      
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
const dark = ref(false)

watch(dark, function(){
  document.documentElement.classList.toggle('dark')
})
</script>