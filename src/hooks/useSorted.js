import {ref, computed} from 'vue'

function useSorted(stats) {
    
    const sortedPosts = computed(() => {
        return [...stats.value].sort((a, b) => a.name?.localeCompare(b.name))
    })

    return {
         sortedPosts
    }
};
export default useSorted()