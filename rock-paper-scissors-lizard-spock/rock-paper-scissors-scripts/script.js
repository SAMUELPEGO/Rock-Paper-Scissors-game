const button_paper = document.getElementById("button_paper");
const button_scissors = document.getElementById("button_scissors");
const button_rock = document.getElementById("button_rock");
const button_spock = document.getElementById("button_spock");
const button_lizard = document.getElementById("button_lizard");
const div_election = document.getElementById("div_election");
const section = document.getElementById("container_buttons");
const buttons = document.getElementsByClassName("button");
const div_result = document.getElementsByClassName("div_result");
const points = document.getElementById("points");


if (localStorage.getItem("points") !== null) {
    points.innerHTML = localStorage.getItem("points");
    }
else {
    points.innerHTML = "0";
}

    

weakness = {
    "button_paper":[button_scissors,button_lizard],
    "button_scissors":[button_rock,button_spock],
    "button_rock":[button_paper,button_spock],
    "button_spock":[button_lizard,button_paper],
    "button_lizard":[button_rock,button_scissors]
}



for (let i of buttons) {
    i.addEventListener("click", function() {
       div_election.innerHTML = i.outerHTML;
       let house_election = buttons[Math.round(Math.random()*4)];
       div_election.innerHTML += house_election.outerHTML;
       section.classList.remove("d-flex");
       section.setAttribute("hidden",true);
       let winner_style = "inset 0px -5px 0 0 rgba(0, 0, 0, .4),0px 0px 0px 25px rgba(255,255,255,.05),0px 0px 0px 50px rgba(255,255,255,.04),0px 0px 0px 75px rgba(255,255,255,.02)";
       
       setTimeout(()=> {
       if (i.outerHTML == house_election.outerHTML) {
           let result = document.getElementsByClassName("tie");
           result[0].removeAttribute("hidden");
       }
       
       else if (i == button_paper && (house_election == weakness["button_paper"][0] || house_election == weakness["button_paper"][1] ) ){
                result = document.getElementsByClassName("lose");
                result[0].removeAttribute("hidden");
                div_election.lastChild.style.boxShadow = winner_style;
                points.innerHTML = parseInt(points.innerHTML) - 1;
            }
            else if (i == button_scissors && (house_election == weakness["button_scissors"][0] || house_election == weakness["button_scissors"][1] )) {
                result = document.getElementsByClassName("lose");
                result[0].removeAttribute("hidden");
                div_election.lastChild.style.boxShadow = winner_style;
                points.innerHTML = parseInt(points.innerHTML) - 1;
            }
            else if (i == button_rock && (house_election == weakness["button_rock"][0] ||house_election == weakness["button_rock"][1] ) ) {
                result = document.getElementsByClassName("lose");
                result[0].removeAttribute("hidden");
                div_election.lastChild.style.boxShadow = winner_style;
                points.innerHTML = parseInt(points.innerHTML) - 1;
            }
            else if (i == button_spock && (house_election == weakness["button_spock"][0] || house_election == weakness["button_spock"][1] ) ) {
                result = document.getElementsByClassName("lose");
                result[0].removeAttribute("hidden");
                div_election.lastChild.style.boxShadow = winner_style;
                points.innerHTML = parseInt(points.innerHTML) - 1;
            }
            else if (i == button_lizard && (house_election == weakness["button_lizard"][0] || house_election == weakness["button_lizard"][1] ) ) {
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
