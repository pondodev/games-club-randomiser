function randomise() {
    var value = document.getElementById("names-input").value;
    var names = value.split("\n");
    names = shuffle(names);
    var order_list = document.getElementById("order-list");
    order_list.innerHTML = "";
    for (var n of names) {
        var li = document.createElement("LI");
        var text = document.createTextNode(n);
        li.appendChild(text);
        order_list.appendChild(li);
    }

    document.getElementById("order-display").style = "visibility: visible;";
}

// thanks stack overflow <3
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}