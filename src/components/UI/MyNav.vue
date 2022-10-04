<template>
  
    <button class="btn-nav">
    <slot></slot>
  </button>

</template>

<script>
export default {
  name: 'my-nav'
}
</script>

<style scoped>

.btn-nav {
  padding: 10px 35px;
  background: none;
  color: #fff;
  border: none;
  background-color: #383838;
  cursor:pointer;
  border-right: 1px solid yellow;
}

.btn-nav:nth-of-type(1) {
  padding: 10px 35px;
  background: none;
  color: #fff;
  border: none;
  background-color: #383838;
  cursor:pointer;
  border-right: 1px solid yellow;
  border-left: 1px solid yellow;
}



</style>