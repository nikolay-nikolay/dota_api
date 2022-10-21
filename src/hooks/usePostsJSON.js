import {onMounted} from "vue";

export function usePostsJSON() {
    const requestURL = '@/hooks/post'
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send("@/hooks/post");
    console.log("works", request)
    request.onload = function() {
        let data = request.response;
        console.log(data)
    }
    return {
        request
    }
}