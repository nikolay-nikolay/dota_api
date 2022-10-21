<template>
    <button @click="request">Click me</button>
</template>
<script>
import {usePostsJSON} from "@/hooks/usePostsJSON";

export default {
    setup(){
      const {request} = usePostsJSON()
    }
}
</script>
<style >
    
</style>