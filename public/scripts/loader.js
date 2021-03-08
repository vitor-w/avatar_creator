function loader (state) {
    const background = document.querySelector('div.background');
    console.log(state);

    if (state) {

        background.classList.remove('fade-out');
        background.className += ' size fade-in';
    } else {

        background.classList.remove('fade-in');
        background.classList.add('fade-out');
        setTimeout(() => {
            background.classList.remove('size');
        }, 200);
    };
};