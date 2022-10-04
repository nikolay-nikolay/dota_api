<template>
  <div class="navbar">
    <div @click="$router.push('/')" class="logo">DotaAPI</div>
    <div class="navbar__btns">
    <span class="line"></span>
      <my-nav  @click="$router.push('/heroes')">Heroes</my-nav> <span class="line"></span>
      <my-nav  @click="$router.push('/teams')">Teams</my-nav> <span class="line"></span>
      <my-nav  @click="$router.push('/players')">Players</my-nav> <span class="line"></span>
      <my-nav  @click="$router.push('/matches')">Matches</my-nav> <span class="line"></span>
      <my-nav  @click="$router.push('/rankings')">Rankings</my-nav> <span class="line"></span>
      <my-nav  @click="$router.push('/forums')">Forums</my-nav> <span class="line"></span>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.navbar {
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  height: 100px;
  width: 1400px;
  background-color: #383838;
  display: flex;
  align-items: center;
  padding: 0 15px;
  box-shadow: 0px 2px 4px 4px rgba(0, 0, 0, 0.25);
  
}
.line{
    background:#998C12;
    color: #998C12;
    background-color:#998C12;
}
.navbar__btns {
  align-items: center;
  display: flex;
  margin-left: 93px;
}
.navbar__btns:hover{
    
}
.logo{
    font-weight: 400;
    font-size: 32px;
    line-height: 39px;
    color: #CFBB09;
    background: #383838;
    border: 2px solid #CFBB09;
    padding: 5px 60px;
    cursor:pointer;
}
</style>