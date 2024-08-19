<script setup lang="ts">
import TenderList from '../components/tender/TenderList.vue';
import Paginator from '../components/misc/Paginator.vue';
import Search from '../components/misc/Search.vue'
import Spinner from '../components/misc/Spinner.vue'
import { useRouter } from 'vue-router';
import { useFetch } from '../components/api/fetch';
import { ITendersData, ITendersQueryError } from '../interfaces';
import { Ref, computed, toValue, watch, ref } from 'vue';
import { LocationQueryValue, useRoute } from 'vue-router';

const route = useRoute()
const router = useRouter()

const page = computed({
    get: () => route.query.page || 1,
    set: (value: LocationQueryValue) => {
        router.replace({ query: { page: value } })
    }
})

const url = computed(() => `https://api.test-webest.ru/list/?page=${page.value}`)

const { data, error }: {data: Ref<ITendersData|null>, error: Ref<ITendersQueryError|null>} = useFetch(() => toValue(url))

const searchValue: Ref<string> = ref('')

const filteredList = computed(() => {
    if(!data.value) return null
    const array = data.value.data.filter(el => el.title.toLowerCase().includes(searchValue.value.toLowerCase()))
    if (array.length > 30) array.length = 30
    return array
})

watch(error, () => {
    if(error.value) {
        alert(error.value.message)
        router.replace({ query: { page: '1' } })
    }
})
</script>

<template>
    <section></section>
    <section>

        <search @onSubmit="(v) => searchValue = v"/>

    </section>

    <section>

        <transition name="fade">
            <tender-list v-if="data" :list="filteredList"/>
        </transition>

        <transition name="fade">
            <spinner v-if="!data" class="loading"/>
        </transition>

    </section>

    <section>

        <transition name="fade">
            <paginator 
                v-if="data?.page_count"
                @change="(p) => page = p.toString()"
                :pages="data.page_count" 
                :current="data.page_number"
            />
        </transition>

    </section>

</template>