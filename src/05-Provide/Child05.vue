<script setup lang="ts">
import { inject } from 'vue';

const msg = inject('msg');
</script>

<template>
    <div>
        {{ msg }}
    </div>
</template>
