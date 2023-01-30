<template>
  <div class="row">
    <div class="col-10">
      <p>{{ task }}</p>
    </div>
    <div class="col-1">
      <button @click="deleteArr(index)">click</button>
    </div>
    <div class="col-1">
      <button @click="doneArr(index)">click</button>
    </div>
  </div>
</template>

<script setup>
import {defineProps , defineEmits} from "vue";
defineProps({
  task: Array,
  index:Number
});
const emit = defineEmits(['deleteTask',"doneTask"])
const deleteArr = index =>{
  emit('deleteTask', index)
}
const doneArr = index =>{
  emit('doneTask', index)
}
</script>

<style scoped>
div{
  color:white;
}
</style>