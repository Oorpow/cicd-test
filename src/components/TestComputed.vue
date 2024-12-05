<script setup lang="ts">
import { computed, nextTick, ref, defineAsyncComponent } from 'vue';
import Loading from './Loading.vue';

const currentItem = ref(1)

const list = ref([
  { id: 1, name: 'zz' },
  { id: 2, name: 'aa' },
  { id: 3, name: 'bb' },
  { id: 4, name: 'cc' },
  { id: 5, name: 'dd' },
])

const compareIsCurrent = (item: any) => {
  if (item.id === currentItem.value) {
    return `active`
  }
  return ''
}

const isExistList = computed(() => {
  return list.value.length > 0
})

const num = ref(1)
const h2DomRef = ref<HTMLElement | null>(null)

const handleIncrement = async() => {
  num.value++;
  await nextTick();
}

const AsyncComp = defineAsyncComponent({
  loader: () => import('./AsyncComponent.vue'),
  loadingComponent: Loading
})
</script>

<template>
  <div v-for="item in list" :key="item.id">
    <span :class="compareIsCurrent(item)">{{ item.name }}</span>
    <template v-if="isExistList">
      <span>list bu wei kong</span>
    </template>
  </div>
  <Suspense>
    <template #default>
      <component :is="AsyncComp" />
    </template>
    <template #fallback>
      <Loading />
    </template>
  </Suspense>
  <div>
    <h2 ref="h2DomRef">{{ num }}</h2>
    <button @click="handleIncrement">click</button>
  </div>
</template>

<style>
.active {
  color: red;
}
</style>

