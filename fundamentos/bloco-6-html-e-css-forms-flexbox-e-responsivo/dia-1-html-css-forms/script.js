const button = document.getElementById('button-submit');

function interromperPadrao(event) {
    event.preventDefault()
}

button.addEventListener('click', interromperPadrao)