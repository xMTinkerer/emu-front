async function request(loc) {
    const response = await fetch("http://10.20.36.40:8080"+loc)
    return response.json();
}

// Eat
document.getElementById("eat").addEventListener("click", function() {
    // send request
    request("/eat").then((data) => {
        console.log(data);
    });
});

// Sleep
document.getElementById("sleep").addEventListener("click", function() {
    // send request
    request("/sleep").then((data) =>{
        console.log(data);
    });
});
