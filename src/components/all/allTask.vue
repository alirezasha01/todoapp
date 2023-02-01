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
import axios from "axios"

const getTask = ref("")
const listTask = reactive([])

const doneTask = (index) => {
  listTask.splice(index, 1)
  axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(function (response) {
        console.log(response);
        // change completed to true
      })
      .catch(function (error) {
        console.log(error);
      });
}
const deleteTask = (index) => {
  listTask.splice(index, 1)
  axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(function (response) {
        console.log(response);
        // change completed to false
      })
      .catch(function (error) {
        console.log(error);
      });
}
const addTask = () => {
  if (getTask.value !== "") {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      "title" : getTask.value,
      "completed" : null
    })
        .then(function (response) {
          console.log(response);
          listTask.push(getTask.value)
          getTask.value = ""
        })
        .catch(function (error) {
          console.log(error);
        });
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