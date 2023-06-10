let tabs = document.getElementsByClassName("tab")
let dialog = document.querySelector('dialog');
const media_query = window.matchMedia("(min-width: 763px)")

let once = true
let current_index = 0

let small_screen_device

media_query.addListener(handle_device_change)

function handle_device_change(query) {
    if (!query.matches) {
        tabs.item(0).innerHTML = "FACTOR"
        tabs.item(2).innerHTML = "LCM"
        tabs.item(3).innerHTML = "HCF"

        small_screen_device = true
    }else{
        tabs.item(0).innerHTML = "Factor"
        tabs.item(2).innerHTML = "Lowest Common Multiple"
        tabs.item(3).innerHTML = "Highest Common Factor"

        small_screen_device = false
    }

    if(small_screen_device){
        tabs[1].style.display = "none"
    }else{
        tabs[1].style.display = "block"
    }

    on_click(0)

    if (once) {
        setInterval(() => {
            document.getElementById("load").style.display = "none"
        }, 2500);

        once = false
    }

    update()
}

handle_device_change(media_query)


function on_mouse_enter(index) {
    if(!small_screen_device){
        if (document.body.getAttribute('data-state') !== index.toString()) {
            tabs[index].style.backgroundColor = "rgb(93, 63, 211)"
            tabs[index].style.color = "white"
        }
    }
}

function on_mouse_leave(index) {
    if(!small_screen_device) {
        if (document.body.getAttribute('data-state') !== index.toString()) {
            tabs[index].style.backgroundColor = "black"
            tabs[index].style.color = "aquamarine"
        }
    }
}

function on_click(index) {
    document.body.setAttribute('data-state', `${index}`)

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.backgroundColor = "black"
        tabs[i].style.color = "aquamarine"
    }

    tabs[index].style.backgroundColor = "aquamarine"
    tabs[index].style.color = "black"

    current_index = index


    if(small_screen_device != true) {
        document.getElementById("heading").innerHTML = tabs[index].innerHTML + " Calculator"
    }else{
        let string = tabs[index].innerHTML.charAt(0).toUpperCase() + tabs[index].innerHTML.toLowerCase().slice(1) + " Calculator"
        document.getElementById("heading").innerHTML = string
    }
}

function openDialog() {
    if (current_index == 0){
        show_factors()
    }else if (current_index == 1){
        show_prime_factors()
    }else if (current_index == 2){
        show_lowest_common_factor()
    }else if(current_index == 3){
        show_highest_common_factor()
    }

    dialog.showModal();
}

function closeDialog() {
    dialog.close();
}

function buttons() {
    let state = document.body.getAttribute("data-state")
    let element = document.getElementById('main_button');

    if (numbers.length == 0){
        element.style.color = "grey"
        element.disabled = true;
        element.style.pointerEvents = "none";

        return
    }


    if (numbers.length > 1){
        if (state <= 1){
            element.style.color = "grey"
            element.disabled = true;
            element.style.pointerEvents = "none";
        }else {
            element.style.color = "aquamarine"
            element.disabled = false;
            element.style.pointerEvents = "all";
        }
    }else {
        if (state >= 2){
            element.style.color = "grey"
            element.disabled = true;
            element.style.pointerEvents = "none";
        }else {
            element.style.color = "aquamarine"
            element.disabled = false;
            element.style.pointerEvents = "all";
        }
    }
}