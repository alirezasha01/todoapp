<template>
  <div class="row">
    <div class="col-10">
      <p>{{ task }}</p>
    </div>
    <div class="col-1">
      <button @click="deleteArr(index)">click</button>
    </div>
    <div class="col-1">
      <p>s</p>
    </div>
  </div>
</template>

<script setup>
import {defineProps , defineEmits} from "vue";
defineProps({
  task: Array,
  index:Number
});
const emit = defineEmits('deleteTask')
const deleteArr = index =>{
  emit('deleteTask', index)
}
</script>

<style scoped>
div{
  color:white;
}
</style>