let collection = document.getElementsByClassName("click");
const media_query = window.matchMedia("(min-width: 576px)");

media_query.addListener(handle_device_change);

function on_hover() {
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.borderColor = "rgba(255, 255, 255, 8%)"
    }
}

function reset() {
    for (let i = 0; i < collection.length; i++) {
        // collection[i].style.borderColor = document.querySelector(':root').getPropertyValue('--primary-color');
        collection[i].style.borderColor = "black"
    }
}


function handle_device_change(query) {
    if (!query.matches) {
        collection.item(2).innerHTML = "LCM";
        collection.item(3).innerHTML = "HCF";
    }
}


handle_device_change(media_query);
