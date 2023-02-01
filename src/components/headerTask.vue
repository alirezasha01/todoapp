<template>
  <nav class="navbar navbar-expand bg-dark" data-bs-theme="dark">
    <a class="navbar-brand mr-5" href="#">To Do List</a>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">All</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/done">Done</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/undone">Undone</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
.router-link-active {
  color: white !important;
}

.mr-5 {
  margin-left: 10px !important;
}
</style>