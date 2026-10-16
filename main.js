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

switch(window.location.search) {
    case "?page=Time_Mgmt_Strats":
        document.body.innerHTML = "<p>Hello Everybody My Name Is Market Player And Welc<br><br>[Session Terminated]</p>";
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