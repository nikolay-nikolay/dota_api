<template>
  <navbar></navbar>
  <div class="app">
    <router-view/>
  </div>
</template>

<script>
import Navbar from "@/components/NavBar";
export default {
  components: {
    Navbar
  }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: #262A34;
  color: white;
}
.app {
  width: 1400px;
  margin-left: auto;
  margin-right: auto;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

</style>
