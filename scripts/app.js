
function flip(element) {
    if (( element.children[0].style.display == "block") || (element.children[0].style.display == "")) {
        element.children[0].style.display = "none";
        element.children[1].style.display = "block";
    } else {
        element.children[0].style.display = "block";
        element.children[1].style.display = "none";
    }

};

function restart() {
    var back = document.getElementsByClassName('back');
    var front = document.getElementsByClassName('front');

    for (var i = 0; i < back.length; i++) {
        back[i].style.display = "block";
        front[i].style.display = "none";
    }

};