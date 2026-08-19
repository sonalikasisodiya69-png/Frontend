fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        console.log(response.status);
        console.log(response.ok);
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });