<script setup lang="ts">
import { ITender } from '../../interfaces';

const {item} = defineProps<{
    item: ITender
}>()

</script>

<template>
    <div class="card">
        <router-link 
            class="title" 
            :to="{ name: 'item', params: { id: item.id } }"
        >
            {{ item.title }}
        </router-link>
        <p class="description">{{ item.description }}</p>
    </div>
    
</template>

<style scoped lang="scss">

</style>
