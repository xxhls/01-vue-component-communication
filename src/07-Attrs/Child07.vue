<script setup lang="ts">
import { useAttrs } from 'vue';

const attrs = useAttrs();
</script>

<template>
    <div>{{ attrs.value07 }}</div>
</template>
