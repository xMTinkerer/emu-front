async function request(loc) {
    const response = await fetch("http://localhost:8081"+loc)
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

window.addEventListener( "load", function() {
    console.log( 'Loaded window..' );
    request("/get-emu").then( (data) =>{
        console.log( 'get-emu data: ' + JSON.stringify( data ) );
        document.getElementById( "emu" ).src = data.result;
    });
})
