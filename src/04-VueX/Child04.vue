<script setup lang="ts">
</script>

<template>
    <div>
        <button @click="$store.commit('updateMsg', '子组件传递的值')">点击我向父组件传值</button>
    </div>
</template>
