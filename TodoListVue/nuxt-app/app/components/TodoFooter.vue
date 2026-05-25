<template>
    <UFooter>
        <template #left>
            <div class="flex items-center h-full">
                <p class="text-[20px] max-sm:hidden">&copy; {{ new Date().getFullYear() }}</p>
            </div>
        </template>

        <template #right>
            <div class="flex ">
                <UIcon name="i-fa-code-fork" size="28" class="text-[#206efe] mr-2" />
                <p>
                    Desenvolvido por <a class="text-[#206efe] font-bold" href="https://github.com/tiagogdl" target="_blank">Tiago Dias</a></p>
            </div>
        </template>

    </UFooter>
</template>

<script setup>

</script>