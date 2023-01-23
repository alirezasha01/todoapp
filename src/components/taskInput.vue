<template>
    <div>
    <input v-model="text" type="text">
    <button @click="taskFun">save</button>
    <p v-for="(task , index) in tasks" :key="index"> {{ task }}</p>
</div>
</template>

<script setup>
import { ref , reactive} from 'vue';
let tasks = reactive([])
let text = ref("");
const taskFun = () =>{
    tasks.push(text.value)
    text.value=""
}
</script>

<style scoped>
input{
    font-size: 30px;
    border-radius: 10px;
    padding: 5px
}
button{
    font-size: 30px;
    border-radius: 10px;
    padding: 5px;
    cursor: pointer;
    background-color: rgb(73, 240, 73);
    color: white;
    border: none;
}
button:hover{
    transition: background 1s;
    background-color: darkgreen;
}
p{
    border: 0.4px solid black;
    padding: 3px;
    margin:10px;
    font-size: 20px;
    border-radius: 10px;
}
</style>