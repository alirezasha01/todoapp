<template>
  <header-task/>
  <router-view></router-view>
</template>

<script setup>
import headerTask from '@/components/headerTask.vue'
</script>

<style>
@import url('https://v1.fontapi.ir/css/Vazir');

div {
  padding: 0;
  margin: 0;
  font-family: Vazir, sans-serif;
}
body{
  background: #212529 !important;
  background-size: auto;
}

</style>
