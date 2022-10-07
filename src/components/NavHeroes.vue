<template>
    <div class="navbar">
        <div class="navbar__btns">
            <button class="btn" @click="$router.push('/heroes/pro')">PROFESSIONAL</button> 
            <button class="btn" @click="$router.push('/heroes/publick')">PUBLICK</button> 
            <button class="btn" @click="$router.push('/heroes/turbo')">TURBO</button> 
        </div>
  </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.navbar{
    margin-top: 20px;
    background: #313347;
}
.navbar__btns{
    padding: 20px 0;
    background: #313347;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: 600px;
    cursor: pointer;
}
.btn:hover{
    border-bottom: 2px solid white
}

.btn{
    margin-right: 50px;
    border: none;
    cursor: pointer;
}
.btn:last-of-type{
    margin-right: 0;
}
</style>