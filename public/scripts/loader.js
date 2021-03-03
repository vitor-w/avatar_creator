
function loader (state) {
    var background = document.querySelector('div.background');
    console.log(state);

    if (state == 1) {
        background.className += ' size fade-in';
        background.classList.remove('fade-out');
    } else {
        background.classList.remove('fade-in');
        background.classList.add('fade-out');
        setTimeout(() => {
            background.classList.remove('size');
        }, 200);
    }
}