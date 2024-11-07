<template>
    <div>
        <header>
            <Header />
        </header>
        <main>
            <Files :files="store.files" />
            <template v-if="!store.files.length">
                <p>No Directories</p>
            </template>
        </main>
    </div>
</template>

<script lang="ts" setup>
import { useFilesStore } from '~/stores';

const store = useFilesStore()
</script>

<style scoped>
main {
    margin: 1rem;
}
</style>