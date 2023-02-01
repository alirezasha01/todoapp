<template>
  <div class="container-fluid">
    <div v-for="list in listDel" :key="list.id">
      <div class="row" v-if="list.completed == false">
        <div class="col"></div>
        <div class="col-md-6">
          <div class="brd">
            <p>{{ list.title }}</p>
          </div>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import {ref} from "vue"

const listDel = ref([])
axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(function (response) {
      listDel.value = response.data
    })
    .catch(function (error) {
      console.log(error);
    });
</script>

<style scoped>
div {
  color: white;
}

.brd {
  border: rgba(255, 255, 255, 0.2) 1px solid;
  border-radius: 6px;
  padding-top: 10px;
  margin-bottom: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
}
</style>