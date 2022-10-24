import {onMounted} from "vue";

export function usePostsJSON() {
    const fetching = async () => {
    const api_url = "C:\\Users\\MR-REX\\Desktop\\test_rep\\dota_api\\src\\hooks\\posts.js"
    const response = await fetch(api_url)
    const data = await response.json()
        console.log(data)
    }
    onMounted(fetching)
    return {

    }
}