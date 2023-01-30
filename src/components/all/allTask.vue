<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col"></div>
      <div class="col-md-6">
        <div class="input-group mb-3 mt-3 shadow-input">
          <input v-model="getTask" type="text" class="form-control text-white bg-dark p-2" placeholder="Add a new task">
          <button @click="addTask" class="btn btn-success" type="button">ADD</button>
        </div>
        <div v-for="(task , index) in listTask" :key="index">
          <show-task :task="task" :index="index" @deleteTask="deleteTask" @doneTask="doneTask"/>
        </div>
      </div>
      <div class="col"></div>
    </div>
  </div>

</template>

<script setup>
import {reactive, ref} from "vue";
import showTask from "./showTask.vue"

const getTask = ref("")
const listTask = reactive([])
const listDel = reactive([])
const ListDone = reactive([])

const doneTask = (index)=>{
  ListDone.push(listTask[index])
  listTask.splice(index,1)
}
const deleteTask = (index) =>{
  listDel.push(listTask[index])
  listTask.splice(index,1)
}
const addTask = () => {
  if (getTask.value !== "") {
    listTask.push(getTask.value)
    getTask.value = ""
  }
}
</script>

<style scoped>
input::placeholder {
  color: white;
  opacity: 1;
}

button {
  border: 1px white solid;
}

.shadow-input {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

</style>