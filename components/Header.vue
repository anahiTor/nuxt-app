<template>
    <div class="header-container">
        <h2>Dashboard</h2>
        <button @click="open = true">Add Files</button>
    </div>
    <Teleport to="#teleports">
        <Modal :open="open" @close="open = false" />
    </Teleport>
</template>

<script lang="ts" setup>
const open = ref(false)
</script>

<style scoped>
.header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    padding: 1rem;
    box-shadow: -16px -5px 20px 0px #403f3f;
}

button:hover {
    background-color: #0c4a7d;
}
</style>