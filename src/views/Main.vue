<template>
    <button @click="">Click me</button>
</template>
<script>
import {usePostsJSON} from "@/hooks/usePostsJSON";

export default {
    setup(){
      const {} = usePostsJSON()
    }
}
</script>
<style >
    
</style>