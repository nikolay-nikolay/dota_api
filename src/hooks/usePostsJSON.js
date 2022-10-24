import {onMounted} from "vue";

export function usePostsJSON() {
    const fetching = async () => {
    const api_url = "posts.json"
    const response = await fetch(api_url)
    const data = await response.json()
        console.log(data)
    }
    onMounted(fetching)
    return {

    }
}