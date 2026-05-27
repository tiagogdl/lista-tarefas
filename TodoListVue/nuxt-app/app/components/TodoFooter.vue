<template>
    <UFooter class="text-textSlate500 text-sm border-t border-fundoGradi-t">
        <template #left>
            <div class="flex items-center h-full max-sm:hidden">
                <p class="text-[20px]">&copy; {{ new Date().getFullYear() }}</p>
            </div>
        </template>

        <template #right>
            <div class="flex ">
                <UIcon name="i-fa-code-fork" size="28" class="text-primary mr-2" />
                <p>
                    Desenvolvido por <a class="text-primary font-bold" href="https://github.com/tiagogdl" target="_blank">Tiago Dias</a></p>
            </div>
        </template>

    </UFooter>
</template>

<script setup>

</script>