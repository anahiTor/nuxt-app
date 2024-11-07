<template>
    <div v-if="open" class="modal-container">
        <div class="modal-content">
            <h3>Add Files</h3>
            <form @submit.prevent="addDirectory">
                <input placeholder="/folders" v-model="path" />
                <p v-show="store.errorMessage" class="err">{{ store.errorMessage }}</p>
                <button type="submit">Ok</button>
            </form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useValidation } from '~/composabes';
import { useFilesStore } from '~/stores';

defineProps<{
    open: boolean
}>()

const emit = defineEmits(['close', 'add'])
const store = useFilesStore()

const path = ref("")
const closeModal = () => emit("close")

const addDirectory = () => {
    useValidation(path.value)
    if (!store.errorMessage) {
        path.value = "";
        closeModal()
    }
}
</script>

<style>
.modal-container {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #00000078;
}

.err {
    margin: 0;
    font-size: 10px;
    color: rgb(207, 30, 30)
}

.modal-content {
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 200px;
    background-color: #fff;
    padding: 2rem;
    border-radius: 5px;

    button {
        margin-top: 2rem;
    }

    form {
        display: flex;
        flex-direction: column;
    }
}
</style>