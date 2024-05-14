const button = document.getElementById('button')
button.addEventListener('click', async() => {
    const newPost = {
        title: 'a new post',
        body: '',
        userId: 1
    }
    //console.log(newPost);
    //console.log(JSON.stringify(newPost));

    await fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    body: JSON.stringify(newPost),
    Headers:{
        "Content-type": "application/json"
        }
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
})
