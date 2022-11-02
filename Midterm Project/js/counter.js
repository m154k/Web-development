$button = document.querySelector("#btnclck");
$span = document.querySelector("span");

function increment() {
    $span.innerHTML++;
}

$button.addEventListener("click", increment);