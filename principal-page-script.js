
modal = document.getElementsByClassName("modal_rules");

const open_modal_normal_mode = ()=> {
    modal[0].showModal();
    document.body.style.overflowY = "hidden";
    
}
const close_modal_normal_mode = ()=> {
    modal[0].close();
    document.body.style.overflowY = "visible";
}


const open_modal_bonus_mode = ()=> {
    modal[1].showModal();
    document.body.style.overflowY = "hidden";
    
}
const close_modal_bonus_mode = ()=> {
    modal[1].close();
    document.body.style.overflowY = "visible";
}
