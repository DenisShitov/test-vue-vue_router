<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
    <main>
        <div class="container">
            <router-view v-slot="{ Component }">
                <transition name="fade">
                    <component :is="Component" />
                </transition>
            </router-view>
        </div>
    </main>
</template>