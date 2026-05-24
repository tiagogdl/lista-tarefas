<template>
    <UFooter>
        <template #left>
            <div class="flex items-center h-full">
                <p class="text-[20px]">&copy; {{ new Date().getFullYear() }}</p>
            </div>
        </template>

        <template #right>
            <div>
                <p>Desenvolvido por <a class="text-[#206efe] font-bold" href="https://github.com/tiagogdl" target="_blank">Tiago Dias</a></p>
            </div>
        </template>

    </UFooter>
</template>

<script setup>

</script>