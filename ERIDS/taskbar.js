


document.getElementById("messagesBar").style.display = "flex";

function changeScreen(path) {
    switch (path) {
        case "home":
            clearBars();
            document.getElementById("homeBar").style.display = "flex";
            document.getElementById("eridsViewer").src = "modules/home/home.html";
            break;
        case "messages":
            clearBars();
            document.getElementById("messagesBar").style.display = "flex";
            document.getElementById("eridsViewer").src = "modules/messages/messages.html";
            break;
        case "wx":
            clearBars();
            document.getElementById("wxBar").style.display = "flex";
            document.getElementById("eridsViewer").src = "modules/wx/wx.html";
            break;
        case "atcdocs":
            clearBars();
            document.getElementById("atcdocsBar").style.display = "flex";
            document.getElementById("eridsViewer").src = "modules/atcdocs/atcdocs.html";
            break;
        case "charts":
            clearBars();
            document.getElementById("chartsBar").style.display = "flex";
            document.getElementById("eridsViewer").src = "modules/charts/charts.html";
            break;
        case "search":
            clearBars();
            document.getElementById("searchBar").style.display = "flex";
            document.getElementById("eridsViewer").src = "modules/search/search.html";
            break;
        case "resector":
            clearBars();
            document.getElementById("resectorBar").style.display = "flex";
            document.getElementById("eridsViewer").src = "modules/resector/resector.html";
            break;
        case "help":
            clearBars();
            document.getElementById("helpBar").style.display = "flex";
            document.getElementById("eridsViewer").src = "modules/help/help.html";
            break;
        case "lookup":
            clearBars();
            document.getElementById("lookupBar").style.display = "flex";
            document.getElementById("eridsViewer").src = "modules/lookup/lookup.html";
            break;
    }
}

function clearBars() {
    const allBars = document.querySelectorAll(".top-row");

    allBars.forEach(bar => {
        bar.style.display = "none";
    });
}