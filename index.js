function submitData(name, email) {
    const userData = {
        name: name,
        email: email
    };
    const config = {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(userData)
    };

    return fetch("http://localhost:3000/users", config)
        .then(response => response.json())
        .then(data => {
        const newId = data.id;
        document.body.innerHTML += newId;
    })
        .catch(error => {
        document.body.innerHTML += error.message;
        throw error;
    });
}