let tabs = document.getElementsByClassName("tab")
const media_query = window.matchMedia("(min-width: 576px)")

let small_screen_device

media_query.addListener(handle_device_change)

function handle_device_change(query) {
    if (!query.matches) {
        tabs.item(2).innerHTML = "LCM"
        tabs.item(3).innerHTML = "HCF"
        
        small_screen_device = true
    }else{
        tabs.item(2).innerHTML = "Lowest Common Multiples"
        tabs.item(3).innerHTML = "Highest Common Factors"

        small_screen_device = false
    }

    if(small_screen_device){
        tabs[1].style.display = "none"
    }else{
        tabs[1].style.display = "block"
    }

    on_click(0)
}

handle_device_change(media_query)


function on_mouse_enter(index) {
    if(!small_screen_device){
        if (document.body.getAttribute('data-state') !== index.toString()) {
            tabs[index].style.backgroundColor = "white"
            tabs[index].style.color = "aquamarine"
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
}