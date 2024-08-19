<script setup lang="ts">
import { Ref, ref } from 'vue';

const emit = defineEmits(['onSubmit'])

const value: Ref<string> = ref('')
</script>

<template>
    <form class="search" @submit.prevent="() => emit('onSubmit', value)">
        <input type="text" v-model="value" placeholder="Поиск по заголовку">
        <button type="submit">Поиск</button>
    </form>
</template>