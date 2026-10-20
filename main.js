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
        document.body.innerHTML = "<h1>Time Management Strategies</h1><h2>Pomodoro Technique</h2>" +
        "<p>Developed by Francesco Cirillo in the late 1980s, the Pomodoro Technique is a time management strategy focused on scheduled breaks. This strategy involves breaking your work into 'pomodoros' (which are 25 minute work blocks), then putting 5 minute breaks intermittently. A completion of 4 work-break pairs, you take a 20 minute break.</p>" +
        "<details><summary>What Skills Does This Technique Improve?</summary><p>The Pomodoro Technique improves your ability to plan effectively, manage stress, avoid distractions, single-task, and set priorities. It also develops the fundamental skill of saying 'no' to things.</p></details><details><summary>What Issues Does This Technique Solve?</summary>" +
        "<p>The Pomodoro Technique fixes ineffective schedules, makes skipping breaks a prohibited feature, rids you of multitasking, and can prevent missed deadlines.</p></details><details><summary>What Are Some Downfalls Of This Technique?</summary><p>The downfalls of the Pomodoro Technique are mainly due to the methodology of the technique. Because of the strict 25/5 schedule, you can become counterproductive by stopping while doing well, which may hinder your progress.</p></details>" +
        "<h2>Eat The Frog Technique</h2><p>Probably the most weirdly named, the 'Eat The Frog' technique involves completing your 'frog' before doing any other tasks. The 'frog' in this scenario is task you are avoiding, whether it be difficult, time consuming, or demanding. A 'frog' can also be any task that is of greater importance than the rest.</p>" +
        "<details><summary>What Skills Does This Technique Improve?</summary><p>The 'Eat The Frog' Technique improves your ability to plan effectively, set priorities, and set SMART goals. It has similar skill improvement to the Pomodoro Technique.</p></details><details><summary>What Issues Does This Technique Solve?</summary><p>Similar to the Pomodoro Technique, the 'Eat The Frog' Technique also solves the problems of ineffective scheduling, multitasking, and missed deadlines. However, it does NOT solve skipping breaks because it does not do any schedueled breaks.</p></details>" +
        "<details><summary>What Are Some Downfalls Of This Technique?</summary><p>One downfall that the 'Eat The Frog' Technique has is that it creates a difficult start to the day, which can demotivate you. Another downfall is that it may be too rigid for dynamically changing tasks.</p></details>" +
        "<h2>To-Done List Technique</h2><p>The 'To-Done List' Technique, as the name implies, is a technique where you list all the tasks you have done, rather than listing all the tasks that need to be done.</p>" +
        "<details><summary>What Skills Does This Technique Improve?</summary><p>The 'To-Done List' Technique is similar to the Pomodoro Technique in that it can help with stress management. It can also help you plan better.</p></details>" +
        "<details><summary>What Issues Does This Technique Solve?</summary><p>While the 'To-Done List' Technique does not actally solve a lot of things, it does fix ineffective scheduling. Very well, might I add.</p></details>" +
        "<details><summary>What Are Some Downfalls Of This Technique?</summary><p>The main problem with the 'To-Done List' Technique is based around the fact that you cannot know the specific details of the tasks you have left to do. While you can get a vague idea of what is left, there's no way of determining WHEN you need to get those done, or how long they will take to complete.</p></details>" +
        "<h2>To-Don't List Technique</h2><p>The 'To-Don't List' Technique is similar to the 'To-Done List' Technique in that it is a reimagining of the archaic 'To-Do List' concept, except it changes the idea from listing things you have done to listing things you will NOT be doing. Usually, the activities on this list are detrimental to your productivity.</p>" +
        "<details><summary>What Skills Does This Technique Improve?</summary><p>The skills the 'To-Don't List' Technique improves are the same as they are for the 'To-Done' Technique. Those are effective planning and stress management.</p></details>" +
        "<details><summary>What Issues Does This Technique Solve?</summary><p>Similar to the 'To-Done List' Technique, the 'To-Don't List' Technique does not have many issues it solves. This pattern is mainly due to the 'To-____ List' format, as it does not manage time as much as it does organize it.</p></details>" +
        "<details><summary>What Are Some Downfalls Of This Technique?</summary><p>Similar to all the remixes of the classic 'To-Do List,' the 'To-Don't List' Technique has the problem of not specifying any actual tasks to do. While it may lead to more productivity if paired with an actual to-do list, by itself it will hinder the user with ambiguous tasks that must be done.</p></details>";
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