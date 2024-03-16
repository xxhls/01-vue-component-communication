<script setup lang="ts">
import { defineEmits } from 'vue';

const emit = defineEmits(['myEvent']);

const handleClick = () => {
    emit('myEvent', '这是子组件传来的值');
};
</script>

<template>
    <div>
        <button @click="handleClick">点击我向父组件传值</button>
    </div>
</template>
