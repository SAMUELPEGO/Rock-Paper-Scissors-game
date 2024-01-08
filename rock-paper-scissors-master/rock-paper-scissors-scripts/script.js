const button_paper = document.getElementById("button_paper");
const button_scissors = document.getElementById("button_scissors");
const button_rock = document.getElementById("button_rock");
const div_election = document.getElementById("div_election");
const section = document.getElementById("container_buttons");
const buttons = document.getElementsByClassName("button");
const div_result = document.getElementsByClassName("div_result");
const points = document.getElementById("points");




weakness = {
    "button_paper":button_scissors,
    "button_scissors":button_rock,
    "button_rock":button_paper,
}

for (let i of buttons) {
    i.addEventListener("click", function() {
       div_election.innerHTML = i.outerHTML;
       let house_election = buttons[Math.round(Math.random()*2)];
       div_election.innerHTML += house_election.outerHTML;
       section.classList.remove("d-flex");
       section.setAttribute("hidden",true);
       let winner_style = "inset 0px -5px 0 0 rgba(0, 0, 0, .4),0px 0px 0px 25px rgba(255,255,255,.05),0px 0px 0px 50px rgba(255,255,255,.04),0px 0px 0px 75px rgba(255,255,255,.02)";
       
       setTimeout(()=> {
       if (i.outerHTML == house_election.outerHTML) {
           let result = document.getElementsByClassName("tie");
           result[0].removeAttribute("hidden");
       }
       
       else if (i == button_paper && house_election == weakness["button_paper"] ) {
                result = document.getElementsByClassName("lose");
                result[0].removeAttribute("hidden");
                div_election.lastChild.style.boxShadow = winner_style;
                points.innerHTML = parseInt(points.innerHTML) - 1;
            }
            else if (i == button_scissors && house_election == weakness["button_scissors"] ) {
                result = document.getElementsByClassName("lose");
                result[0].removeAttribute("hidden");
                div_election.lastChild.style.boxShadow = winner_style;
                points.innerHTML = parseInt(points.innerHTML) - 1;
            }
            else if (i == button_rock && house_election == weakness["button_rock"] ) {
                result = document.getElementsByClassName("lose");
                result[0].removeAttribute("hidden");
                div_election.lastChild.style.boxShadow = winner_style;
                points.innerHTML = parseInt(points.innerHTML) - 1;
            }
            else {
                result = document.getElementsByClassName("win");
                result[0].removeAttribute("hidden");
                points.innerHTML = parseInt(points.innerHTML) + 1;
                div_election.firstChild.style.boxShadow = winner_style;
            }
        },1000);
       });
    }


for (let i of div_result) {
    i.addEventListener("click",function() {
        div_election.innerHTML = "";
        i.setAttribute("hidden",true);
        section.classList.add("d-flex");
        section.removeAttribute("hidden");
    })
}
