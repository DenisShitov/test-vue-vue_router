<script setup lang="ts">
import TenderItem from './TenderItem.vue';
import { ITender } from '../../interfaces';

const {list} = defineProps<{
    list: ITender[]|null
}>()

</script>

<template>
    <transition-group name="list" tag="div" class="grid5x6">
        <tender-item v-for="i in list" :key="i.id" :item="i"/>
    </transition-group>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
}
</style>