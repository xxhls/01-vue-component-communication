<script setup lang="ts">
defineProps<{
    msg: string
}>();
</script>

<template>
    <div>
        这是父组件传来的值 {{ msg }}
    </div>
</template>