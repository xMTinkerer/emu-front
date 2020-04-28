async function request(loc) {
    const response = await fetch("https://emu-back-msteex5udq-uw.a.run.app"+loc)
    return response.json();
}

// Eat
document.getElementById("eat").addEventListener("click", function() {
    // send request
    request("/eat").then((data) => {
        console.log(data);
        alert(data["message"]);
    });
});

// Sleep
document.getElementById("sleep").addEventListener("click", function() {
    // send request
    request("/sleep").then((data) =>{
        console.log(data);
        alert(data["message"]);
    });
});
