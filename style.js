const collection = document.getElementsByClassName("tab")
const media_query = window.matchMedia("(min-width: 576px)")

let small_screen_device

media_query.addListener(handle_device_change)

function handle_device_change(query) {
    if (!query.matches) {
        collection.item(2).innerHTML = "LCM"
        collection.item(3).innerHTML = "HCF"
        
        small_screen_device = true
    }else{
        collection.item(2).innerHTML = "Lowest Common Multiple"
        collection.item(3).innerHTML = "Highest Common Factor"
        
        small_screen_device = false
    }

    if(small_screen_device){
        collection[1].remove();
    }

    on_click(0)
}

handle_device_change(media_query)


function on_mouse_enter(index) {
    if(!small_screen_device){
        collection[index].style.transitionDuration = "0.5s";

        if (document.body.getAttribute('data-state') !== index.toString()) {
            collection[index].style.backgroundColor = "white"
            collection[index].style.color = "black"
        }
    }
}

function on_mouse_leave(index) {
    if(!small_screen_device) {
        collection[index].style.transitionDuration = "0.5s";

        if (document.body.getAttribute('data-state') !== index.toString()) {
            collection[index].style.backgroundColor = "black"
            collection[index].style.color = "aquamarine"
        }
    }
}

function on_click(index) {
    collection[index].style.transitionDuration = "0s";

    document.body.setAttribute('data-state', `${index}`)

    for (let i = 0; i < collection.length; i++) {
        collection[i].style.backgroundColor = "black"
        collection[i].style.color = "aquamarine"
    }

    collection[index].style.backgroundColor = "aquamarine"
    collection[index].style.color = "black"
}