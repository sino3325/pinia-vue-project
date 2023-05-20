<!--==================== template ====================-->
<template>
  <h1>ボタン1</h1>
  <section class="flex gap-x-1 bg-blue-600 p-1 w-fit rounded-lg">
    <button type="button" class="bg-blue-400 hover:bg-blue-500 text-white font-bold w-40 aspect-square rounded-lg font-mono" @click="store.addFirstCount(2)">firstCount: {{ store.firstCount }}</button>

    <button type="button" class="bg-blue-400 hover:bg-blue-500 text-white font-bold w-40 aspect-square rounded-lg font-mono" @click="store.addSecondCount(5)">secondCount: {{ store.secondCount }}</button>
    
    <button type="button" class="bg-blue-400 hover:bg-blue-500 text-white font-bold w-40 aspect-square rounded-lg font-mono" @click="add(6)">HogeCounter: {{ storeSecond.count }}</button>
    
    <button type="button" class="bg-blue-400 hover:bg-blue-500 text-white font-bold w-40 aspect-square rounded-lg font-mono" @click="reset">リセット</button>
    
    <button type="button" class="bg-blue-400 hover:bg-blue-500 text-white font-bold w-40 aspect-square rounded-lg font-mono" @click="addHoge">追加</button>
  </section>
</template>

<!--==================== script ====================-->
<script setup>
import { usePersistentCounterStore } from '../stores/counter'
const store = usePersistentCounterStore();
import { useHogeCounterStore } from '../stores/hogeCounter'
const storeSecond = useHogeCounterStore();

const reset = () => {
  store.$reset();
  storeSecond.$reset();
};
const addHoge = () => {
  store.$patch({
    firstCount: store.firstCount = 9,
    secondCount: store.secondCount + 2
  });
};
const add = (number) => {
  storeSecond.count += number;
};
</script>

<!--==================== style ====================-->
<style scoped lang="scss">

</style>