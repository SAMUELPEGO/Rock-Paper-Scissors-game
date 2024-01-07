modal = document.getElementById("modal_rules");
body = document.getElementById("body");

const open_modal = ()=> {
    modal.showModal();
    body.style.overflowY = "hidden";
    
}
const close_modal = ()=> {
    modal.close();
    body.style.overflowY = "visible";
}