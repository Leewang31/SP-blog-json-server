const BASE_URL = 'http://localhost:3000/';
const BLOG_URL = 'http://localhost:3000/blogs/';

export const fetchDelete =(url, id)=>{
    fetch(`${url}${id}`, {
        method: "Delete"
    })
        .then(() => {
            alert('삭제되었습니다')
            window.location.href = BASE_URL;
        })
        .catch((error) => {
            console.error('Error', error);
        })
}
export const fetchPost =(url, data)=>{
    fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })
        .then(() => {
            alert('저장되었습니다')
            window.location.href = BASE_URL;
        })
        .catch((error) => {
            console.error('Error', error);
        })
}