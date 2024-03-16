<script setup lang="ts">
import { useMsgStore } from './pinia';

const piniaStore = useMsgStore();

const handleClick = () => {
    piniaStore.setMsg('这是子组件传来的值');
};
</script>

<template>
    <div>
        <button @click="handleClick">传值</button>
    </div>
</template>
