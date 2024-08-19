<script setup lang="ts">
import { ITender, ITendersQueryError } from '../interfaces';
import { useFetch } from '../components/api/fetch';
import { useRouter } from 'vue-router';
import { Ref, computed, toValue, watch } from 'vue';

const { id } = defineProps<{ id: number }>()

const router = useRouter()

const url: Ref<string> = computed(() => `https://api.test-webest.ru/element/?id=${id}`)

const { data, error }: {data: Ref<ITender|null>, error: Ref<ITendersQueryError|null>} = useFetch(() => toValue(url))

watch(error, () => {
    if(error.value) {
        alert(error.value.message)
        router.push({ name: 'home', query: { page: '1' } })
    }
})

</script>

<template>
    <section>

        <router-link  
            :to="{ name: 'home' }" 
        >
            &#8592;&nbsp;Назад
        </router-link>

    </section>
    
    <section>

        <transition name="fade">
            <div v-if="data" class="">
                <h1 class="title">{{ data.title }}</h1>
                <p>{{ data.description }}</p>
            </div>
        </transition>
        
    </section>

</template>