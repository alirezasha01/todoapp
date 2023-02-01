<template>
  <div class="row brd">
    <div class="col-8">
      <p>{{ task }}</p>
    </div>
    <div class="col-2">
      <button @click="deleteArr(index)" class="btn btn-sm btn-danger">Undone</button>
    </div>
    <div class="col-2">
      <button @click="doneArr(index)" class="btn btn-sm btn-success">Done</button>
    </div>
  </div>
</template>

<script setup>
import {defineProps, defineEmits} from "vue";

defineProps({
  task: Array,
  index: Number
});
const emit = defineEmits(['deleteTask', "doneTask"])
const deleteArr = index => {
  emit('deleteTask', index)
}
const doneArr = index => {
  emit('doneTask', index)
}
</script>

<style scoped>
div {
  color: white;
}

.delIcon {
  color: red;
}

.brd {
  border: rgba(255, 255, 255, 0.2) 1px solid;
  border-radius: 6px;
  padding-top: 10px;
  margin-bottom: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>