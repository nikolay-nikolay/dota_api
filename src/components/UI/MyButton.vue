<template>
    <button class="btn">
    <slot></slot>
  </button>

</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped>

.btn {
  padding: 10px 35px;
  background: none;
  color: #fff;
  border: none;
  background-color: #383838;
  cursor:pointer;

}

</style>