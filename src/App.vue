<script setup lang="ts">
import Child01 from './01-Props/Child01.vue';
import Child02 from './02-Events/Child02.vue';
import Child03 from './03-EventBus/Child03.vue';
import bus from './03-EventBus/EventBus';
import Child04 from './04-VueX/Child04.vue';
import Child05 from './05-Provide/Child05.vue';
import Child06 from './06-Ref/Child06.vue';
import Child07 from './07-Attrs/Child07.vue';
import { useMsgStore } from './08-Pinia/pinia';
import Child08 from './08-Pinia/Chind08.vue';

import { ref, provide, watch } from 'vue';

const value02 = ref('');
const handleEvent = (val: string) => {
    value02.value = val;
};

const value03 = ref('');
bus.on('sendMsg', (val: string) => {
    value03.value = val;
});

provide('msg', '这是父组件传来的值');

const child06Ref = ref<typeof Child06 | null>(null);
const value06 = ref('');
watch(child06Ref, (val) => {
    value06.value = val?.msg;
});

const piniaStore = useMsgStore();
</script>

<template>
    <h1>Hello, world!</h1>

    01-Prop 传值
    <Child01 msg="这是父组件传来的值" />

    02-Event 传值
    <Child02 @myEvent="handleEvent" />
    <p>{{ value02 === '' ? '待传值' : value02 }}</p>

    03-EventBus 传值
    <Child03 />
    <p>{{ value03 === '' ? '待传值' : value03 }}</p>

    04-VueX 传值
    <Child04 />
    <p>{{ $store.state.msg }}</p>

    05-Provide 传值
    <Child05 />

    06-Ref 传值
    <Child06 ref="child06Ref" />
    <p>{{ value06 }}</p>

    07-Attrs 传值
    <Child07 value07="父组件传递的值" />

    08-Pinia 传值
    <Child08 />
    <p>{{ piniaStore.msg }}</p>
</template>
