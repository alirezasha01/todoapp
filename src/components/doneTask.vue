<template>
  <div v-for="(task , index) in listTask" :key="index">
    <show-task :task="task"/>
  </div>
</template>

<script setup>
import showTask from "./all/showTask.vue"

</script>

<style scoped>

</style>