<script setup lang="ts">
const {pages, current} = defineProps<{
    pages: number
    current: number
}>()

const emit = defineEmits(['change'])
</script>

<template>
    <ul class="paginator">
        <li 
            v-for="page in pages" 
            @click="emit('change',page)"
            :class="['paginator-item', current === page && 'active']" 
        >
            {{ page }}
        </li>
    </ul>
</template>