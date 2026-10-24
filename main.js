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

function goToHome() {
    window.location.search = "home";
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
    if(val && val.value) bg = val.value; else bg = "none";
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
        "<details><summary>What Are Some Downfalls Of This Technique?</summary><p>Similar to all the remixes of the classic 'To-Do List,' the 'To-Don't List' Technique has the problem of not specifying any actual tasks to do. While it may lead to more productivity if paired with an actual to-do list, by itself it will hinder the user with ambiguous tasks that must be done.</p></details>" +
        "<div id='buttons'><button onclick='goToHome()'>Back</button></div>";
        break;
    case "?page=Smart_Goals":
        document.body.innerHTML = "<h1>SMART Goals</h1><h2>What Are SMART Goals?</h2><p>A SMART Goal is a goal that follows the 5 letter SMART acronym guidelines. The acronym goes as follows:" +
        "<br><br>Specific, Measurable, Attainable, Relevant, Timely.<br><br>These five standards are the key to making a SMART Goal. They make sure you have a working goal that can be completed. Without them, your goal may be incomplete or not structured to best help you complete it.</p>" +
        "<h2>Specific</h2><p>The 'Specific' part of the SMART acronym means that your goal pinpoints one specific thing. For example, lets look at two goals, and see whether or not they are specific enough to meet the 'Specific' part of the SMART acronym. Here is the first one:<br><br><span style='color: red;'>My goal is to be successful in school.</span><br><br>What you may notice about this goal is that it wants to achieve a vague sense of success. But what is success? Everyone has their own metric to what 'success' is. Now for this one:<br><br><span style='color: green;'>My goal is to achieve a 3.0+ GPA.</span><br><br>This goal is much better. A grade point average is an objective measure.</p>" +
        "<h2>Measurable</h2><p>The 'Measurable' part of the SMART acronym means that you can measure your progress towards this goal. A bad example of this is as follows:<br><br><span style='color: red;'>My goal is to be good at [video game].</span><br><br>Not only is this not specific, but it cannot be measured at all. Becoming good cannot be proven with raw data or numbers. Now lets look at a good example:<br><br><span style='color: green;'>My goal is to be top 50 players of all time in [video game].</span><br><br>With this goal, we can now measure our success. The 'top 50' part makes it so we can measure our success with the leaderboards.</p>" +
        "<h2>Attainable</h2><p>The 'Attainable' part of the SMART acronym means that you can achieve this goal in the time frame alloted. If there is no possible way for you to do your goal, then the goal is not attainable. For example, take this goal:<br><br><span style='color: red;'>My goal is to do 5000 math problems this week.</span><br><br>While this looks somewhat like a SMART goal, it is not attainable. 5000 in a week means doing a little over 714 questions every day, a little under 30 every hour, and 1 every two minutes. Doing one question every two minutes of every day without sleep or ANY breaks whatsoever is physically impossible for anyone to do unless the questions are super easy and can be done in quick succession. Now lets look at an actually attainable goal:<br><br><span style='color: green;'>My goal is to do at least 5 math questions per day.</span><br><br>This is a much more realistic timeline. 5 questions per day id absolutely attainable for most people.</p>" +
        "<h2>Relevant</h2><p>The 'Relevant' part of the SMART acronym means that the goal actually impacts your life, personal interests, or future. The goal is not relevant if it's only an arbitrary goal that serves no purpose. Take this goal, for example:<br><br><span style='color: red;'>My goal is to play video games all day.</span><br><br>This is NOT a goal that is relevant to anything in your life. This is just something that should be a hobby, not a personal goal. Remember, a relevant goal should connect to something that impacts the world around you, not just some small thing you want to do. Look at the below example of a good SMART Goal:<br><br><span style='color: green;'>My goal is to reduce how much time I spend online.</span><br><br>This is a good, relevant goal. It connects to a personal priority (making sure you don't spend too much time on screens) and makes a SMART Goal out of it. This is how you should write your goals.</p>" +
        "<h2>Timely</h2><p>The 'Timely' part of the SMART acronym is the last part of the acronym, but is probably one of the most important parts. For a goal to be timely (or 'time-bound,' whichever you choose to call it), it must be bound to a time-frame. This is important because without a time-frame, the goal means nothing, as you will procrastinate progressing towards that goal. Look at this bad example of a goal:<br><br><span style='color: red;'>My goal is to earn $300.</span><br><br>You may notice that there is no time-frame for this goal. This is bad. Now, whoever set this goal will not actually make $300 in a time-frame that makes it useful (like in a week or month). They will also procrastinate making that $300 because it does not say it should all be collected at once. Now lets look at a good example of a goal:<br><br><span style='color: green;'>My goal is to earn $300 within two weeks.</span><br><br>Now this is a good goal. The time-frame makes sure the $300 will be collected in a meaningful manner, and they will not procrastinate because $300 is somewhat difficult to collect in two weeks.</p>" +
        "<h2>How To Connect It Together</h2><p>Now, after we know all this, we must connect all aspects together to make a fully functional SMART Goal. We must combine the precise nature of the 'Specific' part, the progress measurements of the 'Measurable' part, the possibility of completion in the 'Attainable' part, the real-world impacts of the 'Relevant' part, and the strict enough time-frame of the 'Timely' part. Below is a fully completed example of a SMART Goal:<br><br>My goal is to get a 3.0+ GPA by the end of the semester.<br><br>Lets go through it. It is specific because I clearly outlined what counts as success (having at least a 3.0 GPA), it is measurable because I can calculate my GPA to find out what it is, it is attainable because many people have gotten 3.0+ GPAs in their high-school career, it is relevant because having a good GPA will interest colleges in me, and it is timely because it has the end of the semester as a deadline. Should all those points be joined by semicolons instead of commas? Who knows...</p>" +
        "<h2>Other Sources</h2><p>Here are some other sources for SMART Goals:<br><br><a href='https://www.snhu.edu/about-us/newsroom/education/what-are-smart-goals'>Southern New Hampshire University<a><br><br><a href='https://www.ucop.edu/local-human-resources/_files/performance-appraisal/How+to+write+SMART+Goals+v2.pdf'>University Of California</a></p>" +
        "<div id='buttons'><button onclick='goToHome()'>Back</button></div>";
        break;
    case "?page=Teen_Brain":
        document.body.innerHTML = "<h1>The Adolescent Brain</h1><h2>Synopsis</h2><p>Adolescence is the period of development from 10 to 19, or 10 to mid-20s in some sectors of psychology. This period is usually linked to an increase in dangerous activities such as stunts, harmful substance use, and other detrimental undertakings. Physical, psychological, & social aspects develop during this time.</p>" +
        "<h2>How Do Different Things Affect The Adolescent Brain?</h2><p>Many things impact the adolescent brain in ways that are good, such as reading makes you understand more about the world. But at the same time, many things pose a risk to the development of the adolescent brain. The following passages will tell about these things.</p>" +
        "<h2>Substance Use</h2><p>Substance use will negatively affect the adolescent brain. While it is not known if neuronal pruning and other forms of development and hindered by substance use, there is a higher likelihood of developing substance abuse problems if you start from an earlier age. However, studies involving rats with substances, particularly adolescent rats, shows brain damage. Also, other research literatures suggest that learning is inhibited when there is heavy use of substances.</p>" +
        "<h2>Social Media</h2><p>Now, I have already discussed social media & its negative affects on mental health, which correlates to the brain, <a href='?page=Social_Media_And_Mental_Health'>here</a>. But I will briefly explain why it is so much more dangerous to adolescents than to adults. I have summed it up to basically one thing: Peer Pressure. Teens usually want to fit in with their peers and be accepted, which may cause them to do dangerous things in order to get that.</p>" +
        "<h2>Sources</h2><p>Here Are The Sources For This:<br><br><a href='https://pmc.ncbi.nlm.nih.gov/articles/PMC2475802/'>National Library of Medicine</a><br><br><a href='https://pmc.ncbi.nlm.nih.gov/articles/PMC3399589/'>National Library of Medicine (Again)</a></p>" +
        "<div id='buttons'><button onclick='goToHome()'>Back</button></div>";
        break;
    case "?page=Social_Media_And_Mental_Health":
        document.body.innerHTML = "<h1>Social Media And Mental Health</h1><p>Social media is bad for your mental health. Sometimes. But why is this? One reason is the fact that most social media applications do not have enough people maintaining it, allowing for individuals to post things that are not safe. For example, the various TikTok challenges that have arose throughout the years. These challenges, while sometimes harmless, can also be harmful and lead to injuries or deaths." +
        " Another reason that these platforms are dangerous is that their algorithms are often optimized to not show things that will enlighten you are develop your opinions, but rather will only show things that are related to your past watches in hopes that you will also view that. The final reason that I will give for social media being harmful a lot of the time is that the environment is all about being better than the other people there. A lot of social medias have cultures that make people cherry pick things and edit them a superfluous amount just to look a certain way.</p>" +
        "<div id='buttons'><button onclick='goToHome()'>Back</button></div>";
        break;
    case "?page=Resilience":
        document.body.innerHTML = "<h1>Resilience</h1><h2>What Is Resilience?</h2><p>Resilience is the natural ability to perservere through hard things and come back from failure. It is usually characterized with the innate ability to be optimistic in all situations, learn from their failures, and have patience with things that are tedious. Another thing about resilience is that you have to <span style='font-style: italic;'>practice </span>resilience to become good at it. Practice is essential because resilience is a skill that you must keep practicing in order to get better at it.</p>" +
        "<h2>Sources</h2><p>Here Are The References For This:<br><br><a href='https://health.cornell.edu/resources/health-topics/building-resilience'>Cornell University</a></p>" +
        "<h2>How To Build Resilience</h2><p>There are many things you can do to build resilience. However, all of these take a lot of effort. One way of doing this is to actively socialize with your community. For example, you can interact with the people around you, such as fellow students, professors, or other people. Another thing you can do to build resilience is practice self-awareness & self-care. You can do this by managing your stress well, making time for spiritual things, or entertaining yourselves with fun things. Something else you can do to build resilience is make a growth mindset. To have a growth mindset, you must look at yourself as a learner who makes mistakes and realize that with enough hard work, you can achieve most things.</p>" +
        "<div id='buttons'><button onclick='goToHome()'>Back</button></div>";
        break;
    case "?page=Rationale":
        document.body.innerHTML = "<h2>Word Count: 213</h2><h1>My Rationale</h1><h2>What This Product Is</h2><p>My product is this personal website called the Well Being Toolkit. In this website, you will find many resources for various things related to well being. There are sections on time management, SMART goals, the adolescent brain, social media, mental health, and resilience. These sections contain tips, resources, or other things dedicated to helping with that specific subject.</p>" +
        "<h2>Why It Was Designed This Way</h2><p>I designed the website this way because it is very helpful to have no complicated interfaces between the user and the support. Some resources for well being are very hard to find, or are hidden in many different menus, interfaces, or lists. With this, it has never been easier to get all the well being resources in one place.</p>" +
        "<h2>How It Will Help With Well Being</h2><p>This website will help with well being by giving you all the resources needed to be a better person than you were yesterday. You can learn how to set SMART goals, learn how to practice resilience, and so much more.</p>" +
        "<div id='buttons'><button onclick='goToHome()'>Back</button></div>";
        break;
    default:
        break;
}
