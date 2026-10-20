function goToTMS() {
    window.location.search = "?page=Time_Mgmt_Strats";
}

function goToSmrtGoal() {
    window.location.search = "?page=Smart_Goals";
}

function goToAdolBrain() {
    window.location.search = "?page=Teen_Brain";
}

function goToSclMed() {
    window.location.search = "?page=Social_Media_And_Mental_Health";
}

function goToResil() {
    window.location.search = "?page=Resilience";
}

function goToRationale() {
    window.location.search = "?page=Rationale";
}

async function toggleBG() {
    cookieStore.get("turnOffBG").then((val) => {
        if(val.value) {
            if(val.value === "yes") {
                alert("Turning On Background...");
                document.body.style.backgroundImage = "url('resources/BG.png')";
                document.body.style.backgroundSize = "250px 250px";
                cookieStore.set("turnOffBG", "no").then((val) => {
                    alert("Turned On.");
                }, (reason) => alert("Failed. Reason: " + reason));
            } else {
                alert("Turning Off Background...");
                document.body.style.backgroundImage = "none";
                document.body.style.backgroundColor = "black";
                cookieStore.set("turnOffBG", "yes").then((val) => {
                    alert("Turned Off");
                }, (reason) => alert("Failed. Reason: " + reason));
            }
        }
    });
}

let bg;
cookieStore.get("turnOffBG").then((val) => {
    if(val.value) bg = val.value; else bg = "none";
    console.log(val);
}, (reason) => {
    console.log(reason);
}).then(() => {
    if(bg === "yes") {
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "black";
    } else {
        document.body.style.backgroundImage = "url('resources/BG.png')";
        document.body.style.backgroundSize = "250px 250px";
    }
});

window.bg = bg;

switch(window.location.search) {
    case "?page=Time_Mgmt_Strats":
        document.body.innerHTML = "<h1>Time Management Strategies</h1>";
        break;
    case "?page=Smart_Goals":
        break;
    case "?page=Teen_Brain":
        break;
    case "?page=Social_Media_And_Mental_Health":
        break;
    case "?page=Resilience":
        break;
    case "?page=Rationale":
        break;
    default:
        break;
}