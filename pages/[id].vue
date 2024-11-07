<template>
    <div class="nested-page">
        <button @click="router.back()"> < Back </button>
        <Files :files="nodeFiles.children" />
    </div>
</template>

<script lang="ts" setup>
import { useFilesStore } from '~/stores';
const router = useRouter()
const store = useFilesStore()

const nodeFiles = store.selectedNode
</script>

<style>
.nested-page {
    padding: 2rem;
    button {
        margin-bottom: 2rem;
    }
}
</style>