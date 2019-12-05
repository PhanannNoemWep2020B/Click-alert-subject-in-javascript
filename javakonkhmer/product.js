const url = "https://jsonplaceholder.typicode.com/albums";
fetch(url)
.then (response => response.json())
.then(data => {
    data.forEach(element => {
        console.log(element);
    })
}) 