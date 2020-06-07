async function request(loc) {
    const response = await fetch("https://emu-back-4truud5coq-uw.a.run.app"+loc)
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

var emuImgSrc = "/img/HatOn.png";




document.getElementById( "emu" ).addEventListener( "load", function() {
    console.log( 'Loaded emu..' );
    request("/getEmu").then( (data) =>{
        console.log( 'getEmu data: ' + data );
        document.getElementById( "emu" ).src = data.result;
    });
})
