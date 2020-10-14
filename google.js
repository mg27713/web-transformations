if (location.href.includes("search"))
    location.replace("https://google.com");

// addEventListener("load", () => {
//     // alert("running!");
    
//     antiGoogleStuff();
// });

function antiGoogleStuff() {
    // let uglyLogo = document.getElementById("hplogo");
    
    // if (uglyLogo !== null) {
    //     uglyLogo.src = "";
    //     alert("replaced?");
    // } else if (confirm("Continue?"))
    //     requestAnimationFrame(antiGoogleStuff);
    
    //for (let search of document.getElementsByTagName("input")) {
    let search = document.getElementsByTagName("input")[5];
        search.style.display = "none";
    search.parentElement.parentElement.parentElement.style.visibility = "hidden";

        
        try {
            let placeholder = document.createElement("div");
            placeholder.innerHTML = 'Google Search is prohibited on this device. Did you mean to go to <a href="https://duckduckgo.com">DuckDuckGo</a>?';
            placeholder.style.visibility = "visible";
            placeholder.style.textAlign = "center";
            search.parentElement.insertBefore(placeholder, search);
        } catch (e) {
            alert(e);
            return;
        }
    
    for (let input of document.getElementsByTagName("input"))
        if (input.type == "submit")
            input.style.display = "none";
    //}
}

addEventListener("load", antiGoogleStuff);
