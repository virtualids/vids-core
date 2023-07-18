let firstTime = localStorage.getItem("first_time");

if (!firstTime) {
    localStorage.setItem("openWindow", "windowInScreen");




    //
    localStorage.setItem("first_time", "1");
    console.log("First time to the website?");
}

let openWindow = localStorage.getItem("openWindow");

if (openWindow === "windowInScreen") {
    document.getElementById("windowInScreen").checked = true;
} else if (openWindow === "newTab") {
    document.getElementById("newTab").checked = true;
} else if (openWindow === "newWindow") {
    document.getElementById("newWindow").checked = true;
} else {
    localStorage.setItem("openWindow", "windowInScreen");
}

let saveButton = document.getElementById("saveSettingsButton");
saveButton.onclick = function() {
    if (document.getElementById("windowInScreen").checked === true) {
        localStorage.setItem("openWindow", "windowInScreen");
    } else if (document.getElementById("newTab").checked === true) {
        localStorage.setItem("openWindow", "newTab");
    } else if (document.getElementById("newWindow").checked === true) {
        localStorage.setItem("openWindow", "newWindow");
    } else {
        localStorage.setItem("openWindow", "windowInScreen");
    }
}