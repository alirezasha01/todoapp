<template>
  <div class="container-fluid">
  <div class="row">
    <div class="col"></div>
    <div class="col-6">
      <div class="input-group mb-3 mt-3 shadow-input">
        <input type="text" class="form-control text-white bg-dark p-2" placeholder="Add a new task">
        <button class="btn btn-success" type="button">ADD</button>
      </div>
    </div>
    <div class="col"></div>
  </div>
  </div>

</template>

<script setup>

</script>

<style scoped>
input::placeholder {
  color: white;
  opacity: 1;
}
button{
  border: 1px white solid;
}
.shadow-input{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>