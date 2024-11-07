<template>
    <div class="files">
        <div v-for="file of files" :key="file.name">
            <button @click="() => openFolder(file)">
                <img :src="`img/${file.type}.png`" />
                <h5>{{ file.name }}</h5>
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { FileTypes } from '~/consts';
import type { File } from "~/types";
import { useFilesStore } from '~/stores';

const router = useRouter()
const store = useFilesStore()

defineProps<{
    files: File[]
}>()

const openFolder = (file: File) => {
    if (file.type === FileTypes.Directory) {
        store.setSelectedNode(file)
        router.push({ path: file.name })
    }
}

</script>

<style scoped>
img {
    width: 100px
}

.files {
    display: grid;
    grid-template-columns: repeat(auto-fill, 150px);
    gap: 20px;
}
</style>