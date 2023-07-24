document.getElementById("messagesBar").style.display = "flex";


function changeScreen(path) {
    switch (path) {
        case "home":
            clearBars();
            document.getElementById("homeBar").style.display = "flex";
            document.getElementById("messagesEmbed").style.display = "none";
            document.getElementById("homeEmbed").style.display = "block";
            document.getElementById("wxEmbed").style.display = "none";
            document.getElementById("atcdocsEmbed").style.display = "none";
            document.getElementById("chartsEmbed").style.display = "none";
            document.getElementById("searchEmbed").style.display = "none";
            document.getElementById("resectorEmbed").style.display = "none";
            document.getElementById("helpEmbed").style.display = "none";
            document.getElementById("lookupEmbed").style.display = "none";
            break;
        case "messages":
            clearBars();
            document.getElementById("messagesBar").style.display = "flex";
            document.getElementById("messagesEmbed").style.display = "block";
            document.getElementById("homeEmbed").style.display = "none";
            document.getElementById("wxEmbed").style.display = "none";
            document.getElementById("atcdocsEmbed").style.display = "none";
            document.getElementById("chartsEmbed").style.display = "none";
            document.getElementById("searchEmbed").style.display = "none";
            document.getElementById("resectorEmbed").style.display = "none";
            document.getElementById("helpEmbed").style.display = "none";
            document.getElementById("lookupEmbed").style.display = "none";
            break;
        case "wx":
            clearBars();
            document.getElementById("wxBar").style.display = "flex";
            document.getElementById("messagesEmbed").style.display = "none";
            document.getElementById("homeEmbed").style.display = "none";
            document.getElementById("wxEmbed").style.display = "block";
            document.getElementById("atcdocsEmbed").style.display = "none";
            document.getElementById("chartsEmbed").style.display = "none";
            document.getElementById("searchEmbed").style.display = "none";
            document.getElementById("resectorEmbed").style.display = "none";
            document.getElementById("helpEmbed").style.display = "none";
            document.getElementById("lookupEmbed").style.display = "none";
            break;
        case "atcdocs":
            clearBars();
            document.getElementById("atcdocsBar").style.display = "flex";
            document.getElementById("messagesEmbed").style.display = "none";
            document.getElementById("homeEmbed").style.display = "none";
            document.getElementById("wxEmbed").style.display = "none";
            document.getElementById("atcdocsEmbed").style.display = "block";
            document.getElementById("chartsEmbed").style.display = "none";
            document.getElementById("searchEmbed").style.display = "none";
            document.getElementById("resectorEmbed").style.display = "none";
            document.getElementById("helpEmbed").style.display = "none";
            document.getElementById("lookupEmbed").style.display = "none";
            break;
        case "charts":
            clearBars();
            document.getElementById("chartsBar").style.display = "flex";
            document.getElementById("messagesEmbed").style.display = "none";
            document.getElementById("homeEmbed").style.display = "none";
            document.getElementById("wxEmbed").style.display = "none";
            document.getElementById("atcdocsEmbed").style.display = "none";
            document.getElementById("chartsEmbed").style.display = "block";
            document.getElementById("searchEmbed").style.display = "none";
            document.getElementById("resectorEmbed").style.display = "none";
            document.getElementById("helpEmbed").style.display = "none";
            document.getElementById("lookupEmbed").style.display = "none";
            break;
        case "search":
            clearBars();
            document.getElementById("searchBar").style.display = "flex";
            document.getElementById("messagesEmbed").style.display = "none";
            document.getElementById("homeEmbed").style.display = "none";
            document.getElementById("wxEmbed").style.display = "none";
            document.getElementById("atcdocsEmbed").style.display = "none";
            document.getElementById("chartsEmbed").style.display = "none";
            document.getElementById("searchEmbed").style.display = "block";
            document.getElementById("resectorEmbed").style.display = "none";
            document.getElementById("helpEmbed").style.display = "none";
            document.getElementById("lookupEmbed").style.display = "none";
            break;
        case "resector":
            clearBars();
            document.getElementById("resectorBar").style.display = "flex";
            document.getElementById("messagesEmbed").style.display = "none";
            document.getElementById("homeEmbed").style.display = "none";
            document.getElementById("wxEmbed").style.display = "none";
            document.getElementById("atcdocsEmbed").style.display = "none";
            document.getElementById("chartsEmbed").style.display = "none";
            document.getElementById("searchEmbed").style.display = "none";
            document.getElementById("resectorEmbed").style.display = "block";
            document.getElementById("helpEmbed").style.display = "none";
            document.getElementById("lookupEmbed").style.display = "none";
            break;
        case "help":
            clearBars();
            document.getElementById("helpBar").style.display = "flex";
            document.getElementById("messagesEmbed").style.display = "none";
            document.getElementById("homeEmbed").style.display = "none";
            document.getElementById("wxEmbed").style.display = "none";
            document.getElementById("atcdocsEmbed").style.display = "none";
            document.getElementById("chartsEmbed").style.display = "none";
            document.getElementById("searchEmbed").style.display = "none";
            document.getElementById("resectorEmbed").style.display = "none";
            document.getElementById("helpEmbed").style.display = "block";
            document.getElementById("lookupEmbed").style.display = "none";
            break;
        case "lookup":
            clearBars();
            document.getElementById("lookupBar").style.display = "flex";
            document.getElementById("messagesEmbed").style.display = "none";
            document.getElementById("homeEmbed").style.display = "none";
            document.getElementById("wxEmbed").style.display = "none";
            document.getElementById("atcdocsEmbed").style.display = "none";
            document.getElementById("chartsEmbed").style.display = "none";
            document.getElementById("searchEmbed").style.display = "none";
            document.getElementById("resectorEmbed").style.display = "none";
            document.getElementById("helpEmbed").style.display = "none";
            document.getElementById("lookupEmbed").style.display = "block";
            break;
    }
}

function clearBars() {
    const allBars = document.querySelectorAll(".top-row");

    allBars.forEach(bar => {
        bar.style.display = "none";
    });
}