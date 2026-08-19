function getUsers() {

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });

}
fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "Sonalika",
        email: "sonalika@gmail.com"
    })
})
.then(response => response.json())
.then(data => console.log(data));
fetch("https://jsonplaceholder.typicode.com/users/1", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "Updated Name"
    })
})
.then(response => response.json())
.then(data => console.log(data));
fetch("https://jsonplaceholder.typicode.com/users/1", {
    method: "DELETE"
})
.then(response => {
    console.log(response.status); // 200 ya 204
    console.log("Deleted Successfully");
});